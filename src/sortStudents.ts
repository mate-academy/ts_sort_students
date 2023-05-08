// import { error } from 'console';

export interface Student {
  // describe Student interface
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[],
}

export enum SortType {
  // describe SortType enum
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'averageGrade',
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  // write your function
  const copiedStudents = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      switch (order) {
        case 'asc':
          copiedStudents.sort(
            (prevStudent, currStudent) => prevStudent[sortBy]
              .localeCompare(currStudent[sortBy]),
          );
          break;
        case 'desc':
          copiedStudents.sort(
            (prevStudent, currStudent) => currStudent[sortBy]
              .localeCompare(prevStudent[sortBy]),
          );
          break;
        default:
          throw new Error(`Type 'asc' or 'desc' not ${order}`);
      }
      break;
    case SortType.Age:
    case SortType.Married:
      switch (order) {
        case 'asc':
          copiedStudents.sort(
            (prevStudent, currStudent) => +prevStudent[sortBy]
            - +currStudent[sortBy],
          );
          break;
        case 'desc':
          copiedStudents.sort(
            (prevStudent, currStudent) => +currStudent[sortBy]
            - +prevStudent[sortBy],
          );
          break;
        default:
          throw new Error(`Type 'asc' or 'desc' not ${order}`);
      }
      break;
    case SortType.AverageGrade:
      switch (order) {
        case 'asc': {
          copiedStudents.sort((prevStudent, currStudent) => (prevStudent.grades
            .reduce((sum, num) => sum + num, 0)
            / prevStudent.grades.length) - (currStudent.grades
            .reduce((sum, num) => sum + num, 0)
            / currStudent.grades.length));
          break;
        }

        case 'desc': {
          copiedStudents.sort((prevStudent, currStudent) => (currStudent.grades
            .reduce((sum, num) => sum + num, 0)
            / currStudent.grades.length) - (prevStudent.grades
            .reduce((sum, num) => sum + num, 0)
            / prevStudent.grades.length));
          break;
        }
        default:
          throw new Error(`Type 'asc' or 'desc' not ${order}`);
      }
      break;
    default:
      throw new Error('Unsupported sort type');
  }

  return copiedStudents;
}

export interface Student {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'averageGrade',
}

export type SortOrder = 'asc' | 'desc';

function getAverageGrade(student: number[]): number {
  return student.reduce((studentA, studentB) => {
    return studentA + studentB;
  }, 0) / student.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const studentsCopy = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      if (order === 'asc') {
        studentsCopy.sort((studentA, studentB) => {
          return studentA[sortBy].localeCompare(studentB[sortBy]);
        });
      } else {
        studentsCopy.sort((studentA, studentB) => {
          return studentB[sortBy].localeCompare(studentA[sortBy]);
        });
      }
      break;

    case SortType.Age:
    case SortType.Married:
      if (order === 'asc') {
        studentsCopy.sort((studentA, studentB) => {
          return +studentA[sortBy] - +studentB[sortBy];
        });
      } else {
        studentsCopy.sort((studentA, studentB) => {
          return +studentB[sortBy] - +studentA[sortBy];
        });
      }
      break;

    case SortType.AverageGrade:
      if (order === 'asc') {
        studentsCopy.sort((studentA, studentB) => {
          return (
            getAverageGrade(studentA.grades) - getAverageGrade(studentB.grades)
          );
        });
      } else {
        studentsCopy.sort(
          (studentA, studentB) => getAverageGrade(studentB.grades)
            - getAverageGrade(studentA.grades),
        );
      }
      break;

    default:
      break;
  }

  return studentsCopy;
}

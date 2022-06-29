
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

function getAverageGrade(student:Student):number {
  return student.grades.reduce((sum, grade) => sum + grade)
    / student.grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  let studentsCopy = [...students];

  if (order === 'asc') {
    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        studentsCopy = studentsCopy.sort((studentA,
          studentB) => studentA[sortBy].localeCompare(studentB[sortBy]));
        break;

      case SortType.Age:
      case SortType.Married:
        studentsCopy = studentsCopy.sort((studentA,
          studentB):number => +studentA[sortBy] - +studentB[sortBy]);
        break;
      case SortType.AverageGrade:
        studentsCopy = studentsCopy.sort((studentA,
          studentB):number => getAverageGrade(studentA)
            - getAverageGrade(studentB));
        break;

      default:

        break;
    }
  }

  if (order === 'desc') {
    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        studentsCopy = studentsCopy.sort((studentA,
          studentB) => studentB[sortBy].localeCompare(studentA[sortBy]));
        break;

      case SortType.Age:
      case SortType.Married:
        studentsCopy = studentsCopy.sort((studentA,
          studentB):number => +studentB[sortBy] - +studentA[sortBy]);
        break;
      case SortType.AverageGrade:
        studentsCopy = studentsCopy.sort((studentA,
          studentB):number => getAverageGrade(studentB)
            - getAverageGrade(studentA));
        break;

      default:

        break;
    }
  }

  return studentsCopy;
}

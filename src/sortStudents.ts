
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
  AverageGrade = 'averageGrade'
}

export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const sortedStudents = [...students];

  sortedStudents.sort((a, b) => {
    let result = 0;

    switch (sortBy) {
      case SortType.Name: {
        result = (
          a.name.localeCompare(b.name) * (order === 'asc' ? 1 : -1)
        );
        break;
      }

      case SortType.Surname: {
        result = (
          a.surname.localeCompare(b.surname) * (order === 'asc' ? 1 : -1)
        );
        break;
      }

      case SortType.Age: {
        result = ((a.age - b.age) * (order === 'asc' ? 1 : -1));
        break;
      }

      case SortType.Married: {
        result = (a.married > b.married && (order === 'desc')) ? -1 : 1;
        break;
      }

      case SortType.AverageGrade: {
        result = (
          (a.grades.reduce((sum, grade) => sum + grade, 0)
            / a.grades.length - b.grades
            .reduce((sum, grade) => sum + grade, 0) / b.grades.length)
            * (order === 'asc' ? 1 : -1)
        );
        break;
      }

      default:
        return 0;
    }

    return result;
  });

  return sortedStudents;
}

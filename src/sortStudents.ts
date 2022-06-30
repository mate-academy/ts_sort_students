export interface Student {
  name: string;
  surname: string;
  age: number;
  married: boolean | null;
  grades: number[];
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'grades',
}

export type SortOrder = 'asc' | 'desc';

function countAverageGrade(array: number[]): number {
  const arrLength = array.length;
  const AverageGradeByStudent = array.reduce((a, b) => a + b) / arrLength;

  return AverageGradeByStudent;
}

export function sortStudents(students: Student[],
  sortBy: SortType, order: SortOrder): Student[] {
  const copyOfStudents = [...students];

  switch (sortBy) {
    case SortType.Name:
      return copyOfStudents.sort((a, b) => {
        return a.name.localeCompare(b.name);
      });

    case SortType.Surname:
      return copyOfStudents.sort((a, b) => {
        return a.surname.localeCompare(b.surname);
      });

    case SortType.Age:
      return copyOfStudents.sort((a, b) => {
        if (order === 'desc') {
          return b.age - a.age;
        }

        return a.age - b.age;
      });

    case SortType.Married:
      if (order === 'desc') {
        return copyOfStudents.sort((a, b) => b.married - a.married);
      }

      return copyOfStudents.sort((a, b) => a.married - b.married);

    case SortType.AverageGrade:
      if (order === 'desc') {
        return copyOfStudents
          .sort((a, b) => countAverageGrade(b.grades)
          - countAverageGrade(a.grades));
      }

      return copyOfStudents
        .sort((a, b) => countAverageGrade(a.grades)
        - countAverageGrade(b.grades));

    default:
      break;
  }

  return copyOfStudents;
}

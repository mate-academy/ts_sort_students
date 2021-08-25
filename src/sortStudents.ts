interface Student {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];
}

export enum SortType {
  Name,
  Surname,
  Age,
  Married,
  AverageGrade,
}

type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const sorted = [...students];

  function getAverageGrade(grades: number[]): number {
    return grades.reduce((sum: number, a: number) => sum + a) / grades.length;
  }

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return order === 'desc'
        ? sorted.sort((a: Student, b: Student):number => {
          return b.surname.localeCompare(a.surname);
        })
        : sorted.sort((a: Student, b: Student):number => {
          return a.surname.localeCompare(b.surname);
        });

    case SortType.Age:
      return order === 'desc'
        ? sorted.sort((a: Student, b: Student):number => b.age - a.age)
        : sorted.sort((a: Student, b: Student):number => a.age - b.age);

    case SortType.Married:
      sorted.sort((a: Student, b: Student): number => {
        if (a.married === b.married) {
          return 0;
        }

        if (order === 'desc') {
          return a.married ? -1 : 1;
        }

        return a.married ? 1 : -1;
      });
      break;

    case SortType.AverageGrade:
      return order === 'desc'
        ? sorted.sort((a: Student, b: Student):number => {
          return getAverageGrade(b.grades) - getAverageGrade(a.grades);
        })
        : sorted.sort((a: Student, b: Student):number => {
          return getAverageGrade(a.grades) - getAverageGrade(b.grades);
        });

    default:
      break;
  }

  return sorted;
}
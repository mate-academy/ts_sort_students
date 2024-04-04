
export interface Student {
  // describe Student interface
}

export enum SortType {
  // describe SortType enum
}

// create SortOrder type
export type SortOrder;


function averageGrade(grades: number[]): number {
  return grades.reduce((sum, a) => sum + a, 0) / grades.length;
}

interface Student {
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
  AverageGrade = 'grades',
}

type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const studentsSort: Student[] = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      studentsSort.sort(
        (firstStudent: Student, secondStudent: Student) => (
          order === 'asc'
            ? firstStudent[sortBy].localeCompare(secondStudent[sortBy])
            : secondStudent[sortBy].localeCompare(firstStudent[sortBy])
        ),
      );

      break;

    case SortType.Age:
      studentsSort.sort(
        (firstStudent: Student, secondStudent: Student) => (
          order === 'asc'
            ? firstStudent[sortBy] - secondStudent[sortBy]
            : secondStudent[sortBy] - firstStudent[sortBy]
        ),
      );

      break;

    case SortType.Married:
      studentsSort.sort(
        (firstStudent: Student, secondStudent: Student) => {
          if (firstStudent[sortBy] === secondStudent[sortBy]) {
            return 0;
          }

          if (order === 'asc') {
            return firstStudent[sortBy] ? 1 : -1;
          }

          return firstStudent[sortBy] ? -1 : 1;
        },
      );

      break;

    case SortType.AverageGrade:
      studentsSort.sort(
        (firstStudent: Student, secondStudent: Student) => (
          order === 'asc'
            ? averageGrade(
              firstStudent[sortBy],
            ) - averageGrade(secondStudent[sortBy])
            : averageGrade(
              secondStudent[sortBy],
            ) - averageGrade(firstStudent[sortBy])
        ),
      );

      break;

    default:
      throw new Error('Bad valid data');
  }

  return studentsSort;
}


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
  AverageGrade = 'grades',
}

export type SortOrder = 'asc' | 'desc';

function getAverageGrade(grades: number[]): number {
  return grades
    .reduce((mark1: number, mark2: number) => (mark1 + mark2), 0)
    / grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const studentsToSort = [...students];

  return studentsToSort.sort(
    (first: Student, second: Student) => {
      switch (sortBy) {
        case SortType.Name:
        case SortType.Surname:
          return order === 'asc'
            ? first[sortBy].localeCompare(second[sortBy])
            : second[sortBy].localeCompare(first[sortBy]);

        case SortType.Age:
        case SortType.Married:
          return order === 'asc'
            ? Number(first[sortBy]) - Number(second[sortBy])
            : Number(second[sortBy]) - Number(first[sortBy]);

        case SortType.AverageGrade:
          return order === 'asc'
            ? getAverageGrade(first[sortBy]) - getAverageGrade(second[sortBy])
            : getAverageGrade(second[sortBy]) - getAverageGrade(first[sortBy]);

        default:
          throw new Error('There is nothing to sort, try to sort another type');
      }
    },
  );
}

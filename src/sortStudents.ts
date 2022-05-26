export function average(grades: number[]): number {
  return grades.reduce((prevVal, currVal) => prevVal + currVal, 0)
    / grades.length;
}

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

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] | void {
  const copy: Student[] = [...students];

  return copy.sort((person1, person2) => {
    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        if (order === 'asc') {
          return person1[sortBy].localeCompare(person2[sortBy]);
        }

        return person2[sortBy].localeCompare(person1[sortBy]);

      case SortType.Age:
      case SortType.Married:
        if (order === 'asc') {
          return +person1[sortBy] - +person2[sortBy];
        }

        return +person2[sortBy] - +person1[sortBy];

      case SortType.AverageGrade:
        if (order === 'asc') {
          return average(person1[sortBy]) - average(person2[sortBy]);
        }

        return average(person2[sortBy]) - average(person1[sortBy]);

      default:
        return copy;
    }
  });
}

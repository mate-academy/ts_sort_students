
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

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const sorted: Student[] = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      sorted
        .sort((person1: Student, person2: Student) => {
          return person1[sortBy].localeCompare(person2[sortBy]);
        });

      return order === 'asc'
        ? sorted
        : sorted.reverse();

    case SortType.Age:
      return sorted.sort((person1: Student, person2: Student) => {
        return order === 'asc'
          ? person1[sortBy] - person2[sortBy]
          : person2[sortBy] - person1[sortBy];
      });

    case SortType.Married:
      return sorted.sort((person1: Student, person2: Student) => {
        return order === 'asc'
          ? Number(person1[sortBy]) - Number(person2[sortBy])
          : Number(person2[sortBy]) - Number(person1[sortBy]);
      });

    case SortType.AverageGrade:
      return sorted.sort((person1: Student, person2: Student) => {
        const average1: number = person1[sortBy]
          .reduce((a, b) => a + b, 0) / person1[sortBy].length;
        const average2: number = person2[sortBy]
          .reduce((a, b) => a + b, 0) / person2[sortBy].length;

        return order === 'asc'
          ? average1 - average2
          : average2 - average1;
      });

    default: {
      return sorted;
    }
  }
}

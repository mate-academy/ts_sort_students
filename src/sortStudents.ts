
export interface Student {
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[],
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
  const copy: Student[] = [...students];

  copy.sort((person1, person2) => {
    let personAAverage: number;
    let personBAverage: number;

    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return order === 'desc'
          ? person2[sortBy].localeCompare(person1[sortBy])
          : person1[sortBy].localeCompare(person2[sortBy]);

      case SortType.Age:
      case SortType.Married:
        return order === 'desc'
          ? +person2[sortBy] - +person1[sortBy]
          : +person1[sortBy] - +person2[sortBy];

      case SortType.AverageGrade:
        personAAverage = person1[sortBy]
          .reduce((prev: number, item: number) => (prev + item)
            , 0) / person1[sortBy].length;

        personBAverage = person2[sortBy]
          .reduce((prev: number, item: number) => (prev + item)
            , 0) / person2[sortBy].length;

        return order === 'desc'
          ? personBAverage - personAAverage
          : personAAverage - personBAverage;

      default:
        return 0;
    }
  });

  return copy;
}

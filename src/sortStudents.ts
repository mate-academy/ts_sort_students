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
  const people: Student[] = [...students];

  people.sort((personA, personB) => {
    let personAAverage: number;
    let personBAverage: number;

    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return order === 'desc'
          ? personB[sortBy].localeCompare(personA[sortBy])
          : personA[sortBy].localeCompare(personB[sortBy]);

      case SortType.Age:
      case SortType.Married:
        return order === 'desc'
          ? +personB[sortBy] - +personA[sortBy]
          : +personA[sortBy] - +personB[sortBy];

      case SortType.AverageGrade:
        personAAverage = personA[sortBy]
          .reduce((prev: number, item: number) => (prev + item)
            , 0) / personA[sortBy].length;

        personBAverage = personB[sortBy]
          .reduce((prev: number, item: number) => (prev + item)
            , 0) / personB[sortBy].length;

        return order === 'desc'
          ? personBAverage - personAAverage
          : personAAverage - personBAverage;

      default:
        return 0;
    }
  });

  return people;
}

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

export type SortOrder = 'asc' | 'desc';

export function sortStudents(students:Student[], sortBy: SortType,
  order: SortOrder): Student[] {
  const res = [...students];

  const getAverage = (array: number[]): number => array
    .reduce((acc, el) => acc + el, 0) / array.length;

  res.sort((firstEl, secondEl) => {
    const orderElement = {
      first: firstEl,
      second: secondEl,
    };

    if (order === 'desc') {
      orderElement.first = secondEl;
      orderElement.second = firstEl;
    }

    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return orderElement.first[sortBy]
          .localeCompare(orderElement.second[sortBy]);

      case SortType.Age:
        return orderElement.first[sortBy] - orderElement.second[sortBy];

      case SortType.Married:
        return (+orderElement.first[sortBy]) - (+orderElement.second[sortBy]);

      default:
        return getAverage(orderElement.first[sortBy])
        - getAverage(orderElement.second[sortBy]);
    }
  });

  return res;
}

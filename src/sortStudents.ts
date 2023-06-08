
export interface Student {
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: [],
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'grades',
}

export enum SortOrder{
  Ascending = 'asd',
  Descending = 'desc',
}

export const averegeGrades = (grades: number[]): number => {
  return grades.reduce((acc, curr) => acc + curr, 0) / grades.length;
};

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  return [...students].sort((a, b) => {
    let [first, second] = [a, b];

    if (order === SortOrder.Descending) {
      [first, second] = [second, first];
    }

    switch (sortBy) {
      case (SortType.Name):
      case (SortType.Surname):
        return first[sortBy].localeCompare(second[sortBy]);

      case (SortType.Age):
      case (SortType.Married):
        return +first[sortBy] - +second[sortBy];

      case (SortType.AverageGrade):
        return averegeGrades(first[sortBy]) - averegeGrades(second[sortBy]);

      default:
        return 1;
    }
  });
}

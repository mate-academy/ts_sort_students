
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

const average = (grades: number[]): number => {
  return grades.reduce((a, b) => a + b) / grades.length;
};

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const arrayStudent: Student[] = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return order === 'asc'
        ? arrayStudent.sort((init, current) => (
          init[sortBy].localeCompare(current[sortBy])))
        : arrayStudent.sort((init, current) => (
          current[sortBy].localeCompare(init[sortBy])));

    case SortType.Age:
    case SortType.Married:
      return order === 'asc'
        ? arrayStudent.sort((init, current) => (
          Number(init[sortBy]) - Number(current[sortBy])))
        : arrayStudent.sort((init, current) => (
          Number(current[sortBy]) - Number(init[sortBy])));

    case SortType.AverageGrade:
      return order === 'asc'
        ? arrayStudent.sort(
          (init, current) => (
            average(init[sortBy]) - average(current[sortBy])),
        )
        : arrayStudent.sort(
          (init, current) => (
            average(current[sortBy]) - average(init[sortBy])),
        );

    default:
      throw new Error('Error');
  }
}

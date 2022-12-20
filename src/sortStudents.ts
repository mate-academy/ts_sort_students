
export interface Student {
  // describe Student interface
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];
}

export enum SortType {
  // describe SortType enum
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'averageGrade',

}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

const averageGrade = (grades: number[]): number => {
  return grades
    .reduce((initial, current) => initial + current, 0) / grades.length;
};

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copystudents = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return order === 'desc'
        ? copystudents.sort((a, b) => b[sortBy].localeCompare(a[sortBy]))
        : copystudents.sort((a, b) => a[sortBy].localeCompare(b[sortBy]));

    case SortType.Married:
    case SortType.Age:
      // eslint-disable-next-line no-case-declarations
      const result = copystudents
        .sort((a, b) => Number(b[sortBy]) - Number(a[sortBy]));

      return order === 'desc'
        ? result
        : result.reverse();

    case SortType.AverageGrade:
      // eslint-disable-next-line no-case-declarations
      // const resultAve = copystudents
      //   .sort((a, b) => averageGrade(b.grades) - averageGrade(a.grades));

      return order === 'desc'
        ? copystudents
          .sort((a, b) => averageGrade(b.grades) - averageGrade(a.grades))
        : copystudents
          .sort((a, b) => averageGrade(a.grades) - averageGrade(b.grades));

    default:
      throw new Error('Sort Type is not supported');
  }
}

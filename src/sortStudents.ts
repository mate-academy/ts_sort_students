export interface Student {
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number [],
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'aversgeGrade',
}

export type SortOrder = 'asc' | 'desc';

const averageGrade = (grades: number[]): number => {
  return grades.reduce((grade1, grade2) => grade1 + grade2, 0) / grades.length;
};

export function sortStudents(
  students : Student[],
  sortBy : SortType,
  order : SortOrder,
) : Student[] {
  const result = [...students].sort((first, second) => {
    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return (
          order === 'asc'
            ? first[sortBy].localeCompare(second[sortBy])
            : second[sortBy].localeCompare(first[sortBy])
        );

      case SortType.Age:
      case SortType.Married:
        return (
          order === 'asc'
            ? +first[sortBy] - +second[sortBy]
            : +second[sortBy] - +first[sortBy]
        );

      case SortType.AverageGrade:
        return (
          order === 'asc'
            ? averageGrade(first.grades) - averageGrade(second.grades)
            : averageGrade(second.grades) - averageGrade(first.grades)
        );

      default:
        return 0;
    }
  });

  return result;
}

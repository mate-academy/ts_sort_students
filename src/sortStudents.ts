
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

function averageGrade(grades: number[]): number {
  return grades.reduce((first, last) => first + last, 0) / grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const peoples: Student[] = [...students];

  switch (sortBy) {
    case 'name':
    case 'surname':
      return peoples.sort((first, last) => {
        return order === 'asc'
          ? first[sortBy].localeCompare(last[sortBy])
          : last[sortBy].localeCompare(first[sortBy]);
      });

    case 'grades':
      return peoples.sort((first, last) => {
        return order === 'asc'
          ? averageGrade(first[sortBy]) - averageGrade(last[sortBy])
          : averageGrade(last[sortBy]) - averageGrade(first[sortBy]);
      });

    default:
      return peoples.sort((first, last) => {
        return order === 'asc'
          ? +first[sortBy] - +last[sortBy]
          : +last[sortBy] - +first[sortBy];
      });
  }
}

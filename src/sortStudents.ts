export interface Student {
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[],
}
export enum SortType {
  Name= 'name',
  Surname='surname',
  Age='age',
  Married='married',
  AverageGrade='grades',
}
export type SortOrder = 'asc' | 'desc';

function getAverageMark(marks: number[]) :number {
  return marks.reduce((sum, mark) => sum + mark) / marks.length;
}

export function sortStudents(
  students:Student[],
  sortBy:SortType,
  order:SortOrder,
) : Student[] {
  const sortOrder = order === 'desc' ? -1 : 1;

  return [...students].sort((s1, s2) => {
    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return sortOrder * (s1[sortBy].localeCompare(s2[sortBy]));

      case SortType.Age:
      case SortType.Married:
        return sortOrder * (+s1[sortBy] - +s2[sortBy]);

      case SortType.AverageGrade:
        return sortOrder
          * (getAverageMark(s1[sortBy]) - getAverageMark(s2[sortBy]));

      default: return 0;
    }
  });
}

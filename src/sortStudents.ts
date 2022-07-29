
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

function getAverGrade(student: Student): number {
  const AverResult = student.grades.reduce((sum, x) => sum + x, 0)
    / student.grades.length;

  return AverResult;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const newArr: Student[] = [...students];

  const directions = {
    asc: 1,
    desc: -1,
  };

  const direction: number = directions[order];

  newArr.sort((first, second) => {
    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return direction * first[sortBy].localeCompare(second[sortBy]);

      case SortType.Age:
      case SortType.Married:
        return direction * (Number(first[sortBy]) - Number(second[sortBy]));

      case SortType.AverageGrade:
        return direction * (getAverGrade(first) - getAverGrade(second));

      default:
        return 0;
    }
  });

  return newArr;
}

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

export type SortOrder = 'asc'|'desc';

function getAverageGrade(grades:number[]):number {
  const sumOfGrades = grades.reduce((sum, grade) => sum + grade, 0);
  const gradesCount = grades.length;

  return sumOfGrades / gradesCount;
}

export function sortStudents(
  students:Student[],
  sortBy:SortType,
  order:SortOrder,
):Student[] {
  const sortedStudents = [...students];
  const currentOrder = order === 'asc';

  sortedStudents.sort((a, b) => {
    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return currentOrder
          ? a[sortBy].localeCompare(b[sortBy])
          : b[sortBy].localeCompare(b[sortBy]);

      case SortType.AverageGrade:
        return currentOrder
          ? getAverageGrade(a[sortBy]) - getAverageGrade(b[sortBy])
          : getAverageGrade(b[sortBy]) - getAverageGrade(a[sortBy]);

      case SortType.Age:
      case SortType.Married:
        return currentOrder
          ? +a[sortBy] - +b[sortBy]
          : +b[sortBy] - +a[sortBy];

      default:
        throw new Error('incorrect input data');
    }
  });

  return sortedStudents;
}


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
  AverageGrade = 'avegrade',
}

export type SortOrder = 'asc' | 'desc';

function getAverage(s: Student): number {
  return (s.grades.reduce((sum, grade) => sum + grade, 0) / s.grades.length);
}

export function sortStudents(students: Student[],
  sortBy: SortType, order: SortOrder): Student[] {
  const sortedStudents = [...students];

  sortedStudents.sort((a, b) => {
    let result = 0;

    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        result = a[sortBy].localeCompare(b[sortBy]);
        break;
      case SortType.Age:
      case SortType.Married:
        result = Number(a[sortBy]) - Number(b[sortBy]);
        break;

      case SortType.AverageGrade:
        result = getAverage(a) - getAverage(b);
        break;

      default:
        throw new Error('sort type not supported');
    }

    return order === 'asc' ? result : -result;
  });

  return sortedStudents;
}

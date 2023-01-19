
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
  AverageGrade = 'grades'
}

export type SortOrder = 'asc' | 'desc';

export function getAverageMark(person: Student): number {
  return person.grades.reduce((sum, mark) => (
    sum + mark), 0) / person.grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  return [...students].sort((a, b) => {
    switch (sortBy) {
      case (SortType.Name):
      case (SortType.Surname):
        return (order === 'asc')
          ? a[sortBy].localeCompare(b[sortBy])
          : b[sortBy].localeCompare(a[sortBy]);
      case (SortType.Age):
      case (SortType.Married):
        return (order === 'asc')
          ? Number(a[sortBy]) - Number(b[sortBy])
          : Number(b[sortBy]) - Number(a[sortBy]);
      case (SortType.AverageGrade):
        return (order === 'asc')
          ? getAverageMark(a) - getAverageMark(b)
          : getAverageMark(b) - getAverageMark(a);
      default:
        throw Error('There is no such property. Lets try another :)');
    }
  });
}

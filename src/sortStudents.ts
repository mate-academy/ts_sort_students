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
  AverageGrade = 'averageGrade',
}

export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const result = [...students];
  const getAverage = (student: Student): number => {
    const total = student.grades.reduce((sum, grade) => sum + grade, 0);

    return total / student.grades.length;
  };

  switch (sortBy) {
    case SortType.Name:
      return order === 'asc'
        ? result.sort((a, b) => a.name.localeCompare(b.name))
        : result.sort((a, b) => b.name.localeCompare(a.name));
    case SortType.Surname:
      return order === 'asc'
        ? result.sort((a, b) => a.surname.localeCompare(b.surname))
        : result.sort((a, b) => b.surname.localeCompare(a.surname));
    case SortType.Age:
      return order === 'asc'
        ? result.sort((a, b) => a.age - b.age)
        : result.sort((a, b) => b.age - a.age);
    case SortType.Married:
      return order === 'asc'
        ? result.sort((a, b) => +a.married - +b.married)
        : result.sort((a, b) => +b.married - +a.married);
    default:
      return order === 'asc'
        ? result.sort((a, b) => getAverage(a) - getAverage(b))
        : result.sort((a, b) => getAverage(b) - getAverage(a));
  }
}

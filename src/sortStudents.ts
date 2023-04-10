
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
  AverageGrade = 'averageGrade',
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copyStydent = [...students];

  const avgGrades = (grade: Student): number => {
    return grade.grades.reduce(
      (sum: number, num: number) => sum + num, 0,
    )
      / grade.grades.length;
  };

  return copyStydent.sort((a: Student, b: Student) => {
    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
      case SortType.Married:
        return order === 'asc'
          ? a[sortBy].toString().localeCompare(b[sortBy].toString())
          : b[sortBy].toString().localeCompare(a[sortBy].toString());

      case SortType.Age:
        return order === 'asc'
          ? a.age - b.age
          : b.age - a.age;

      case SortType.AverageGrade:
        return order === 'asc'
          ? avgGrades(a) - avgGrades(b)
          : avgGrades(b) - avgGrades(a);

      default:
        throw new Error('Error');
    }
  });
}

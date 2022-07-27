
export interface Student {
  name: string;
  surname: string
  age: number
  married: boolean
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

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const averageGrade = (grades: number[]): number => {
    return grades
      .reduce((sum: number, value: number) => sum + value, 0) / grades.length;
  };

  const copy = [...students];

  switch (sortBy) {
    case 'grades': copy.sort((a: Student, b: Student) => {
      return order === 'asc'
        ? averageGrade(a.grades) - averageGrade(b.grades)
        : averageGrade(b.grades) - averageGrade(a.grades);
    }); break;
    case 'married': copy.sort((a: Student, b: Student) => {
      return order === 'asc'
        ? +a.married - +b.married
        : +b.married - +a.married;
    }); break;
    case 'age': copy.sort((a: Student, b: Student) => {
      return order === 'asc'
        ? a.age - b.age
        : +b.age - +a.age;
    }); break;
    default: copy.sort((a: Student, b: Student) => {
      return order === 'asc'
        ? a[sortBy].localeCompare(b[sortBy])
        : b[sortBy].localeCompare(a[sortBy]);
    }); break;
  }

  return copy;
}

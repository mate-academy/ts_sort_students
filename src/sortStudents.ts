
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

export type SortOrder = 'asc' | 'desc';

export function sortStudents(students: Student[],
  sortBy: SortType, order: string): Object[] {
  const copy: Array<Student> = [...students];

  if (order === 'asc') {
    switch (sortBy) {
      case 'name':
      case 'surname':
        copy.sort((a, b) => a[sortBy].localeCompare(b[sortBy]));
        break;
      case 'averageGrade':
        copy.sort((a, b) => {
          const averageA: number
          = a.grades.reduce((sum, x) => sum + x, 0) / a.grades.length;
          const averageB: number
          = b.grades.reduce((sum, y) => sum + y, 0) / b.grades.length;

          return averageA - averageB;
        });
        break;
      default:
        break;
    }
  }

  if (order === 'desc') {
    switch (sortBy) {
      case 'age':
        copy.sort((a, b) => b.age - a.age);
        break;
      case 'married':
        copy.sort((a, b) => +b.married - +a.married);
        break;
      case 'averageGrade':
        copy.sort((a, b) => {
          const averageA: number
          = a.grades.reduce((sum, x) => sum + x, 0) / a.grades.length;
          const averageB: number
          = b.grades.reduce((sum, y) => sum + y, 0) / b.grades.length;

          return averageB - averageA;
        });
        break;
      default:
        break;
    }
  }

  return copy;
}


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
  let copy: Array<Student> = [...students];

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
    const marriedPeople: Array<Student> = [];

    switch (sortBy) {
      case 'age':
        copy.sort((a, b) => b.age - a.age);
        break;
      case 'married':

        for (let i: number = 0; i < copy.length; i += 1) {
          if (copy[i].married) {
            marriedPeople.push(copy[i]);
            copy.splice(i, 1);
          }
        }
        copy = [...marriedPeople, ...copy];
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

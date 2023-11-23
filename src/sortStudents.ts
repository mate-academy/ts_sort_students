
export interface Student {
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: Array<number>
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'averageGrade',

}

// create SortOrder type
export type SortOrder = 'asc' | 'esc';

export function sortStudents(students: Student[], sortBy: SortType, order:
SortOrder): Student[] {
  const copiedStudent = [...students];

  const callback = (a: Student, b: Student): number => {
    let aValue: number | string;
    let bValue: number | string;

    switch (sortBy) {
      case SortType.Name:
        aValue = a.name.toLowerCase();
        bValue = b.name.toLowerCase();
        break;
      case SortType.Surname:
        aValue = a.surname.toLowerCase();
        bValue = b.surname.toLowerCase();
        break;
      case SortType.Age:
        aValue = a.age;
        bValue = b.age;
        break;
      case SortType.Married:
        aValue = a.married ? 1 : 0;
        bValue = b.married ? 1 : 0;
        break;
      case SortType.AverageGrade:
        aValue = a.grades.reduce((acc, curr) => acc + curr) / a.grades.length;
        bValue = b.grades.reduce((acc, curr) => acc + curr) / b.grades.length;
        break;
      default:
        throw new Error('Wrong sortBy input');
    }

    if (order === 'asc') {
      return aValue < bValue ? -1 : 1;
    }

    return bValue < aValue ? -1 : 1;
  };

  return copiedStudent.sort(callback);
}

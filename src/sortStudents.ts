
export interface Student {
  name: string;
  surname: string;
  age: number;
  grades: number[];
  married: boolean;
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'grades',
}

export type SortOrder = 'asc' | 'desc';

const getAverage = (grades: number[]): number => {
  return grades.reduce((total, grade) => total + grade, 0) / grades.length;
};

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const compareFunction = (student1: Student, student2: Student): number => {
    let value1: number | string | boolean;
    let value2: number | string | boolean;

    switch (sortBy) {
      case SortType.Name:
        value1 = student1.name;
        value2 = student2.name;
        break;
      case SortType.Surname:
        value1 = student1.surname;
        value2 = student2.surname;
        break;
      case SortType.Age:
        value1 = student1.age;
        value2 = student2.age;
        break;
      case SortType.Married:
        value1 = student1.married;
        value2 = student2.married;
        break;
      case SortType.AverageGrade:

        value1 = getAverage(student1.grades);
        value2 = getAverage(student2.grades);
        break;

      default: throw new Error('Invalid value');
    }

    if (value1 === value2) {
      return 0;
    }

    if (order === 'asc') {
      return value1 < value2 ? -1 : 1;
    }

    return value1 < value2 ? 1 : -1;
  };

  return students.slice().sort(compareFunction);
}

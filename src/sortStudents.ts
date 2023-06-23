
export interface Student {
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[]
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'grades'
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const studentsArr: Student[] = [...students];

  let averageA: number;
  let averageB: number;

  studentsArr.sort((a: Student, b: Student) => {
    switch (sortBy) {
      case SortType.Name:
        if (order === 'asc') {
          return a.name.localeCompare(b.name);
        }

        if (order === 'desc') {
          return b.name.localeCompare(a.name);
        }

        return 0;

      case SortType.Surname:
        if (order === 'asc') {
          return a.surname.localeCompare(b.surname);
        }

        if (order === 'desc') {
          return b.surname.localeCompare(a.surname);
        }

        return 0;

      case SortType.Age:
        if (order === 'asc') {
          return a.age - b.age;
        }

        return b.age - a.age;

      case SortType.Married:
        return order === 'asc'
          ? +(a[sortBy]) - +(b[sortBy])
          : +(b[sortBy]) - +(a[sortBy]);

      case SortType.AverageGrade:
        averageA
        = a.grades.reduce((acc, value) => acc + value, 0) / a.grades.length;

        averageB
        = b.grades.reduce((acc, value) => acc + value, 0) / b.grades.length;

        if (order === 'asc') {
          return averageA - averageB;
        }

        return averageB - averageA;

      default:
        return 0;
    }
  });

  return studentsArr;
}

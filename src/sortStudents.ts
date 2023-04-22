export interface Student {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];
}

export enum SortType {
  Name,
  Surname,
  Age,
  Married,
  AverageGrade,
}

export type SortOrder = 'asc' | 'desc';

export function sortStudents(students: Student[],
  sortBy: SortType,
  order: SortOrder): Student[] {
  const copyStudent = [...students];

  switch (sortBy) {
    case SortType.Name: {
      copyStudent.sort((a, b) => {
        return order === 'asc'
          ? a.name.localeCompare(b.name)
          : b.name.localeCompare(a.name);
      });
      break;
    }

    case SortType.Surname: {
      copyStudent.sort((a, b) => {
        return order === 'asc'
          ? a.surname.localeCompare(b.surname)
          : b.surname.localeCompare(a.surname);
      });
      break;
    }

    case SortType.Age: {
      copyStudent.sort((a, b) => {
        return order === 'asc'
          ? a.age - b.age
          : b.age - a.age;
      });
      break;
    }

    case SortType.Married: {
      copyStudent.sort((a, b) => {
        return order === 'asc'
          ? +(a.married) - +(b.married)
          : +(b.married) - +(a.married);
      });
      break;
    }

    case SortType.AverageGrade: {
      copyStudent.sort((a, b) => {
        const averageA = a.grades.reduce((p, c) => p + c, 0) / a.grades.length;
        const averageB = b.grades.reduce((p, c) => p + c, 0) / b.grades.length;

        return order === 'asc'
          ? averageA - averageB
          : averageB - averageA;
      });
      break;
    }

    default: {
      throw new Error('Error');
    }
  }

  return copyStudent;
}

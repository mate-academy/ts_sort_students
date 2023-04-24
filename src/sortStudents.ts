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
  const studentsCopy = [...students];

  switch (sortBy) {
    case SortType.Name: {
      studentsCopy.sort((firstStudent, secondStudent) => {
        return order === 'asc'
          ? firstStudent.name.localeCompare(secondStudent.name)
          : secondStudent.name.localeCompare(firstStudent.name);
      });
      break;
    }

    case SortType.Surname: {
      studentsCopy.sort((firstStudent, secondStudent) => {
        return order === 'asc'
          ? firstStudent.surname.localeCompare(secondStudent.surname)
          : secondStudent.surname.localeCompare(firstStudent.surname);
      });
      break;
    }

    case SortType.Age: {
      studentsCopy.sort((firstStudent, secondStudent) => {
        return order === 'asc'
          ? firstStudent.age - secondStudent.age
          : secondStudent.age - firstStudent.age;
      });
      break;
    }

    case SortType.Married: {
      studentsCopy.sort((firstStudent, secondStudent) => {
        return order === 'asc'
          ? +(firstStudent.married) - +(secondStudent.married)
          : +(secondStudent.married) - +(firstStudent.married);
      });
      break;
    }

    case SortType.AverageGrade: {
      studentsCopy.sort((firstStudent, secondStudent) => {
        const averageA = firstStudent.grades.reduce((p, c) => p + c, 0)
        / firstStudent.grades.length;
        const averageB = secondStudent.grades.reduce((p, c) => p + c, 0)
         / secondStudent.grades.length;

        return order === 'asc'
          ? averageA - averageB
          : averageB - averageA;
      });
      break;
    }

    default: {
      throw new Error('Invalid sort type');
    }
  }

  return studentsCopy;
}

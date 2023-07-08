// import { defaultCipherList } from 'constants';

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
  AverageGrade = 'average'
}

export type SortOrder = 'asc' | 'desc';

function averageValue(values: number[]): number {
  let sum: number = 0;

  for (let i = 0; i < values.length; i += 1) {
    sum += values[i];
  }

  return sum / values.length;
}

export function sortStudents(students: Student[],
  sortBy: SortType, order: SortOrder): Student[] {
  const studentsCopy: Student[] = [...students];

  switch (sortBy) {
    case 'name': {
      const sortedStudents = studentsCopy.sort((student1, student2) => {
        return student1.name.localeCompare(student2.name);
      });

      return sortedStudents;
    }

    case 'surname': {
      let sortedStudents: Student[] = [];

      if (order === 'asc') {
        sortedStudents = studentsCopy.sort((student1, student2) => {
          return student1.surname.localeCompare(student2.surname);
        });
      }

      if (order === 'desc') {
        sortedStudents = studentsCopy.sort((student1, student2) => {
          return student2.surname.localeCompare(student1.surname);
        });
      }

      return sortedStudents;
    }

    case 'age': {
      if (order === 'asc') {
        const sortedStudents = studentsCopy.sort((student1, student2) => {
          return student1.age - student2.age;
        });

        return sortedStudents;
      }

      if (order === 'desc') {
        const sortedStudents = studentsCopy.sort((student1, student2) => {
          return student2.age - student1.age;
        });

        return sortedStudents;
      }

      break;
    }

    case 'married': {
      if (order === 'asc') {
        const sortedStudents = studentsCopy.sort((student1, student2) => {
          return student1.married.toString()
            .localeCompare(student2.married.toString());
        });

        return sortedStudents;
      }

      if (order === 'desc') {
        const sortedStudents = studentsCopy.sort((student1, student2) => {
          return student2.married.toString()
            .localeCompare(student1.married.toString());
        });

        return sortedStudents;
      }

      break;
    }

    case 'average': {
      if (order === 'asc') {
        const sortedStudents = studentsCopy.sort((student1, student2) => {
          return averageValue(student1.grades) - averageValue(student2.grades);
        });

        return sortedStudents;
      }

      if (order === 'desc') {
        const sortedStudents = studentsCopy.sort((student1, student2) => {
          const firstAverageNumber = averageValue(student1.grades);
          const secondAverageNumber = averageValue(student2.grades);

          return secondAverageNumber - firstAverageNumber;
        });

        return sortedStudents;
      }

      break;
    }

    default:
      return studentsCopy;
  }

  return studentsCopy;
}

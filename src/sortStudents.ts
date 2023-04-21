
export interface Student {
  // describe Student interface
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[],
}

export enum SortType {
  // describe SortType enum
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'avg',
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  // write your function
  const clonedStudents = [...students];

  switch (sortBy) {
    case SortType.Name: {
      if (order === 'asc') {
        clonedStudents.sort((a, b) => a.name.localeCompare(b.name));
        break;
      }

      clonedStudents.sort((a, b) => b.name.localeCompare(a.name));
      break;
    }

    case SortType.Surname: {
      if (order === 'asc') {
        clonedStudents.sort((a, b) => a.surname.localeCompare(b.surname));
        break;
      }

      clonedStudents.sort((a, b) => b.surname.localeCompare(a.surname));
      break;
    }

    case SortType.Age: {
      if (order === 'asc') {
        clonedStudents.sort((a, b) => a.age - b.age);
        break;
      }

      clonedStudents.sort((a, b) => b.age - a.age);
      break;
    }

    case SortType.Married: {
      if (order === 'asc') {
        clonedStudents.sort(
          (a, b) => String(a.married).localeCompare(String(b.married)),
        );
        break;
      }

      clonedStudents.sort(
        (a, b) => String(b.married).localeCompare(String(a.married)),
      );
      break;
    }

    case SortType.AverageGrade: {
      clonedStudents.sort((a, b) => {
        let avgA: number = 0;
        let avgB: number = 0;

        for (let i: number = 0; i < a.grades.length; i += 1) {
          avgA += a.grades[i];
        }

        for (let i: number = 0; i < b.grades.length; i += 1) {
          avgB += b.grades[i];
        }

        avgA /= a.grades.length;
        avgB /= b.grades.length;

        if (avgA > avgB && order === 'asc') {
          return 1;
        }

        if (avgA > avgB && order === 'desc') {
          return -1;
        }

        if (avgB > avgA && order === 'asc') {
          return -1;
        }

        if (avgB > avgA && order === 'desc') {
          return 1;
        }

        return 0;
      });
      break;
    }

    default: {
      throw new Error('Invalid Sorting Parameter.');
    }
  }

  return clonedStudents;
}

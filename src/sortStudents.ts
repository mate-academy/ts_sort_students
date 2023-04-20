
export interface Student {
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[],
}

export enum SortType {
  Name,
  Surname,
  Age,
  Married,
  AverageGrade,
}

export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const studentsCopy = [...students];

  switch (order) {
    case 'asc': {
      switch (sortBy) {
        case SortType.Name: {
          studentsCopy.sort((a, b) => a.name.localeCompare(b.name));
          break;
        }

        case SortType.Surname: {
          studentsCopy.sort((a, b) => a.surname.localeCompare(b.surname));
          break;
        }

        case SortType.Age: {
          studentsCopy.sort((a, b) => a.age - b.age);
          break;
        }

        case SortType.Married: {
          studentsCopy.sort((a, b) => Number(a.married) - Number(b.married));
          break;
        }

        case SortType.AverageGrade: {
          studentsCopy.sort((a, b) => (
            a.grades.reduce((accumulator, grade) => accumulator + grade, 0)
            / a.grades.length
          )
          - (
            b.grades.reduce((accumulator, grade) => accumulator + grade, 0)
            / b.grades.length
          ));
          break;
        }

        default: {
          throw new Error('Not supported sort type');
        }
      }
      break;
    }

    case 'desc': {
      switch (sortBy) {
        case SortType.Name: {
          studentsCopy.sort((a, b) => b.name.localeCompare(a.name));
          break;
        }

        case SortType.Surname: {
          studentsCopy.sort((a, b) => b.surname.localeCompare(a.surname));
          break;
        }

        case SortType.Age: {
          studentsCopy.sort((a, b) => b.age - a.age);
          break;
        }

        case SortType.Married: {
          studentsCopy.sort((a, b) => Number(b.married) - Number(a.married));
          break;
        }

        case SortType.AverageGrade: {
          studentsCopy.sort((a, b) => (
            b.grades.reduce((accumulator, grade) => accumulator + grade, 0)
            / b.grades.length
          )
          - (
            a.grades.reduce((accumulator, grade) => accumulator + grade, 0)
            / a.grades.length
          ));
          break;
        }

        default: {
          throw new Error('Not supported sort type');
        }
      }
      break;
    }

    default: {
      throw new Error('Not supported order type');
    }
  }

  return studentsCopy;
}

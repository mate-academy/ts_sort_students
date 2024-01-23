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

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

function sumAndAverage(grades: Array<number>): number {
  const sum = (grades).reduce((elem, value) => elem + value);
  const average = sum / grades.length;

  return average;
}

export function sortStudents(students: Array<Student>,
  sortBy: SortType, order: SortOrder): Array<Student> {
  let studentsSorted: Array<Student> = [];

  switch (sortBy) {
    case SortType.Name:
      studentsSorted = [...students].sort((a: Student, b: Student) => {
        if (order === 'asc') {
          return a.name.localeCompare(b.name);
        }

        return b.name.localeCompare(a.name);
      });
      break;
    case SortType.Surname:
      studentsSorted = [...students].sort((a: Student, b: Student) => {
        if (order === 'asc') {
          return a.surname.localeCompare(b.surname);
        }

        return b.surname.localeCompare(a.surname);
      });
      break;
    case SortType.Married:
      studentsSorted = [...students].sort((a: Student, b: Student) => {
        if (order === 'asc') {
          return Number(a.married) - Number(b.married);
        }

        return Number(b.married) - Number(a.married);
      });
      break;
    case SortType.Age:
      studentsSorted = [...students].sort((a: Student, b: Student) => {
        if (order === 'asc') {
          return a.age - b.age;
        }

        return b.age - a.age;
      });
      break;
    case SortType.AverageGrade:

      if (order === 'asc') {
        studentsSorted = [...students]
          .sort((a: Student, b: Student): number => {
            return sumAndAverage(a.grades) - sumAndAverage(b.grades);
          });
      } else {
        studentsSorted = [...students]
          .sort((a: Student, b: Student): number => {
            return sumAndAverage(b.grades) - sumAndAverage(a.grades);
          });
      }
      break;
    default:
      break;
  }

  return studentsSorted;
}

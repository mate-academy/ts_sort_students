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
  AverageGrade = 'averageGrade',
}

export type SortOrder = 'asc' | 'desc';

function getValueAverage(student: number[]): number {
  return (
    student.reduce((a, b) => {
      return a + b;
    }, 0) / student.length
  );
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const studentsCopy = [...students];

  switch (sortBy) {
    case SortType.Name:
      if (order === 'asc') {
        studentsCopy.sort((a, b) => a.name.localeCompare(b.name));
      } else {
        studentsCopy.sort((a, b) => b.name.localeCompare(a.name));
      }
      break;

    case SortType.Surname:
      if (order === 'asc') {
        studentsCopy.sort((a, b) => a.surname.localeCompare(b.surname));
      } else {
        studentsCopy.sort((a, b) => b.surname.localeCompare(a.surname));
      }
      break;

    case SortType.Age:
      if (order === 'asc') {
        studentsCopy.sort((a, b) => +a.age - +b.age);
      } else {
        studentsCopy.sort((a, b) => +b.age - +a.age);
      }
      break;

    case SortType.Married:
      if (order === 'asc') {
        studentsCopy.sort((a, b) => +a.married - +b.married);
      } else {
        studentsCopy.sort((a, b) => +b.married - +a.married);
      }
      break;

    case SortType.AverageGrade:
      if (order === 'asc') {
        studentsCopy.sort(
          (a, b) => getValueAverage(a.grades) - getValueAverage(b.grades),
        );
      } else {
        studentsCopy.sort(
          (a, b) => getValueAverage(b.grades) - getValueAverage(a.grades),
        );
      }
      break;

    default:
      break;
  }

  return studentsCopy;
}

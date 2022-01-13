
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

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

function getAverageValue(arr: number[]): number {
  return arr.reduce((first, second) => first + second)
    / arr.length;
}

export function sortStudents(
  students: Array<Student>,
  sortBy: SortType,
  order: SortOrder,
): Array<Student> {
  const copyStudents = students.map((student: Student) => student);

  switch (sortBy) {
    case SortType.Name:
      return (order === 'asc')
        ? copyStudents.sort((a, b) => a.name.localeCompare(b.name))
        : copyStudents.sort((a, b) => b.name.localeCompare(a.name));

    case SortType.Surname:
      return (order === 'asc')
        ? copyStudents.sort((a, b) => a.surname.localeCompare(b.surname))
        : copyStudents.sort((a, b) => b.surname.localeCompare(a.surname));

    case SortType.Age:
      return (order === 'asc')
        ? copyStudents.sort((a, b) => {
          return a.age - b.age;
        })
        : copyStudents.sort((a, b) => {
          return b.age - a.age;
        });

    case SortType.Married:
      return (order === 'asc')
        ? copyStudents.sort((a, b) => {
          return Number(a.married) - Number(b.married);
        })
        : copyStudents.sort((a, b) => {
          return Number(b.married) - Number(a.married);
        });

    case SortType.AverageGrade:
      return (order === 'asc')
        ? copyStudents.sort((a, b) => {
          return getAverageValue(a.grades) - getAverageValue(b.grades);
        })
        : copyStudents.sort((a, b) => {
          return getAverageValue(b.grades) - getAverageValue(a.grades);
        });

    default:
      return students;
  }
}

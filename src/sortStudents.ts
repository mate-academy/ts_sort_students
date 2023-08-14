
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

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

const calculateAverage = (grades: number[]): number => {
  return grades.reduce((a: number, b: number) => a + b, 0) / grades.length;
};

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copyOfStudents = [...students];

  switch (sortBy) {
    case SortType.Name:
      return (order === 'asc')
        ? copyOfStudents.sort((a, b) => a.name.localeCompare(b.name))
        : copyOfStudents.sort((a, b) => b.name.localeCompare(a.name));

    case SortType.Age:
      return (order === 'asc')
        ? copyOfStudents.sort((a, b) => a.age - b.age)
        : copyOfStudents.sort((a, b) => b.age - a.age);

    case SortType.Surname:
      return (order === 'asc')
        ? copyOfStudents.sort((a, b) => a.surname.localeCompare(b.surname))
        : copyOfStudents.sort((a, b) => b.surname.localeCompare(a.surname));

    case SortType.Married:
      return (order === 'asc')
        ? copyOfStudents.sort((a, b) => Number(a.married) - Number(b.married))
        : copyOfStudents.sort((a, b) => Number(b.married) - Number(a.married));

    default:
      return (order === 'asc')
        ? copyOfStudents.sort(
          (a, b) => calculateAverage(a.grades) - calculateAverage(b.grades),
        )
        : copyOfStudents.sort(
          (a, b) => calculateAverage(b.grades) - calculateAverage(a.grades),
        );
  }
}

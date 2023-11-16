
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

const getAverage = (numbers: number[]): number => {
  return numbers.reduce((a, b) => a + b, 0) / numbers.length;
};

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const studentsCopy: Student[] = [...students];
  const sortByAsc: boolean = order === 'asc';

  studentsCopy.sort((studentA: Student, studentB: Student) => {
    switch (sortBy) {
      case SortType.Name:
        return sortByAsc
          ? studentA.name.localeCompare(studentB.name)
          : studentB.name.localeCompare(studentA.name);

      case SortType.Surname:
        return sortByAsc
          ? studentA.surname.localeCompare(studentB.surname)
          : studentB.surname.localeCompare(studentA.surname);

      case SortType.Age:
        return sortByAsc
          ? studentA.age - studentB.age
          : studentB.age - studentA.age;

      case SortType.Married:
        return sortByAsc
          ? Number(studentA.married) - Number(studentB.married)
          : Number(studentB.married) - Number(studentA.married);

      default:
        return sortByAsc
          ? getAverage(studentA.grades) - getAverage(studentB.grades)
          : getAverage(studentB.grades) - getAverage(studentA.grades);
    }
  });

  return studentsCopy;
}

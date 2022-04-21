
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
  Name,
  Surname,
  Age,
  Married,
  AverageGrade,
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

export function sortStudents(students: Student[],
  sortBy: SortType, order: SortOrder): Student[] {
  const sortedArr = [...students];

  switch (sortBy) {
    case SortType.Name:
      sortedArr.sort((prev: Student, next: Student) => {
        return (order === 'asc')
          ? prev.name.localeCompare(next.name)
          : next.name.localeCompare(prev.name);
      });

      return sortedArr;

    case SortType.Surname:
      sortedArr.sort((prev: Student, next: Student) => {
        return (order === 'asc')
          ? prev.surname.localeCompare(next.surname)
          : next.surname.localeCompare(prev.surname);
      });

      return sortedArr;

    case SortType.Age:
      sortedArr.sort((prev: Student, next: Student) => {
        return (order === 'asc')
          ? prev.age - next.age
          : next.age - prev.age;
      });

      return sortedArr;

    case SortType.Married:
      sortedArr.sort((prev: Student, next: Student) => {
        return (order === 'asc')
          ? Number(prev.married) - Number(next.married)
          : Number(next.married) - Number(prev.married);
      });

      return sortedArr;

    case SortType.AverageGrade:
      sortedArr.sort((prev: Student, next: Student) => {
        const sumPrev: number = prev.grades.reduce(
          (a: number, b: number) => a + b,
        );
        const sumNext: number = next.grades.reduce(
          (a: number, b: number) => a + b,
        );
        const averagePrev = sumPrev / prev.grades.length;
        const averageNext = sumNext / next.grades.length;

        return (order === 'asc')
          ? averagePrev - averageNext
          : averageNext - averagePrev;
      });

      return sortedArr;

    default:
      return sortedArr;
  }
}

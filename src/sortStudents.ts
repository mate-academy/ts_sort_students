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

function getAverageGrade(grades: number[]): number {
  return grades.reduce((acc, grade) => acc + grade, 0) / grades.length;
}

export function sortStudents(
  students: Student [],
  sortBy: SortType,
  order: SortOrder,
) : Student [] {
  const sortedStudents: Student [] = [...students]
    .sort((sudent1: Student, student2: Student): number => {
      let a = sudent1;
      let b = student2;

      if (order === 'desc') {
        a = student2;
        b = sudent1;
      }

      switch (sortBy) {
        case SortType.Name:
          return a.name.localeCompare(b.name);

        case SortType.Surname:
          return a.surname.localeCompare(b.surname);

        case SortType.Age:
          return a.age - b.age;

        case SortType.Married:
          return +a.married - +b.married;

        case SortType.AverageGrade:
          return getAverageGrade(a.grades) - getAverageGrade(b.grades);

        default:
          throw new Error(`Wrong sort order. 
            Use "asc" for ascending or "desc" for descending sorting`);
      }
    });

  return sortedStudents;
}

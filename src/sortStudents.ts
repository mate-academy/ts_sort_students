
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

export type SortOrder = 'asc' | 'desc';

function getAverageGrade(grade: number[]): number {
  return grade.reduce((prev, item) => prev + item, 0) / grade.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copy = [...students];

  return copy.sort((a: Student, b: Student) => {
    switch (sortBy) {
      case SortType.Name:
        return order === 'asc'
          ? a.name.localeCompare(b.name)
          : b.name.localeCompare(a.name);

      case SortType.Surname:
        return order === 'asc'
          ? a.surname.localeCompare(b.surname)
          : b.surname.localeCompare(a.surname);

      case SortType.Age:
        return order === 'asc'
          ? a.age - b.age
          : b.age - a.age;

      case SortType.Married:
        return order === 'asc'
          ? Number(a.married) - Number(b.married)
          : Number(b.married) - Number(a.married);

      default:
        return order === 'asc'
          ? getAverageGrade(a.grades) - getAverageGrade(b.grades)
          : getAverageGrade(b.grades) - getAverageGrade(a.grades);
    }
  });
}

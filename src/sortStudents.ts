
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
  AverageGrade = 'grades',
}

export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const myStudents = students.map((student: Student) => ({ ...student }));
  const isOrderAscending: boolean = order === 'asc';

  switch (sortBy) {
    case SortType.Age:
      return myStudents.sort((a: Student, b: Student) => {
        return isOrderAscending
          ? a.age - b.age
          : b.age - a.age;
      });

    case SortType.Name:
      return myStudents.sort((a: Student, b: Student) => {
        return isOrderAscending
          ? a.name.localeCompare(b.name)
          : b.name.localeCompare(a.name);
      });

    case SortType.Surname:
      return myStudents.sort((a: Student, b: Student) => {
        return isOrderAscending
          ? a.surname.localeCompare(b.surname)
          : b.surname.localeCompare(a.surname);
      });

    case SortType.Married:
      return myStudents.sort((a: Student, b: Student) => {
        return isOrderAscending
          ? Number(a.married) - Number(b.married)
          : Number(b.married) - Number(a.married);
      });

    default:
      return myStudents.sort((a: Student, b: Student) => {
        const avgA: number = a.grades
          .reduce((acc: number, x: number) => acc + x, 0) / a.grades.length;
        const avgB: number = b.grades
          .reduce((acc: number, x: number) => acc + x, 0) / b.grades.length;

        return isOrderAscending
          ? avgA - avgB
          : avgB - avgA;
      });
  }
}

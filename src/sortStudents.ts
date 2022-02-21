
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

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder = 'asc',
): Student[] {
  const copyStudents = [...students];

  function getAverageGrade(student: Student): number {
    return student.grades.reduce((acum, grade) => acum + grade, 0)
      / student.grades.length;
  }

  return copyStudents.sort((a, b) => {
    switch (sortBy) {
      case SortType.Name:
        return (order === 'asc')
          ? a.name.localeCompare(b.name)
          : b.name.localeCompare(a.name);

      case SortType.Surname:
        return (order === 'asc')
          ? a.surname.localeCompare(b.surname)
          : b.surname.localeCompare(a.surname);

      case SortType.Age:
        return (order === 'asc')
          ? a.age - b.age
          : b.age - a.age;

      case SortType.Married:
        return (order === 'asc')
          ? Number(a.married) - Number(b.married)
          : Number(b.married) - Number(a.married);

      case SortType.AverageGrade:
        return (order === 'asc')
          ? getAverageGrade(a) - getAverageGrade(b)
          : getAverageGrade(b) - getAverageGrade(a);

      default:
        return 0;
    }
  });
}


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
export type SortOrder = 'asc'|'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copy = [...students];

  function getAverageGrade(student: Student): number {
    return student.grades
      .reduce((a, b) => a + b) / student.grades.length;
  }

  copy.sort((a: Student, b: Student) => {
    const student1: Student = a;
    const student2: Student = b;

    if (order === 'desc') {
      copy.reverse();
    }

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

      case SortType.AverageGrade:
        return order === 'asc'
          ? getAverageGrade(student1) - getAverageGrade(student2)
          : getAverageGrade(student2) - getAverageGrade(student1);

      default:
        return 0;
    }
  });

  return copy;
}

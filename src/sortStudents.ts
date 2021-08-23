// describe Student type
// create and export SortType enum
// create SortOrder type

interface Student {
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

type SortOrder = 'asc' | 'desc';

function gradeSum(student : Student): number {
  return student.grades.reduce((a: number, b: number) => a + b, 0);
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copy = [...students];

  if (sortBy === SortType.Name) {
    return order === 'asc'
      ? copy.sort((a, b) => a.name.localeCompare(b.name))
      : copy.sort((a, b) => b.name.localeCompare(a.name));
  }

  if (sortBy === SortType.Surname) {
    return order === 'asc'
      ? copy.sort((a, b) => a.surname.localeCompare(b.surname))
      : copy.sort((a, b) => b.surname.localeCompare(a.surname));
  }

  if (sortBy === SortType.Age) {
    return order === 'asc'
      ? copy.sort((a, b) => a.age - b.age)
      : copy.sort((a, b) => b.age - a.age);
  }

  if (sortBy === SortType.Married) {
    return order === 'asc'
      ? copy.sort((a, b) => +a.married - +b.married)
      : copy.sort((a, b) => +b.married - +a.married);
  }

  if (sortBy === SortType.AverageGrade) {
    return order === 'asc'
      ? copy.sort((a, b) => gradeSum(a) - gradeSum(b))
      : copy.sort((a, b) => gradeSum(b) - gradeSum(a));
  }

  return copy;
}

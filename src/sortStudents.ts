
export interface Student {
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[],
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'averageGrade'
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copy: Student[] = JSON.parse(JSON.stringify(students));

  if (sortBy === 'averageGrade' && order === 'asc') {
    copy.sort((a, b) => a.grades
      .reduce((sum, y) => sum + y, 0) / a.grades.length - b.grades
      .reduce((sum, y) => sum + y, 0) / b.grades.length);
  }

  if (sortBy === 'averageGrade' && order === 'desc') {
    copy.sort((a, b) => b.grades
      .reduce((sum, y) => sum + y, 0) / b.grades.length - a.grades
      .reduce((sum, y) => sum + y, 0) / a.grades.length);
  }

  if (sortBy === 'name' && order === 'asc') {
    copy.sort((a, b) => a.name.localeCompare(b.name));
  }

  if (sortBy === 'surname' && order === 'asc') {
    copy.sort((a, b) => a.surname.localeCompare(b.surname));
  }

  if (sortBy === 'age' && order === 'desc') {
    copy.sort((a, b) => b.age - a.age);
  }

  if (sortBy === 'married' && order === 'desc') {
    copy.sort((x, y) => (
      JSON.stringify(y.married).localeCompare(JSON.stringify(x.married))
    ));
  }

  return copy;
}

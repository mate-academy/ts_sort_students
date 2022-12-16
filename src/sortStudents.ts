
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
  AverageGrade = 'avgGrade',
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

function getAverageGrade(student: Student): number {
  return student.grades
    .reduce((total, grade) => total + grade) / student.grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] | string {
  const studentsCopy = [...students];

  switch (sortBy) {
    case (SortType.Name):
      return (order === 'asc')
        ? studentsCopy.sort((a, b) => a.name.localeCompare(b.name))
        : studentsCopy.sort((a, b) => b.name.localeCompare(a.name));

    case (SortType.Surname):
      return (order === 'asc')
        ? studentsCopy.sort((a, b) => a.surname.localeCompare(b.surname))
        : studentsCopy.sort((a, b) => b.surname.localeCompare(a.surname));

    case (SortType.Age):
      return (order === 'asc')
        ? studentsCopy.sort((a, b) => a.age - b.age)
        : studentsCopy.sort((a, b) => b.age - a.age);

    case (SortType.Married):
      return (order === 'asc')
        ? studentsCopy.sort((a, b) => Number(a.married) - Number(b.married))
        : studentsCopy.sort((a, b) => Number(b.married) - Number(a.married));

    case (SortType.AverageGrade):
      return (order === 'asc')
        ? studentsCopy.sort((a, b) => getAverageGrade(a) - getAverageGrade(b))
        : studentsCopy.sort((a, b) => getAverageGrade(b) - getAverageGrade(a));
    default:
      throw new Error('Some error');
  }
}

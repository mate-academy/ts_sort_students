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
  AverageGrade = 'grades',
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

const averageGrades = (grades: number[]): number => {
  return grades.reduce((sum, grade) => sum + grade) / grades.length;
};

export function sortStudents(
  students: Student,
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const studentsCopyArr: Student[] = [...students];

  switch (sortBy) {
    case SortType.Name:
      return order === 'asc'
        ? studentsCopyArr.sort((a, b) => a.name.localeCompare(b.name))
        : studentsCopyArr.sort((a, b) => b.name.localeCompare(a.name));

    case SortType.Surname:
      return order === 'asc'
        ? studentsCopyArr.sort((a, b) => a.surname.localeCompare(b.surname))
        : studentsCopyArr.sort((a, b) => b.surname.localeCompare(a.surname));

    case SortType.Age:
      return order === 'asc'
        ? studentsCopyArr.sort((a, b) => a.age - b.age)
        : studentsCopyArr.sort((a, b) => b.age - a.age);

    case SortType.Married:
      return order === 'asc'
        ? studentsCopyArr.sort((a, b) => Number(a.married) - Number(b.married))
        : studentsCopyArr.sort((a, b) => Number(b.married) - Number(a.married));

    case SortType.AverageGrade:
      return order === 'asc'
        ? studentsCopyArr.sort((a, b) => averageGrades(a.grades)
          - averageGrades(b.grades))
        : studentsCopyArr.sort((a, b) => averageGrades(b.grades)
          - averageGrades(a.grades));

    default:
      return studentsCopyArr;
  }
}

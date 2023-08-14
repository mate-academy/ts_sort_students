
export interface Student {
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: Array<number>,
}

export enum SortType {
  Name = 'Name',
  Surname = 'Surname',
  Age = 'Age',
  Married = 'Married',
  AverageGrade = 'AverageGrade',
}

export type SortOrder = 'asc' | 'desc';

export function sortStudents(students: Student[],
  sortBy: SortType, order: SortOrder): Student[] {
  const asc = order === 'asc';
  const copyOfStudents = [...students];
  const averageOfGrades = (grades: Array<number>): number => {
    return grades.reduce(
      (acc: number, grade: number) => acc + grade, 0,
    ) / grades.length;
  };

  switch (sortBy) {
    case SortType.Name:
      return asc
        ? copyOfStudents.sort((a, b) => a.name.localeCompare(b.name))
        : copyOfStudents.sort((a, b) => b.name.localeCompare(a.name));
    case SortType.Surname:
      return asc
        ? copyOfStudents.sort((a, b) => a.surname.localeCompare(b.surname))
        : copyOfStudents.sort((a, b) => b.surname.localeCompare(a.surname));
    case SortType.Age:
      return asc
        ? copyOfStudents.sort((a, b) => a.age - b.age)
        : copyOfStudents.sort((a, b) => b.age - a.age);
    case SortType.Married:
      return asc
        ? copyOfStudents.sort((a, b) => Number(a.married) - Number(b.married))
        : copyOfStudents.sort((a, b) => Number(b.married) - Number(a.married));
    case SortType.AverageGrade:
      return asc
        ? copyOfStudents.sort(
          (a, b) => averageOfGrades(a.grades) - averageOfGrades(b.grades),
        )
        : copyOfStudents.sort(
          (a, b) => averageOfGrades(b.grades) - averageOfGrades(a.grades),
        );
    default: return copyOfStudents;
  }
}

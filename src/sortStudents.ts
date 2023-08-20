export interface Student {
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: Array<number>,
}

export enum SortType {
  Name,
  Surname,
  Age,
  Married,
  AverageGrade,
}

const avgGrades = (v: Array<number>): number => {
  return v.length === 0
    ? 0
    : v.reduce((acc, grade) => acc + grade, 0) / v.length;
};

export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Array<Student>
  , sortBy: SortType
  , order: SortOrder,
): Array<Student> {
  const copyStudents = [...students];
  const sortByAsc = order === 'asc' ? 1 : -1;

  const sortStudent = (student1: Student, student2: Student): number => {
    switch (sortBy) {
      case SortType.Name:
        return student1.name.localeCompare(student2.name);

      case SortType.Surname:
        return student1.surname.localeCompare(student2.surname);

      case SortType.Age:
        return student1.age - student2.age;

      case SortType.Married:
        return Number(student1.married) - Number(student2.married);

      case SortType.AverageGrade:
        return avgGrades(student1.grades) - avgGrades(student2.grades);

      default:
        return 0;
    }
  };

  return copyStudents.sort((a, b) => sortByAsc * sortStudent(a, b));
}


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

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[], sortBy: SortType, order: SortOrder,
): Student[] {
  const resultArr: Student[] = [...students];

  function getAvgGrade(student: Student): number {
    return student.grades.reduce((sum: number, grade:
    number) => sum + grade, 0) / student.grades.length;
  }

  switch (sortBy) {
    case SortType.Name:
      return order === 'asc'
        ? resultArr
          .sort((student1: Student,
            student2: Student) => student1.name.localeCompare(student2.name))
        : resultArr
          .sort((student1: Student,
            student2: Student) => student1.name.localeCompare(student2.name))
          .reverse();

    case SortType.Surname:
      return order === 'asc'
        ? resultArr
          .sort((student1: Student, student2:
          Student) => student1.surname.localeCompare(student2.surname))
        : resultArr
          .sort((student1: Student, student2:
          Student) => student1.surname.localeCompare(student2.surname))
          .reverse();

    case SortType.Age:
      return order === 'asc'
        ? resultArr
          .sort((student1: Student, student2:
          Student) => student1.age - student2.age)
        : resultArr
          .sort((student1: Student, student2:
          Student) => (student1.age - student2.age) * -1);

    case SortType.Married:
      return order === 'asc'
        ? resultArr
          .sort((student1: Student, student2:
          Student) => +student1.married - +student2.married)
        : resultArr
          .sort((student1: Student, student2:
          Student) => (+student1.married - +student2.married) * -1);

    case SortType.AverageGrade:

      return order === 'asc'
        ? resultArr
          .sort((student1: Student, student2:
          Student) => getAvgGrade(student1) - getAvgGrade(student2))
        : resultArr
          .sort((student1: Student, student2:
          Student) => (getAvgGrade(student1) - getAvgGrade(student2)) * -1);

    default:
      break;
  }

  return resultArr;
}

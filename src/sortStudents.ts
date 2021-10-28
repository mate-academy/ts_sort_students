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

export function getAverageGrade(grades: number[]): number {
  return grades.reduce((sum, grade) => sum + grade, 0) / grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const studentsCopyList = JSON.parse(JSON.stringify(students));
  const isAsc: boolean = order === 'asc';

  switch (sortBy) {
    case SortType.Name:
      studentsCopyList.sort((firstStudent: Student, secondStudent: Student) => {
        return isAsc
          ? firstStudent.name.localeCompare(secondStudent.name)
          : secondStudent.name.localeCompare(firstStudent.name);
      });
      break;
    case SortType.Surname:
      studentsCopyList.sort((firstStudent: Student, secondStudent: Student) => {
        return isAsc
          ? firstStudent.surname.localeCompare(secondStudent.surname)
          : secondStudent.surname.localeCompare(firstStudent.surname);
      });
      break;
    case SortType.Age:
      studentsCopyList.sort((firstStudent: Student, secondStudent: Student) => {
        return isAsc
          ? firstStudent.age - secondStudent.age
          : secondStudent.age - firstStudent.age;
      });
      break;
    case SortType.Married:
      studentsCopyList.sort((firstStudent: Student, secondStudent: Student) => {
        return isAsc
          ? Number(firstStudent.married) - Number(secondStudent.married)
          : Number(secondStudent.married) - Number(firstStudent.married);
      });
      break;
    case SortType.AverageGrade:
      studentsCopyList.sort((firstStudent: Student, secondStudent: Student) => {
        return isAsc
          ? getAverageGrade(firstStudent.grades)
          - getAverageGrade(secondStudent.grades)
          : getAverageGrade(secondStudent.grades)
          - getAverageGrade(firstStudent.grades);
      });
      break;
    default:
      break;
  }

  return studentsCopyList;
}

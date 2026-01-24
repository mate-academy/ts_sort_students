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

const getAverageGrade = (grades: number[]): number => {
  return grades.reduce((sum, grade) => {
    return sum + grade;
  }, 0) / grades.length;
};

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  return students
    .map((student, index) => {
      return {
        student,
        index,
      };
    })
    .sort((a, b) => {
      let result = 0;

      switch (sortBy) {
        case SortType.Name:
          result = a.student.name.localeCompare(
            b.student.name,
          );
          break;

        case SortType.Surname:
          result = a.student.surname.localeCompare(
            b.student.surname,
          );
          break;

        case SortType.Age:
          result = a.student.age
            - b.student.age;
          break;

        case SortType.Married:
          result = Number(a.student.married)
            - Number(b.student.married);
          break;

        case SortType.AverageGrade:
          result = getAverageGrade(a.student.grades)
            - getAverageGrade(b.student.grades);
          break;

        default:
          result = 0;
      }

      if (result === 0) {
        return a.index
          - b.index;
      }

      return order === 'asc'
        ? result
        : -result;
    })
    .map((item) => {
      return item.student;
    });
}

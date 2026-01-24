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

const getSortValue = (
  student: Student,
  sortBy: SortType,
): string | number => {
  switch (sortBy) {
    case SortType.Name:
      return student.name;

    case SortType.Surname:
      return student.surname;

    case SortType.Age:
      return student.age;

    case SortType.Married:
      return Number(student.married);

    case SortType.AverageGrade:
      return getAverageGrade(student.grades);

    default:
      return 0;
  }
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
      const valueA = getSortValue(
        a.student,
        sortBy,
      );
      const valueB = getSortValue(
        b.student,
        sortBy,
      );

      let result = 0;

      if (typeof valueA === 'string' && typeof valueB === 'string') {
        result = valueA.localeCompare(valueB);
      } else {
        result = Number(valueA) - Number(valueB);
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

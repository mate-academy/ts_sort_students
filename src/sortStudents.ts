
export interface Student {
  name: string;
  surname: string;
  age: number
  married: boolean;
  grades: number[];
  averageGrade: number;
}

export enum SortType {
  Name, Surname, Age, Married, AverageGrade
}

export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const studentsCopy: Student[] = students
    .map((student: Student) => {
      const { grades } = student;
      const numberOfGrades = grades.length;
      const averageGrade = grades
        .reduce((sum: number, grade: number) => sum + grade, 0)
        / numberOfGrades;

      return {
        ...student,
        averageGrade,
      };
    });

  studentsCopy.sort((a: Student, b: Student): number => {
    switch (sortBy) {
      case SortType.Age:
        if (order === 'desc') {
          return b.age - a.age;
        }

        return a.age - b.age;

      case SortType.AverageGrade:
        if (order === 'desc') {
          return b.averageGrade - a.averageGrade;
        }

        return a.averageGrade - b.averageGrade;

      case SortType.Married:
        if (order === 'desc') {
          return +b.married - +a.married;
        }

        return +a.married - +b.married;

      case SortType.Name:
        if (order === 'desc') {
          return b.name.localeCompare(a.name);
        }

        return a.name.localeCompare(b.name);

      case SortType.Surname:
        if (order === 'desc') {
          return b.surname.localeCompare(a.surname);
        }

        return a.surname.localeCompare(b.surname);

      default: return 0;
    }
  });

  return studentsCopy;
}

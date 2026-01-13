
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

function getAverageGrade(grades: number[]): number {
  if (grades.length === 0) {
    return 0;
  }

  const sum = grades.reduce((acc, g) => acc + g, 0);

  return sum / grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const direction = order === 'asc' ? 1 : -1;

  return students
    .map((student, index) => ({
      student,
      index,
    }))

    .sort((a, b) => {
      const s1 = a.student;
      const s2 = b.student;

      let result = 0;

      switch (sortBy) {
        case SortType.Name:
          result = s1.name.localeCompare(s2.name);
          break;

        case SortType.Surname:
          result = s1.surname.localeCompare(s2.surname);
          break;

        case SortType.Age:
          result = s1.age - s2.age;
          break;

        case SortType.Married:
          result = Number(s1.married) - Number(s2.married);
          break;

        case SortType.AverageGrade:
          result = getAverageGrade(s1.grades) - getAverageGrade(s2.grades);
          break;

        default:
          result = 0;
      }

      // If values differ, apply asc/desc direction
      if (result !== 0) {
        return result * direction;
      }

      // If values are the same, keep the original order (stable sort)
      return a.index - b.index;
    })
    .map((item) => item.student);
}

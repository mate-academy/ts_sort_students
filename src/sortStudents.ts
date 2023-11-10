
export interface Student {
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[],
}

export enum SortType {
  Name,
  Surname,
  Age,
  Married,
  AverageGrade,
}

export type SortOrder = 'asc' | 'desc';

export function getAverageGrade(student: Student): number {
  return student.grades
    .reduce((sum, grade) => sum + grade, 0) / student.grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  let result: number;

  return students.slice().sort((a, b) => {
    switch (sortBy) {
      case SortType.Name:
        result = order === 'asc' ? a.name.localeCompare(b.name)
          : b.name.localeCompare(a.name);
        break;

      case SortType.Surname:
        result = order === 'asc' ? a.surname.localeCompare(b.surname)
          : b.surname.localeCompare(a.surname);
        break;

      case SortType.Age:
        result = order === 'asc' ? a.age - b.age : b.age - a.age;
        break;

      case SortType.Married:
        result = order === 'asc' ? Number(a.married) - Number(b.married)
          : Number(b.married) - Number(a.married);
        break;

      case SortType.AverageGrade:
        return order === 'asc' ? getAverageGrade(a) - getAverageGrade(b)
          : getAverageGrade(b) - getAverageGrade(a);

      default:
        result = 0;
    }

    return result;
  });
}

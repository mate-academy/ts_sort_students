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

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const callback = (a: Student, b:Student): number => {
    let result: number = 0;
    const avgA = a.grades.reduce((s, gr) => s + gr, 0) / a.grades.length;
    const avgB = b.grades.reduce((s, gr) => s + gr, 0) / b.grades.length;

    switch (sortBy) {
      case SortType.Name:
        result = a.name.localeCompare(b.name);
        break;

      case SortType.Surname:
        result = a.surname.localeCompare(b.surname);
        break;

      case SortType.Age:
        result = a.age - b.age;
        break;

      case SortType.Married:
        result = Number(a.married) - Number(b.married);
        break;

      case SortType.AverageGrade:
        result = avgA - avgB;
        break;

      default:
        break;
    }

    return order === 'asc' ? result : -result;
  };

  return [...students].sort(callback);
}

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

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const compareFunction = (a: Student, b: Student): number => {
    const getValue = (student: Student): string | number => {
      switch (sortBy) {
        case SortType.Name:
        case SortType.Surname:
          return student[sortBy];
        case SortType.Age:
        case SortType.Married:
          return student[sortBy] ? 1 : 0;
        case SortType.AverageGrade:
          return student.grades.reduce(
            (sum, grade) => sum + grade, 0,
          ) / student.grades.length;
        default:
          return 0;
      }
    };

    const valueA = getValue(a);
    const valueB = getValue(b);

    let result: number;

    if (typeof valueA === 'number' && typeof valueB === 'number') {
      result = valueA - valueB;
    } else {
      result = String(valueA).localeCompare(String(valueB));
    }

    return order === 'asc' ? result : -result;
  };

  return [...students].sort(compareFunction);
}

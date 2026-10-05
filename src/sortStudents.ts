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
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const sortedStudents = [...students];

  sortedStudents.sort((a, b) => {
    let result: number;
    const averageA
    = a.grades.reduce((sum, grade) => sum + grade, 0) / a.grades.length;
    const averageB
    = b.grades.reduce((sum, grade) => sum + grade, 0) / b.grades.length;

    switch (sortBy) {
      case SortType.Name:
        result = a.name.localeCompare(b.name);
        break;
      case SortType.Age:
        result = a.age - b.age;
        break;
      case SortType.Married:
        result = Number(a.married) - Number(b.married);
        break;
      case SortType.Surname:
        result = a.surname.localeCompare(b.surname);
        break;
      case SortType.AverageGrade:
        result = averageA - averageB;
        break;
      default:
        throw new Error();
    }

    if (order === 'desc') {
      return result * -1;
    }

    return result;
  });

  return sortedStudents;
}

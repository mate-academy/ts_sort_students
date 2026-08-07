
export interface Student {
  // describe Student interface
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];
}

export enum SortType {
  // describe SortType enum
  Name,
  Surname,
  Age,
  Married,
  AverageGrade,
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

function getAverageGrade(student: Student): number {
  const sum = student.grades.reduce((total, grade) => total + grade, 0);

  return sum / student.grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const result = [...students];

  result.sort((a, b) => {
    let compare = 0;

    switch (sortBy) {
      case SortType.Name:
        compare = a.name.localeCompare(b.name);
        break;

      case SortType.Surname:
        compare = a.surname.localeCompare(b.surname);
        break;

      case SortType.Age:
        compare = a.age - b.age;
        break;

      case SortType.Married:
        compare = Number(a.married) - Number(b.married);
        break;

      case SortType.AverageGrade:
        compare = getAverageGrade(a) - getAverageGrade(b);
        break;

      default:
        break;
    }

    return order === 'asc' ? compare : -compare;
  });

  return result;
}

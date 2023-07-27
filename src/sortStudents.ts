
export interface Student {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades?: number[];
}

export enum SortType {
  Name,
  Surname,
  Age,
  Married,
  AverageGrade,
}

function calculateAvarageGrade(student: Student): number {
  if (student.grades && student.grades.length > 0) {
    const sum = student.grades.reduce((acc, grade) => acc + grade, 0);

    return sum / student.grades.length;
  }

  return 0;
}

export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const sortedStudents = [...students];

  const comparator = (a: Student, b: Student): number => {
    switch (sortBy) {
      case SortType.Name:
        return a.name.localeCompare(b.name);
      case SortType.Surname:
        return a.surname.localeCompare(b.surname);
      case SortType.Age:
        return a.age - b.age;

      case SortType.Married:

        if (a.married === b.married) {
          return 0;
        }

        return a.married ? 1 : -1;
      case SortType.AverageGrade:
        return calculateAvarageGrade(a) - calculateAvarageGrade(b);
      default:
        throw new Error('Invalid Sort Type');
    }
  };

  if (order === 'asc') {
    sortedStudents.sort(comparator);
  } else if (order === 'desc') {
    sortedStudents.sort((a, b) => comparator(b, a));
  } else {
    throw new Error('Invalid Sort Order');
  }

  return sortedStudents;
}

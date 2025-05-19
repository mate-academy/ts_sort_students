
export interface Student {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];
}

export enum SortType {
  Name = 'Name',
  Surname = 'Surname',
  Age = 'Age',
  Married = 'Married',
  AverageGrade = 'AverageGrade',
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const getAverage = (grades: number[]): number => {
    return grades.length === 0
      ? 0
      : grades.reduce((acc, val) => acc + val, 0) / grades.length;
  };

  const indexedStudents = students.map((student, index) => ({
    student,
    index,
  }));

  indexedStudents.sort((a, b) => {
    let valueA: number | string | boolean;
    let valueB: number | string | boolean;

    switch (sortBy) {
      default:
      case SortType.Name:
        valueA = a.student.name;
        valueB = b.student.name;
        break;
      case SortType.Surname:
        valueA = a.student.surname;
        valueB = b.student.surname;
        break;
      case SortType.Age:
        valueA = a.student.age;
        valueB = b.student.age;
        break;
      case SortType.Married:
        valueA = a.student.married;
        valueB = b.student.married;
        break;
      case SortType.AverageGrade:
        valueA = getAverage(a.student.grades);
        valueB = getAverage(b.student.grades);
        break;
    }

    if (valueA < valueB) {
      return order === 'asc' ? -1 : 1;
    }

    if (valueA > valueB) {
      return order === 'asc' ? 1 : -1;
    }

    return a.index - b.index;
  });

  return indexedStudents.map((entry) => entry.student);
}

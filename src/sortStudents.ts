export interface Student {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: Array<number>;
}

export enum SortType {
  Name,
  Surname,
  Age,
  Married,
  AverageGrade,
}

export type SortOrder = 'asc' | 'desc';

function getSortableValue(
  student: Student,
  sortBy: SortType,
): string | number | boolean {
  const gradesLength = student.grades.length;

  if (gradesLength === 0 || gradesLength === null) {
    throw new Error('Dividing by zero');
  }

  const averageGrade
    = student.grades.reduce((total, grade) => total + grade, 0) / gradesLength;

  switch (sortBy) {
    case SortType.Name:
      return student.name;
    case SortType.Surname:
      return student.surname;
    case SortType.Age:
      return student.age;
    case SortType.Married:
      return student.married;
    case SortType.AverageGrade:
      return averageGrade;
    default:
      return '';
  }
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const sortedStudents = [...students];

  sortedStudents.sort((a, b) => {
    const aValue = getSortableValue(a, sortBy);
    const bValue = getSortableValue(b, sortBy);

    if (aValue < bValue) {
      return order === 'asc' ? -1 : 1;
    }

    if (aValue > bValue) {
      return order === 'asc' ? 1 : -1;
    }

    return 0;
  });

  return sortedStudents;
}

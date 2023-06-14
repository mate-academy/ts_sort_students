
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

function getAverageGrade(student: Student): number {
  const sum = student.grades.reduce((acc, grade) => acc + grade, 0);

  return sum / student.grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const sortedStudents = [...students];

  sortedStudents.sort((a, b) => {
    let aValue;
    let bValue;

    switch (sortBy) {
      case SortType.Name:
        aValue = a.name;
        bValue = b.name;
        break;
      case SortType.Surname:
        aValue = a.surname;
        bValue = b.surname;
        break;
      case SortType.Age:
        aValue = a.age;
        bValue = b.age;
        break;
      case SortType.Married:
        aValue = a.married;
        bValue = b.married;
        break;
      case SortType.AverageGrade:
        aValue = getAverageGrade(a);
        bValue = getAverageGrade(b);
        break;
      default:
        throw new Error('Invalid SortType');
    }

    if (aValue === bValue) {
      return students.indexOf(a) - students.indexOf(b);
    }

    if (order === 'asc') {
      return aValue < bValue ? -1 : 1;
    }

    return aValue > bValue ? -1 : 1;
  });

  return sortedStudents;
}

export interface Student {
  name: string,
  surname: string,
  age: number,
  married: boolean,
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

function calculateAvarage(student: Student): number {
  const sumGrades = student.grades.reduce((sum, grade) => sum + grade);
  const avg = sumGrades / student.grades.length;

  return avg;
}

type SortStudentsType = string | boolean | number;

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const sortedStudents = [...students].sort((a, b) => {
    let aVal: SortStudentsType;
    let bVal: SortStudentsType;

    switch (sortBy) {
      case SortType.Name:
        aVal = a.name;
        bVal = b.name;
        break;
      case SortType.Surname:
        aVal = a.surname;
        bVal = b.surname;
        break;
      case SortType.Age:
        aVal = a.age;
        bVal = b.age;
        break;
      case SortType.Married:
        aVal = a.married;
        bVal = b.married;
        break;
      case SortType.AverageGrade:
        aVal = calculateAvarage(a);
        bVal = calculateAvarage(b);
        break;
      default:
        break;
    }

    if (aVal < bVal) {
      return order === 'asc' ? -1 : 1;
    }

    if (aVal > bVal) {
      return order === 'asc' ? 1 : -1;
    }

    return 0;
  });

  return sortedStudents;
}

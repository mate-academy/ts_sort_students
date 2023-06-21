export interface Student {
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[];
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'averageGrade',
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
      case SortType.Surname:
        aVal = a[sortBy];
        bVal = b[sortBy];
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

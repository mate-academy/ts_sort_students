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

function calculateAverage(student: Student): number {
  const sumGrades = student.grades.reduce((sum, grade) => sum + grade);

  return sumGrades / student.grades.length;
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
      case SortType.Age:
      case SortType.Married:
        aVal = a[sortBy];
        bVal = b[sortBy];
        break;
      case SortType.AverageGrade:
        aVal = calculateAverage(a);
        bVal = calculateAverage(b);
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

export interface Student {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'averageGrade',
}

export type SortOrder = 'asc' | 'desc';
type Values = string | number | boolean;

function calculateAverageGrade(student: Student): number {
  return student
    .grades
    .reduce((sum, grade) => sum + grade, 0) / student.grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const compareFunction = (
    firstPerson: Student,
    secondPerson: Student,
  ): number => {
    let firstValue: Values;
    let secondValue: Values;

    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
      case SortType.Age:
      case SortType.Married:
        firstValue = firstPerson[sortBy];
        secondValue = secondPerson[sortBy];
        break;

      case SortType.AverageGrade:
        firstValue = calculateAverageGrade(firstPerson);
        secondValue = calculateAverageGrade(secondPerson);
        break;

      default:
        throw new Error(`Invalid SortType: ${sortBy}`);
    }

    if (firstValue < secondValue) {
      return order === 'asc' ? -1 : 1;
    }

    if (firstValue > secondValue) {
      return order === 'asc' ? 1 : -1;
    }

    return students.indexOf(firstPerson) - students.indexOf(secondPerson);
  };

  const sortedStudents = [...students].sort(compareFunction);

  return sortedStudents;
}

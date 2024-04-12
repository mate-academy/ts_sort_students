export interface Student {
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[],
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'averageGrade',
}

export type SortOrder = 'asc' | 'desc';

function getAverage(grades: number[]): number {
  return grades
    .reduce((sum: number, grade: number) => sum + grade, 0)
    / grades.length;
}

function compareTexts(
  firstText: string,
  secondText: string,
  order: SortOrder = 'asc',
): number {
  switch (order) {
    case 'desc':
      return secondText.localeCompare(firstText);
    case 'asc':
    default:
      return firstText.localeCompare(secondText);
  }
}

function compareNumbers(
  firstNumber: number,
  secondNumber: number,
  order: SortOrder,
): number {
  switch (order) {
    case 'desc':
      return secondNumber - firstNumber;
    case 'asc':
    default:
      return firstNumber - secondNumber;
  }
}

export function sortStudents(
  students: Student[],
  sortBy: SortType = SortType.Name,
  order: SortOrder = 'asc',
): Student[] {
  let sortCallback: (firstStudent: Student, secondStudent: Student) => number;

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
    default:
      sortCallback = (
        firstStudent: Student,
        secondStudent: Student,
      ): number => compareTexts(
        firstStudent[sortBy],
        secondStudent[sortBy],
        order,
      );
      break;
    case SortType.Age:
    case SortType.Married:
      sortCallback = (
        firstStudent: Student,
        secondStudent: Student,
      ): number => compareNumbers(
        +firstStudent[sortBy],
        +secondStudent[sortBy],
        order,
      );
      break;
    case SortType.AverageGrade:
      sortCallback = (
        firstStudent: Student,
        secondStudent: Student,
      ): number => compareNumbers(
        getAverage(firstStudent.grades),
        getAverage(secondStudent.grades),
        order,
      );
  }

  return [...students].sort(sortCallback);
}

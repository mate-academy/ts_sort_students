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
  AverageGrade = 'grades',
}

export type SortOrder = 'asc' | 'desc';

function isString(value: unknown): value is string {
  return typeof value === 'string';
}

function isNumber(value: unknown): value is number {
  return typeof value === 'number';
}

function isBoolean(value: unknown): value is boolean {
  return typeof value === 'boolean';
}

function calculateAverageGrade(grades: readonly number[]): number {
  return grades.reduce((sum, grade) => sum + grade, 0) / grades.length;
}

function compareByPropertyValue(
  studentA: Student,
  studentB: Student,
  propertyKey: SortType,
): number {
  const propertyValueA = studentA[propertyKey];
  const propertyValueB = studentB[propertyKey];

  if (isString(propertyValueA) && isString(propertyValueB)) {
    return propertyValueA.localeCompare(propertyValueB);
  }

  if (
    (isNumber(propertyValueA) && isNumber(propertyValueB))
    || (isBoolean(propertyValueA) && isBoolean(propertyValueB))
  ) {
    return Number(propertyValueA) - Number(propertyValueB);
  }

  if (Array.isArray(propertyValueA) && Array.isArray(propertyValueB)) {
    const averageGradeA = calculateAverageGrade(propertyValueA);
    const averageGradeB = calculateAverageGrade(propertyValueB);

    return averageGradeA - averageGradeB;
  }

  // If all the above type checks fail
  // the type of values is unknown
  return 0;
}

export function sortStudents(
  students: readonly Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const studentsCopy = [...students];

  if (order === 'asc') {
    return studentsCopy
      .sort((studentA, studentB) => {
        return compareByPropertyValue(studentA, studentB, sortBy);
      });
  }

  return studentsCopy
    .sort((studentA, studentB) => {
      return compareByPropertyValue(studentB, studentA, sortBy);
    });
}

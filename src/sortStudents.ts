
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

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

function createFilterCallbackMarried(order: SortOrder):
(a: Student, b: Student) => number {
  if (order === 'asc') {
    return (studentA: { married: number }, studentB: {married: number}):
    number => studentA.married - studentB.married;
  }

  return (studentA: { married: number }, studentB: {married: number}):
  number => studentB.married - studentA.married;
}

function createFilterCallback(order: SortOrder, sortBy: SortType):
(a: Student, b: Student) => number {
  if (order === 'asc') {
    return (studentA: { sortBy: SortType }, studentB: { sortBy: SortType }):
    number => studentA[sortBy].localeCompare(studentB[sortBy]);
  }

  return (studentA: { age: number }, studentB: {age: number}):
  number => studentB[sortBy].localeCompare(studentA[sortBy]);
}

function createFilterCallbackAge(order: SortOrder):
(a: Student, b: Student) => number {
  if (order === 'asc') {
    return (studentA: { age: number }, studentB: {age: number}):
    number => studentA.age - studentB.age;
  }

  return (studentA: { age: number }, studentB: {age: number}):
  number => studentB.age - studentA.age;
}

function getAvg(grades: number[]): number {
  return grades.reduce((sum, grade) => sum + grade) / grades.length;
}

function createFilterCallbackAvgGrades(order: SortOrder):
(studentA: Student, studentB: Student) => number {
  if (order === 'asc') {
    return (studentA: { grades: number[]}, studentB: { grades: number[] }):
    number => getAvg(studentA.grades) - getAvg(studentB.grades);
  }

  return (studentA: { grades: number[]}, studentB: { grades: number[] }):
  number => getAvg(studentB.grades) - getAvg(studentA.grades);
}

export function sortStudents(students: Student[],
  sortBy: SortType,
  order: SortOrder): Student[] {
  const studentsCopy: Student[] = students.map((student) => (
    {
      ...student,
      grades: [...student.grades],
    }
  ));

  if (sortBy === SortType.Age) {
    return studentsCopy.sort(createFilterCallbackAge(order));
  }

  if (sortBy === SortType.AverageGrade) {
    return studentsCopy.sort(createFilterCallbackAvgGrades(order));
  }

  if (sortBy === SortType.Married) {
    return studentsCopy.sort(createFilterCallbackMarried(order));
  }

  return studentsCopy.sort(createFilterCallback(order, sortBy));
}

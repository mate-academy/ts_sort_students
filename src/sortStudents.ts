
export interface Student {
  // describe Student interface
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

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

function compare(
  order: SortOrder,
  sortBy: SortType,
  students: Student[],
): Student[] {
  if (order === 'asc') {
    return students.sort((firstStudent: Student, nextStudent: Student) => {
      if (firstStudent[sortBy] > nextStudent[sortBy]) {
        return 1;
      }

      return (nextStudent[sortBy] > firstStudent[sortBy]) ? -1 : 0;
    });
  }

  return students.sort((firstStudent: Student, nextStudent: Student) => {
    if (nextStudent[sortBy] > firstStudent[sortBy]) {
      return 1;
    }

    return (firstStudent[sortBy] > nextStudent[sortBy]) ? -1 : 0;
  });
}

function getAverageGrades(grades: number[]): number {
  return grades.reduce((prev, curr) => prev + curr) / grades.length;
}

function compareGrades(order: SortOrder, students: Student[]): Student[] {
  return (order === 'asc')
    ? students.sort((firstStudent: Student, nextStudent: Student) => {
      return getAverageGrades(firstStudent.grades)
        - getAverageGrades(nextStudent.grades);
    })
    : students.sort((firstStudent: Student, nextStudent: Student) => {
      return getAverageGrades(nextStudent.grades)
        - getAverageGrades(firstStudent.grades);
    });
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  let filteredArray: Student[] = [];
  // write your function
  const newArray = [...students];

  switch (sortBy) {
    case SortType.Name:
      filteredArray = compare(order, sortBy, newArray);
      break;

    case SortType.Surname:
      filteredArray = compare(order, sortBy, newArray);
      break;

    case SortType.Age:
      filteredArray = compare(order, sortBy, newArray);
      break;

    case SortType.Married:
      filteredArray = compare(order, sortBy, newArray);
      break;

    case SortType.AverageGrade:
      filteredArray = compareGrades(order, newArray);
      break;

    default:
      break;
  }

  return filteredArray;
}

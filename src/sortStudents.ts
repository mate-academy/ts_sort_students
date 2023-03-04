/* eslint-disable comma-dangle */

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

function getAvgGrade(student: Student): number {
  const total: number = student.grades.reduce(
    (sum: number, grade: number) => sum + grade, 0
  );

  return total / student.grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder
): Student[] {
  type Callback = (first: Student, second: Student) => number;

  const sortCallback : Callback = (first, second) => {
    let difrence: number;

    switch (sortBy) {
      case SortType.Name:
        difrence = first.name < second.name ? -1 : 1;
        break;
      case SortType.Surname:
        difrence = first.surname < second.surname ? -1 : 1;
        break;
      case SortType.Age:
        difrence = first.age - second.age;
        break;
      case SortType.Married:
        difrence = Number(first.married) - Number(second.married);
        break;
      case SortType.AverageGrade:
        difrence = getAvgGrade(first) - getAvgGrade(second);
        break;
      default:
        difrence = 0;
    }

    return order === 'asc' ? difrence : -difrence;
  };
  const studentsCopy: Student[] = [...students];

  studentsCopy.sort(sortCallback);

  return studentsCopy;
}

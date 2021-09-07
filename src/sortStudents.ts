/* eslint-disable default-case */
// describe Student type
// create and export SortType enum

// create SortOrder type
interface Student {
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

type SortOrder = 'asc' | 'desc';

function averageGrade(arr:number[]):number {
  const averageNumber:number = arr.reduce((a:number, b:number) => a + b)
  / arr.length;

  return averageNumber;
}

export function sortStudents(students: Student[], sortBy: SortType,
  order: SortOrder):Student[] {
  const sortedStudents = [...students];

  switch (sortBy) {
    case (SortType.Surname):
    case (SortType.Name):
      if (order === 'asc') {
        sortedStudents.sort(
          (first, second) => first[sortBy].localeCompare(second[sortBy]),
        );
      } else {
        sortedStudents.sort(
          (first, second) => second[sortBy].localeCompare(first[sortBy]),
        );
      }
      break;

    case (SortType.Age):
      if (order === 'asc') {
        sortedStudents.sort((first, second) => first.age - second.age);
      } else {
        sortedStudents.sort((first, second) => second.age - first.age);
      }
      break;

    case (SortType.AverageGrade):
      if (order === 'asc') {
        sortedStudents.sort(
          (first, second) => averageGrade(first.grades)
          - averageGrade(second.grades),
        );
      } else {
        sortedStudents.sort(
          (first, second) => averageGrade(second.grades)
          - averageGrade(first.grades),
        );
      }
      break;

    case (SortType.Married):
      if (order === 'asc') {
        sortedStudents.sort(
          (first, second) => Number(first.married) - Number(second.married),
        );
      } else {
        sortedStudents.sort(
          (first, second) => Number(second.married) - Number(first.married),
        );
      }
      break;
  }

  return sortedStudents;
}

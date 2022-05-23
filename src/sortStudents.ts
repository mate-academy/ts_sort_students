
export interface Student {
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[],
}

export enum SortType {
  Name,
  Surname,
  Age,
  Married,
  AverageGrade
}

export type SortOrder = 'asc' | 'desc';

function averageGrades(arr: number[]): number {
  return arr.reduce((a: number, b: number) => a + b, 0) / arr.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const resultArray: Student[] = [...students];

  switch (sortBy) {
    case SortType.Name:
      resultArray.sort((student1, student2) => {
        return order === 'desc'
          ? student2.name.localeCompare(student1.name)
          : student1.name.localeCompare(student2.name);
      });
      break;
    case SortType.Surname:
      resultArray.sort((student1, student2) => {
        return order === 'asc'
          ? student1.surname.localeCompare(student2.surname)
          : student2.surname.localeCompare(student1.surname);
      });
      break;
    case SortType.Age:
      resultArray.sort((student1, student2) => {
        return order === 'asc'
          ? student1.age - student2.age
          : student2.age - student1.age;
      });
      break;
    case SortType.Married:
      resultArray.sort((student1, student2) => {
        return order === 'desc'
          ? +student2.married - +student1.married
          : +student1.married - +student2.married;
      });
      break;
    case SortType.AverageGrade:
      resultArray.sort((student1, student2) => {
        return order === 'asc'
          ? averageGrades(student1.grades) - averageGrades(student2.grades)
          : averageGrades(student2.grades) - averageGrades(student1.grades);
      });
      break;
    default: return [];
  }

  return resultArray;
}

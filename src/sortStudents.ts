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
  AverageGrade = 'grades',
}

export type SortOrder = 'asc' | 'desc';

function getAverageGrade(arrayOfGrades:number[]):number {
  return arrayOfGrades
    .reduce((a:number, b:number) => a + b, 0) / arrayOfGrades.length;
}

export function sortStudents(
  students:Student[],
  sortBy:SortType,
  order:SortOrder,
):Student[] {
  const studentsCopy = [...students];

  studentsCopy.sort((a, b) => {
    let [studentA, studentB] = [a, b];

    if (order === 'desc') {
      [studentA, studentB] = [studentB, studentA];
    }

    switch (sortBy) {
      case SortType.Name:
        return studentA.name.localeCompare(studentB.name);
      case SortType.Surname:
        return studentA.surname.localeCompare(studentB.surname);
      case SortType.Age:
        return studentA.age - studentB.age;
      case SortType.Married:
        if (studentA === studentB) {
          return 0;
        }

        return (studentA.married ? 1 : -1) - (studentB.married ? 1 : -1);
      case SortType.AverageGrade:
        return getAverageGrade(studentA.grades)
          - getAverageGrade(studentB.grades);
      default:
        return 0;
    }
  });

  return studentsCopy;
}

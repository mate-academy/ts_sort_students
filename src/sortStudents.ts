
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

function calcAverage(arr: number[]):number {
  const calcNum:number = arr.reduce((sum:number, grade:number) => sum + grade);

  return calcNum / arr.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: string,
):Student[] {
  const studentCopy: Student[] = JSON.parse(JSON.stringify(students));

  studentCopy.sort((person1: Student, person2: Student) => {
    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return order === 'asc'
          ? person1[sortBy].localeCompare(person2[sortBy])
          : person2[sortBy].localeCompare(person1[sortBy]);

      case SortType.Age:
      case SortType.Married:
        return order === 'asc'
          ? (Number(person1[sortBy])) - (Number(person2[sortBy]))
          : (Number(person2[sortBy])) - (Number(person1[sortBy]));

      case SortType.AverageGrade:
        return order === 'asc'
          ? (calcAverage(person1[sortBy])) - (calcAverage(person2[sortBy]))
          : (calcAverage(person2[sortBy])) - (calcAverage(person1[sortBy]));

      default: throw new Error();
    }
  });

  return studentCopy;
}

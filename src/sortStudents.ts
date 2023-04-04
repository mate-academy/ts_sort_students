
export interface Student {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];
}

export enum SortType {
  Name,
  Surname,
  Age,
  Married,
  AverageGrade
}

export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: object,
  sortBy: SortType,
  order: SortOrder,
): object[] {
  const studentsArray = JSON.parse(JSON.stringify(students));
  const rightOrder = order === 'asc' ? 1 : -1;

  switch (sortBy) {
    case SortType.Name:
      return studentsArray.sort((
        prevStud: Student,
        nextStud: Student,
      ) => (rightOrder * prevStud.name.localeCompare(nextStud.name)));

    case SortType.Surname:
      return studentsArray.sort((
        prevStud: Student,
        nextStud: Student,
      ) => (rightOrder * prevStud.surname.localeCompare(nextStud.surname)));

    case SortType.Age:
      return studentsArray.sort((
        prevStud: Student,
        nextStud: Student,
      ) => rightOrder * (prevStud.age - nextStud.age));

    case SortType.Married:
      return studentsArray.sort((
        prevStud: Student,
        nextStud: Student,
      ) => rightOrder * prevStud
        .married
        .toString()
        .localeCompare(nextStud.married.toString()));

    case SortType.AverageGrade:
      return studentsArray.sort((
        prevStud: Student,
        nextStud: Student,
      ) => {
        const prevAverageGrde = prevStud.grades.reduce((
          a:number,
          b:number,
        ) => a + b, 0) / prevStud.grades.length;

        const nextAverageGrde = nextStud.grades.reduce((
          a:number,
          b:number,
        ) => a + b, 0) / nextStud.grades.length;

        return rightOrder * (prevAverageGrde - nextAverageGrde);
      });

    default:
      throw new Error('Invalid sttment');
  }
}

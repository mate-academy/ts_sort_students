
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
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
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
        function getAverageGrade(student: Student): number {
          return student.grades.reduce((
            a:number,
            b:number,
          ) => a + b, 0) / student.grades.length;
        }

        const prevAverageGrde = getAverageGrade(prevStud);
        const nextAverageGrde = getAverageGrade(nextStud);

        return rightOrder * (prevAverageGrde - nextAverageGrde);
      });

    default:
      throw new Error('Invalid sttment');
  }
}

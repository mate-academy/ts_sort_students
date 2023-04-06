
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
  AverageGrade = 'grades'
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
    case SortType.Surname:
      return studentsArray.sort((
        prevStud: Student,
        nextStud: Student,
      ) => (rightOrder * prevStud[sortBy].localeCompare(nextStud[sortBy])));

    case SortType.Age:
    case SortType.Married:
      return studentsArray.sort((
        prevStud: Student,
        nextStud: Student,
      ) => rightOrder * (Number(prevStud[sortBy]) - Number(nextStud[sortBy])));

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

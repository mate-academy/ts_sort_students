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

function getAvarage(student: Student, sortBy: 'grades'): number {
  return student[sortBy]
    .reduce((elem1, elem2) => elem1 + elem2) / student[sortBy].length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const studentsRes = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return studentsRes
        .sort((student1: Student, student2: Student) => (order === 'asc'
          ? student1[sortBy].localeCompare(student2[sortBy])
          : student2[sortBy].localeCompare(student1[sortBy])));

    case SortType.Age:
    case SortType.Married:
      return studentsRes
        .sort((student1: Student, student2: Student) => (order === 'asc'
          ? Number(student1[sortBy]) - Number(student2[sortBy])
          : Number(student2[sortBy]) - Number(student1[sortBy])));

    case SortType.AverageGrade:
      return studentsRes.sort((student1: Student, student2: Student) => {
        const firstAvarage = getAvarage(student1, sortBy);
        const secondAvarage = getAvarage(student2, sortBy);

        return order === 'asc'
          ? firstAvarage - secondAvarage
          : secondAvarage - firstAvarage;
      });

    default:
      return studentsRes;
  }
}

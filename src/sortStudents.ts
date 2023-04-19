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
  AverageGrade = 'grades'
}

export type SortOrder = 'asc' | 'desc';

function getAvarageGrade(grades: number[]): number {
  return grades.reduce((sum, n) => sum + n) / grades.length;
}

export function sortStudents(students: object[],
  sortBy: SortType, order: SortOrder): object[] {
  const copyStudents: object[] = [...students];

  switch (sortBy) {
    case 'name':
    case 'surname':
      return (order === 'asc')
        ? copyStudents.sort((student1, student2) => student1[sortBy]
          .localeCompare(student2[sortBy]))
        : copyStudents.sort((student1, student2) => student2[sortBy]
          .localeCompare(student1[sortBy]));

    case 'grades':
      return (order === 'asc')
        ? copyStudents
          .sort((student1, student2) => getAvarageGrade(student1[sortBy])
        - getAvarageGrade(student2[sortBy]))
        : copyStudents
          .sort((student1, student2) => getAvarageGrade(student2[sortBy])
          - getAvarageGrade(student1[sortBy]));

    default:
      return (order === 'asc')
        ? copyStudents.sort((student1, student2) => student1[sortBy]
        - student2[sortBy])
        : copyStudents.sort((student1, student2) => student2[sortBy]
        - student1[sortBy]);
  }
}

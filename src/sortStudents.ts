
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

function avarageGrage(array: number[]): number {
  return array.reduce((total, grade) => (total + grade), 0) / array.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
)
  : Student[] {
  const newStudents = [...students];

  switch (sortBy) {
    case 'name':
    case 'surname':
      return order === 'asc'
        ? newStudents
          .sort((student1, student2) => student1[sortBy]
            .localeCompare(student2[sortBy]))
        : newStudents
          .sort((student1, student2) => student2[sortBy]
            .localeCompare(student1[sortBy]));
    case 'age':
    case 'married':
      return order === 'asc'
        ? newStudents
          .sort((student1, student2) => (+student1[sortBy])
           - (+student2[sortBy]))
        : newStudents
          .sort((student1, student2) => (+student2[sortBy])
           - (+student1[sortBy]));
    case 'grades':
      return order === 'asc'
        ? newStudents
          .sort((student1, student2) => avarageGrage(student1[sortBy])
           - avarageGrage(student2[sortBy]))
        : newStudents
          .sort((student1, student2) => avarageGrage(student2[sortBy])
           - avarageGrage(student1[sortBy]));

    default:

      return newStudents;
  }
}

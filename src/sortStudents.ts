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

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder
): Student[] {
  const sortedStudents = [...students];

  switch (sortBy) {
    case 'name':
    case 'surname':
      return sortedStudents
        .sort((student1, student2) => {
          return order === 'asc'
            ? student1[sortBy].localeCompare(student2[sortBy])
            : student2[sortBy].localeCompare(student1[sortBy]);
        });

    case 'age':
    case 'married':
      return sortedStudents
        .sort((student1, student2) => {
          return order === 'asc'
            ? +student1[sortBy] - +student2[sortBy]
            : +student2[sortBy] - +student1[sortBy]
        });

    case 'grades':
      return sortedStudents
        .sort((student1, student2) => {
          const first = ([...student1[sortBy]]
            .reduce((a, b) => a + b, 0) / student1[sortBy].length) || 0;
          const second = ([...student2[sortBy]]
            .reduce((a, b) => a + b, 0) / student1[sortBy].length) || 0;

          return order === 'asc'
            ? first - second
            : second - first;
        });

    default:
      return sortedStudents;
  }
}

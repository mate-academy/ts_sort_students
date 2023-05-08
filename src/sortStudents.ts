
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

const getAverageGrades = (grades: number[]): number => {
  return grades
    .reduce((init, curr) => init + curr, 0) / grades.length;
};

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  return [...students].sort((student1, student2) => {
    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return order === 'asc'
          ? student1[sortBy].localeCompare(student2[sortBy])
          : student2[sortBy].localeCompare(student1[sortBy]);

      case SortType.Married:
      case SortType.Age:
        return order === 'asc'
          ? +student1[sortBy] - +student2[sortBy]
          : +student2[sortBy] - +student1[sortBy];

      case SortType.AverageGrade:
        return order === 'asc'
          ? getAverageGrades(student1[sortBy])
            - getAverageGrades(student2[sortBy])
          : getAverageGrades(student2[sortBy])
            - getAverageGrades(student1[sortBy]);

      default:
        throw Error('Enter a valid sort value.');
    }
  });
}

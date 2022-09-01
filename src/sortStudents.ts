
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

function AverageGrades(grades: number[]): number {
  return grades.reduce((previous, current) => previous + current, 0)
    / grades.length;
}

export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const sortedStudents = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return sortedStudents.sort((student1, student2) => (order === 'asc'
        ? student1[sortBy].localeCompare(student2[sortBy])
        : student2[sortBy].localeCompare(student1[sortBy])));
    case SortType.Age:
    case SortType.Married:
      return sortedStudents.sort((number1, number2) => (order === 'asc'
        ? Number(number1[sortBy]) - Number(number2[sortBy])
        : Number(number2[sortBy]) - Number(number1[sortBy])));
    case SortType.AverageGrade:
      return sortedStudents.sort((student1, student2) => (order === 'asc'
        ? AverageGrades(student1[sortBy]) - AverageGrades(student2[sortBy])
        : AverageGrades(student2[sortBy]) - AverageGrades(student1[sortBy])
      ));
    default: break;
  }

  return sortedStudents;
}

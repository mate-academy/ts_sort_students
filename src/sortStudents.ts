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
  AverageGrade = 'grades',
}

export type SortOrder = 'asc' | 'desc';

const getAverageGrade = (grades: number[]) : number => {
  return grades.reduce((previous, current) => previous + current
    , 0) / grades.length;
};

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copiedStudents = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return order === 'asc'
        ? copiedStudents
          .sort((stud1, stud2) => stud1[sortBy].localeCompare(stud2[sortBy]))
        : copiedStudents
          .sort((stud1, stud2) => stud2[sortBy].localeCompare(stud1[sortBy]));

    case SortType.Age:
    case SortType.Married:
      return order === 'asc'
        ? copiedStudents
          .sort((stud1, stud2) => +stud1[sortBy] - +stud2[sortBy])
        : copiedStudents
          .sort((stud1, stud2) => +stud2[sortBy] - +stud1[sortBy]);

    case SortType.AverageGrade:
      return order === 'asc'
        ? copiedStudents
          .sort((stud1, stud2) => (
            getAverageGrade(stud1[sortBy]) - getAverageGrade(stud2[sortBy])))
        : copiedStudents
          .sort((stud1, stud2) => (
            getAverageGrade(stud2[sortBy]) - getAverageGrade(stud1[sortBy])));

    default:
      break;
  }

  return copiedStudents;
}

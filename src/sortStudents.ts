
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

function getAverageGrades(grades: number[]): number {
  return grades.reduce((a: number, b: number) => a + b) / grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const studentsCopy: Student[] = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      studentsCopy.sort((stud1, stud2) => {
        return order === 'asc'
          ? stud1[sortBy].localeCompare(stud2[sortBy])
          : stud2[sortBy].localeCompare(stud1[sortBy]);
      });
      break;

    case SortType.Age:
    case SortType.Married:
      studentsCopy.sort((stud1, stud2) => {
        return order === 'asc'
          ? Number(stud1[sortBy]) - Number(stud2[sortBy])
          : Number(stud2[sortBy]) - Number(stud1[sortBy]);
      });
      break;

    case SortType.AverageGrade:
      studentsCopy.sort((stud1, stud2) => {
        return order === 'asc'
          ? getAverageGrades(stud1[sortBy]) - getAverageGrades(stud2[sortBy])
          : getAverageGrades(stud2[sortBy]) - getAverageGrades(stud1[sortBy]);
      });
      break;

    default:
      return studentsCopy;
  }

  return studentsCopy;
}

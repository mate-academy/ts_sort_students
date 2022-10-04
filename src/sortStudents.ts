
export interface Student {
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: [],
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'grades',
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

function averageGrade(grades: number[]): number {
  return grades.reduce((prev: number, curr: number) => (
    prev + curr
  ), 0) / grades.length;
}

export function sortStudents(students, sortBy, order): Student[] {
  const copyOfStudents = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      copyOfStudents.sort((studentA: Student, studentB: Student): number => {
        return order === 'asc'
          ? studentA[sortBy].localeCompare(studentB[sortBy])
          : studentB[sortBy].localeCompare(studentA[sortBy]);
      });
      break;

    case SortType.Age:
    case SortType.Married:
      copyOfStudents.sort((studentA: Student, studentB: Student): number => {
        return order === 'asc'
          ? Number(studentA[sortBy]) - Number(studentB[sortBy])
          : Number(studentB[sortBy]) - Number(studentA[sortBy]);
      });
      break;

    case SortType.AverageGrade:
      copyOfStudents.sort((studentA: Student, studentB: Student): number => {
        return order === 'asc'
          ? averageGrade(studentA[sortBy]) - averageGrade(studentB[sortBy])
          : averageGrade(studentB[sortBy]) - averageGrade(studentA[sortBy]);
      });
      break;

    default:
      throw new Error('Unknown sort type');
  }

  return copyOfStudents;
}

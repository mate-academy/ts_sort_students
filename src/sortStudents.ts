
export interface Student {
  // describe Student interface
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];
}

export enum SortType {
  // describe SortType enum
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'grades',
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

function getAverageGrade(grades: number[]): number {
  return grades.reduce((sumOfGrades: number, currentGrade: number) => (
    sumOfGrades + currentGrade
  ), 0) / grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  // swrite your function
  const sortedStudents: Student[] = [...students];

  return sortedStudents.sort(
    (studentA: Student, studentB: Student) => {
      switch (sortBy) {
        case SortType.Name:
        case SortType.Surname:
          return order === 'asc'
            ? studentA[sortBy].localeCompare(studentB[sortBy])
            : studentB[sortBy].localeCompare(studentA[sortBy]);

        case SortType.Age:
        case SortType.Married:
          return order === 'asc'
            ? Number(studentA[sortBy]) - Number(studentB[sortBy])
            : Number(studentB[sortBy]) - Number(studentA[sortBy]);

        case SortType.AverageGrade:
          return order === 'asc'
            ? getAverageGrade(studentA[sortBy])
            - getAverageGrade(studentB[sortBy])
            : getAverageGrade(studentB[sortBy])
            - getAverageGrade(studentA[sortBy]);

        default:
          return 0;
      }
    },
  );
}

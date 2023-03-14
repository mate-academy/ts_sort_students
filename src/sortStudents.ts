
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

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

function getAverageGrades(grades: number[]): number {
  return grades.reduce((accum, curr) => accum + curr, 0) / grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  return [...students].sort((studA: Student, studB: Student) => {
    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return order === 'asc'
          ? studA[sortBy].localeCompare(studB[sortBy])
          : studB[sortBy].localeCompare(studA[sortBy]);

      case SortType.Age:
        return order === 'asc'
          ? studA[sortBy] - studB[sortBy]
          : studB[sortBy] - studA[sortBy];

      case SortType.AverageGrade:
        return order === 'asc'
          ? getAverageGrades(studA[sortBy]) - getAverageGrades(studB[sortBy])
          : getAverageGrades(studB[sortBy]) - getAverageGrades(studA[sortBy]);

      case SortType.Married:
        return order === 'asc'
          ? Number(studA[sortBy]) - Number(studB[sortBy])
          : Number(studB[sortBy]) - Number(studA[sortBy]);
      default:
        throw new Error('Please enter the appropriate data');
    }
  });
}

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

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

function calculateAverage(grades: number[]): number {
  const averageGrade: number = grades
    .reduce((sumOfGrades, grade) => sumOfGrades + grade, 0) / grades.length;

  return averageGrade;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const sortedStudents: Student[] = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return sortedStudents.sort((studentA: Student, studentB: Student) => {
        return order === 'asc'
          ? studentA[sortBy].localeCompare(studentB[sortBy])
          : studentB[sortBy].localeCompare(studentA[sortBy]);
      });

    case SortType.Age:
      return sortedStudents.sort((studentA: Student, studentB: Student) => {
        return order === 'asc'
          ? studentA[sortBy] - studentB[sortBy]
          : studentB[sortBy] - studentA[sortBy];
      });

    case SortType.Married:
      return sortedStudents.sort((studentA: Student, studentB: Student) => {
        return order === 'asc'
          ? Number(studentA[sortBy]) - Number(studentB[sortBy])
          : Number(studentB[sortBy]) - Number(studentA[sortBy]);
      });

    case SortType.AverageGrade:
      return sortedStudents
        .sort((studentA: Student, studentB: Student) => {
          return order === 'asc'
            ? calculateAverage(studentA[sortBy])
              - calculateAverage(studentB[sortBy])
            : calculateAverage(studentB[sortBy])
              - calculateAverage(studentA[sortBy]);
        });

    default:
      return [];
  }
}

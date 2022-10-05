
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
  AverageGrade = 'averageGrade',
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

function getAverageGrades(student: Student): number {
  return student.grades.reduce((sum: number, current: number) => (
    sum + current
  ), 0) / student.grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copyOfStudents = [...students];

  return copyOfStudents.sort((studentA: Student, studentB: Student) => {
    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return studentA[sortBy].localeCompare(studentB[sortBy]);

      case SortType.Age:
        return order === 'asc'
          ? studentA[sortBy] - studentB[sortBy]
          : studentB[sortBy] - studentA[sortBy];

      case SortType.AverageGrade:
        return order === 'asc'
          ? getAverageGrades(studentA) - getAverageGrades(studentB)
          : getAverageGrades(studentB) - getAverageGrades(studentA);

      case SortType.Married:
        return order === 'asc'
          ? +(studentA[sortBy]) - +(studentB[sortBy])
          : +(studentB[sortBy]) - +(studentA[sortBy]);

      default:
        return 0;
    }
  });
}


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
  AverageGrade = 'averageGrade'
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

export function getStudentAverageGrade({ grades }: Student): number {
  return grades.reduce((sum, grade) => sum + grade, 0) / grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const studentList = [...students];
  const signCoefficient = order === 'asc' ? 1 : -1;

  studentList.sort((studentA: Student, studentB: Student) => {
    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return signCoefficient
          * (studentA[sortBy].localeCompare(studentB[sortBy]));

      case SortType.Age:
      case SortType.Married:
        return signCoefficient
          * (Number(studentA[sortBy]) - Number(studentB[sortBy]));

      case SortType.AverageGrade:
        return signCoefficient
          * (getStudentAverageGrade(studentA)
            - getStudentAverageGrade(studentB));

      default:
        return 0;
    }
  });

  return studentList;
}

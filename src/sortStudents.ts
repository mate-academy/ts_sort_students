
export interface Student {
  name: string,
  surname: string,
  age: number,
  married: true,
  grades: number[]
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'grades'
}

export type SortOrder = 'asc' | 'desc';

function averageGrade({ grades }: Student): number {
  return grades.reduce((acc, el) => acc + el) / grades.length;
}

export function sortStudents(students: Student[],
  sortBy: SortType, order: SortOrder): Student[] {
  const copyStudents: Student[] = [...students];

  return copyStudents.sort((studentA, studentB) => {
    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return order === 'asc'
          ? studentA[sortBy].localeCompare(studentB[sortBy])
          : studentB[sortBy].localeCompare(studentA[sortBy]);
      case SortType.Age:
      case SortType.Married:
        return order === 'asc'
          ? +studentA[sortBy] - +studentB[sortBy]
          : +studentB[sortBy] - +studentA[sortBy];

      case SortType.AverageGrade:
        return order === 'asc' ? averageGrade(studentA) - averageGrade(studentB)
          : averageGrade(studentB) - averageGrade(studentA);

      default:
        return 0;
    }
  });
}

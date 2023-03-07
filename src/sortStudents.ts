
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

export function getAvaregeGrade({ grades }: Student): number {
  return grades.reduce((prevGrade, currGrade) => prevGrade + currGrade, 0)
  / grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copyStudents = [...students];

  return copyStudents.sort((studentA, studentB) => {
    const sortMethod = order === 'asc';

    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return sortMethod
          ? studentA[sortBy].localeCompare(studentB[sortBy])
          : studentB[sortBy].localeCompare(studentA[sortBy]);

      case SortType.Age:
      case SortType.Married:
        return sortMethod
          ? Number(studentA[sortBy]) - Number(studentB[sortBy])
          : Number(studentB[sortBy]) - Number(studentA[sortBy]);

      case SortType.AverageGrade:
        return sortMethod
          ? getAvaregeGrade(studentA) - getAvaregeGrade(studentB)
          : getAvaregeGrade(studentB) - getAvaregeGrade(studentA);

      default:
        throw new Error('Insert correct information');
    }
  });
}

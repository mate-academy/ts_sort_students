
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

export type SortOrder = 'asc' | 'desc';

export function getAverageGrade({ grades }: Student): number {
  const sum = grades.reduce((acc, grade) => acc + grade, 0);

  return sum / grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const newStudents = [...students];

  return newStudents.sort((aStudent, bStudent) => {
    const orderValue = order === 'asc' ? 1 : -1;

    switch (sortBy) {
      case (SortType.Name):
      case (SortType.Surname):
        return aStudent[sortBy].localeCompare(bStudent[sortBy]) * orderValue;

      case (SortType.Age):
        return (aStudent.age - bStudent.age) * orderValue;

      case (SortType.Married):
        return (+aStudent.married - (+bStudent.married)) * orderValue;

      case (SortType.AverageGrade):
        return (
          getAverageGrade(aStudent) - getAverageGrade(bStudent)
        ) * orderValue;

      default:
        throw new Error('invalid sort value');
    }
  });
}

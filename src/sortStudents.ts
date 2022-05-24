
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

function calculateAvg(grades: number[]): number {
  const totalGrades: number
    = grades.reduce((sum: number, next: number) => (
      sum + next));

  return totalGrades / grades.length;
}

export function sortStudents(students: Student[], sortBy: SortType,
  order: SortOrder): Student[] {
  const result: Student[] = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return result.sort((FirstStudent: Student, SecondStudent: Student) => {
        return order === 'asc'
          ? FirstStudent[sortBy].localeCompare(SecondStudent[sortBy])
          : SecondStudent[sortBy].localeCompare(FirstStudent[sortBy]);
      });

    case SortType.Age:
    case SortType.Married:
      return result.sort((FirstStudent: Student, SecondStudent: Student) => {
        return order === 'asc'
          ? Number(FirstStudent[sortBy]) - Number(SecondStudent[sortBy])
          : Number(SecondStudent[sortBy]) - Number(FirstStudent[sortBy]);
      });

    case SortType.AverageGrade:
      return result.sort((FirstStudent: Student, SecondStudent: Student) => {
        const firstAvg = calculateAvg(FirstStudent[sortBy]);
        const secondAvg = calculateAvg(SecondStudent[sortBy]);

        return order === 'asc'
          ? firstAvg - secondAvg
          : secondAvg - firstAvg;
      });

    default:
      return [];
  }
}

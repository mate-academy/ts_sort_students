
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

function calcAverageGrades(grades: number[]): number {
  return grades.reduce((sum, elem) => sum + elem, 0) / grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const sortedStudents: Student[] = [...students];

  return sortedStudents.sort((item1: Student, item2: Student): number => {
    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return order === 'asc'
          ? item1[sortBy].localeCompare(item2[sortBy])
          : item2[sortBy].localeCompare(item1[sortBy]);

      case SortType.Age:
      case SortType.Married:
        return order === 'asc'
          ? Number(item1[sortBy]) - Number(item2[sortBy])
          : Number(item2[sortBy]) - Number(item1[sortBy]);

      case SortType.AverageGrade:
        return order === 'asc'
          ? calcAverageGrades(item1[sortBy])
            - calcAverageGrades(item2[sortBy])
          : calcAverageGrades(item2[sortBy])
            - calcAverageGrades(item1[sortBy]);

      default:
        throw new Error('Invalid sortBy type');
    }
  });
}

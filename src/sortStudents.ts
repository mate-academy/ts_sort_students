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
  AverageGrade = 'grades'
}

export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const sortedStudents = [...students];
  const getAverageGrade = (grades: number[]): number => {
    const sum = grades.reduce((total, grade) => total + grade, 0);

    return sum / grades.length;
  };

  sortedStudents.sort((studentA, studentB) => {
    let comparison = 0;

    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        comparison = studentA[sortBy].localeCompare(studentB[sortBy]);
        break;
      case SortType.Age:
      case SortType.Married:
        comparison = +studentA[sortBy] - +studentB[sortBy];
        break;
      case SortType.AverageGrade:
        comparison
        = getAverageGrade(studentA.grades) - getAverageGrade(studentB.grades);
        break;
      default:
        break;
    }

    return order === 'asc' ? comparison : -comparison;
  });

  return sortedStudents;
}

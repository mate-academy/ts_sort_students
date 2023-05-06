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
  AverageGrade = 'averageGrade',
}

export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const studentsCopy: Student[] = [...students];

  const calculateAverageGrade = (grades: number[]): number => {
    return grades.reduce((acc, grade) => acc + grade, 0) / grades.length;
  };

  const sortByAverageGrade = (first: Student, second: Student): number => {
    const avgA = calculateAverageGrade(first.grades);
    const avgB = calculateAverageGrade(second.grades);

    return order === 'asc' ? avgA - avgB : avgB - avgA;
  };

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      studentsCopy.sort((first, second) => (
        first[sortBy].localeCompare(second[sortBy])
      ));
      break;

    case SortType.Age:
      studentsCopy.sort((first, second) => (
        second.age - first.age
      ));
      break;

    case SortType.Married:
      studentsCopy.sort((first, second) => (
        Number(second.married) - Number(first.married)
      ));
      break;

    case SortType.AverageGrade:
      studentsCopy.sort(sortByAverageGrade);
      break;

    default:
      throw new Error(`Unexpected sortBy value: ${sortBy}`);
  }

  return studentsCopy;
}

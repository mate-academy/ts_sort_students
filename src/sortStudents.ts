
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
):Student[] {
  const copyStudents: Student[] = [...students];

  function calculateAverageGrade(grade: number[]): number {
    return grade.reduce((sum, element) => sum + element) / grade.length;
  }

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      copyStudents.sort((a: Student, b: Student) => {
        return order === 'asc'
          ? a[sortBy].localeCompare(b[sortBy])
          : b[sortBy].localeCompare(a[sortBy]);
      });
      break;

    case SortType.Age:
      copyStudents.sort((a: Student, b: Student) => {
        return order === 'asc'
          ? a.age - b.age
          : b.age - a.age;
      });
      break;

    case SortType.Married:
      copyStudents.sort((a: Student, b: Student) => {
        return order === 'asc'
          ? Number(a.married) - Number(b.married)
          : Number(b.married) - Number(a.married);
      });
      break;

    case SortType.AverageGrade:
      copyStudents.sort((a: Student, b: Student) => {
        const aGradeAverage: number = calculateAverageGrade(a.grades);
        const bGradeAverage: number = calculateAverageGrade(b.grades);

        return order === 'asc'
          ? aGradeAverage - bGradeAverage
          : bGradeAverage - aGradeAverage;
      });
      break;

    default:
      throw new Error('Invalid data');
  }

  return copyStudents;
}

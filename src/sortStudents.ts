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

function calculateAverageGrade(grades: number[]): number {
  const sum = grades
    .reduce((acc: number, grade: number): number => acc + grade, 0);

  return sum / grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  return [...students].sort((student1, student2) => {
    let result: number = 0;

    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        result = student1[sortBy].localeCompare(student2[sortBy]);
        break;

      case SortType.Age:
        result = student1.age - student2.age;
        break;

      case SortType.Married:
        result = Number(student1[sortBy]) - Number(student2[sortBy]);
        break;

      case SortType.AverageGrade:

        result = calculateAverageGrade(student1.grades)
          - calculateAverageGrade(student2.grades);
        break;

      default:
        throw new Error('Cannot sort that data type');
    }

    return order === 'desc'
      ? -result
      : result;
  });
}

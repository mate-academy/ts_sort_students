
export interface Student {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[],
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'averageGrade',
}

export type SortOrder = 'asc' | 'desc';

function calculateAverageGrade(grades: number[]): number {
  return grades.reduce((prev, grade) => prev + grade, 0) / grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copiedStudents: Student[] = [...students];

  copiedStudents.sort((student1, student2): number => {
    let result: number = 0;

    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        result = student1[sortBy].localeCompare(student2[sortBy]);
        break;

      case SortType.Age:
      case SortType.Married:
        result = (Number(student1[sortBy])) - (Number(student2[sortBy]));
        break;

      case SortType.AverageGrade:
        result = calculateAverageGrade(student1.grades)
          - calculateAverageGrade(student2.grades);
        break;

      default:
        break;
    }

    return order === 'asc' ? result : -result;
  });

  return copiedStudents;
}

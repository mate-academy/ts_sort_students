
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

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const direction = order === 'asc' ? 1 : -1;

  return [...students].sort((a, b) => {
    let result = 0;

    switch (sortBy) {
      case SortType.Name:
        result = a.name.localeCompare(b.name);
        break;

      case SortType.Surname:
        result = a.surname.localeCompare(b.surname);
        break;

      case SortType.Age:
        result = a.age - b.age;
        break;

      case SortType.Married:
        result = Number(a.married) - Number(b.married);
        break;

      case SortType.AverageGrade: {
        const avgA
        = a.grades.reduce((sum, grade) => sum + grade, 0) / a.grades.length;

        const avgB
        = b.grades.reduce((sum, grade) => sum + grade, 0) / b.grades.length;

        result = avgA - avgB;
        break;
      }

      default:
        return 0;
    }

    return result * direction;
  });
}

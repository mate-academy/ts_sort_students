export interface Student {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];
}

export enum SortType {
  Name = 'Name',
  Surname = 'Surname',
  Age = 'Age',
  Married = 'Married',
  AverageGrade = 'AverageGrade',
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const sortedStudents = [...students];

  sortedStudents.sort((a, b) => {
    let comparison = 0;

    switch (sortBy) {
      case SortType.Name:
        comparison
          = a.name.localeCompare(b.name);
        break;
      case SortType.Surname:
        comparison
          = a.surname.localeCompare(b.surname);
        break;
      case SortType.Age:
        comparison = a.age - b.age;
        break;
      case SortType.Married:
        comparison
          = Number(a.married) - Number(b.married);
        break;

      case SortType.AverageGrade: {
        const avgA
          = a.grades.reduce((sum, grade) => sum + grade, 0) / a.grades.length;
        const avgB
          = b.grades.reduce((sum, grade) => sum + grade, 0) / b.grades.length;

        comparison = avgA - avgB;
        break;
      }
      default:
        comparison = 0;
        break;
    }

    // Reverse the comparison if order is 'desc'
    return order === 'desc'
      ? -comparison
      : comparison;
  });

  return sortedStudents;
}

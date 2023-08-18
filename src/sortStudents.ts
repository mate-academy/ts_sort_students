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

function compareAverageGrades(a: Student, b: Student): number {
  const averageA = a.grades.reduce((sum, grade) => sum + grade, 0)
  / a.grades.length;
  const averageB = b.grades.reduce((sum, grade) => sum + grade, 0)
  / b.grades.length;

  return averageA - averageB;
}

export function sortStudents(students: Student[],
  sortBy: SortType, order: SortOrder): Student[] {
  return [...students].sort((a, b) => {
    let comparison = 0;

    switch (sortBy) {
      case SortType.Name:
        comparison = a.name.localeCompare(b.name);
        break;
      case SortType.Surname:
        comparison = a.surname.localeCompare(b.surname);
        break;
      case SortType.Age:
        comparison = a.age - b.age;
        break;
      case SortType.Married:
        if (a.married && !b.married) {
          comparison = 1;
        } else if (!a.married && b.married) {
          comparison = -1;
        }
        break;
      case SortType.AverageGrade:
        comparison = compareAverageGrades(a, b);
        break;
      default:
        throw new Error(`Invalid SortType: ${sortBy}`);
    }

    return order === 'asc' ? comparison : -comparison;
  });
}

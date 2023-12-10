
export interface Student {
  // describe Student interface
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];
}

export enum SortType {
  // describe SortType enum
  Name,
  Surname,
  Age,
  Married,
  AverageGrade,
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

export function calcAvgGrade(grades: number[]): number {
  const sum = grades.reduce((a, b) => a + b, 0);

  return sum / grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const sortedStudents = [...students];

  sortedStudents.sort((a, b) => {
    let comparison;

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
        if (a.married === b.married) {
          comparison = 0;
        } else {
          comparison = a.married ? 1 : -1;
        }
        break;
      case SortType.AverageGrade:
      //  const avgGradeA: number = calculateAverageGrade(a.grades);
      //  const avgGradeB: number = calculateAverageGrade(b.grades);

        comparison = calcAvgGrade(a.grades) - calcAvgGrade(b.grades);
        break;
      default:
        throw new Error('Invalid sorBy value');
    }

    return order === 'asc' ? comparison : -comparison;
  });

  return sortedStudents;
}

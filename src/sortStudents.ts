
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

function calculateAverageGrade(grades: number[]): number {
  if (grades.length === 0) {
    return 0;
  }

  const sum = grades.reduce((acc, grade) => acc + grade, 0);

  return sum / grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder = 'asc',
): Student[] {
  const sortedStudents = [...students];

  sortedStudents.sort((studentA, studentB) => {
    let comparisonResult = 0;

    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        comparisonResult = studentA[sortBy.toLowerCase() as 'name' | 'surname']
          .localeCompare(studentB[sortBy.toLowerCase() as 'name' | 'surname']);
        break;
      case SortType.Age:
        comparisonResult = studentA.age - studentB.age;
        break;
      case SortType.Married:
        comparisonResult = Number(studentA.married) - Number(studentB.married);
        break;

      case SortType.AverageGrade: {
        const avgA = calculateAverageGrade(studentA.grades);
        const avgB = calculateAverageGrade(studentB.grades);

        comparisonResult = avgA - avgB;
        break;
      }
      default:
        comparisonResult = 0;
    }

    if (comparisonResult === 0) {
      return 0;
    }

    return order === 'desc' ? -comparisonResult : comparisonResult;
  });

  return sortedStudents;
}

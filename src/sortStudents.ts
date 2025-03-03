
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
  function calculateAverageGrade(grades: number[]): number {
    const sumOfGrades = grades.reduce((acc: number, grade: number) => {
      return acc + grade;
    }, 0);

    return sumOfGrades / grades.length;
  }

  const sortedStudents = [...students];

  sortedStudents.sort((a: Student, b: Student): number => {
    let comparison: number = 0;

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
        comparison = Number(a.married) - Number(b.married);
        break;
      case SortType.AverageGrade:
        comparison
        = calculateAverageGrade(a.grades) - calculateAverageGrade(b.grades);
        break;
      default:
        comparison = 0;
    }

    return order === 'asc' ? comparison : -comparison;
  });

  return sortedStudents;
}

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
  AverageGrade = 'Grades',
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const studentsCopy = [...students];
  const calculateAverageGrade = (grades: number[]): number => {
    return grades.reduce((sum, grade) => sum + grade, 0) / grades.length;
  };

  studentsCopy.sort((a, b) => {
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
        if (a.married === b.married) {
          comparison = 0;
          break;
        }

        if (a.married) {
          comparison = 1;
          break;
        }

        comparison = -1;
        break;
      case SortType.AverageGrade:
        comparison
        = calculateAverageGrade(a.grades) - calculateAverageGrade(b.grades);
        break;

      default: break;
    }

    return order === 'asc' ? comparison : -comparison;
  });

  return studentsCopy;
}

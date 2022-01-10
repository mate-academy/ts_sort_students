
export interface Student {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];
}

export enum SortType {
  Name,
  Surname,
  Age,
  Married,
  AverageGrade,
}

export type SortOrder = 'asc' | 'desc';

export function sortStudents(students: Student[],
  sortBy: SortType,
  order: SortOrder): Student[] {
  function averageGrade(grades: number[]): number {
    return grades.reduce((sum, point) => sum + point, 0) / grades.length;
  }

  const sorted = [...students].sort((student1, student2) => {
    if (order === 'asc') {
      switch (sortBy) {
        case SortType.Name:
          return student1.name.localeCompare(student2.name);
        case SortType.Surname:
          return student1.surname.localeCompare(student2.surname);
        case SortType.Age:
          return student1.age - student2.age;
        case SortType.Married:
          if (student1.married === student2.married) {
            return 0;
          }

          if (student1.married) {
            return 1;
          }

          return -1;
        case SortType.AverageGrade:
          return averageGrade(student1.grades) - averageGrade(student2.grades);
        default:
          return 0;
      }
    }

    switch (sortBy) {
      case SortType.Name:
        return student2.name.localeCompare(student1.name);
      case SortType.Surname:
        return student2.surname.localeCompare(student1.surname);
      case SortType.Age:
        return student2.age - student1.age;
      case SortType.Married:
        if (student1.married === student2.married) {
          return 0;
        }

        if (student1.married) {
          return -1;
        }

        return 1;
      case SortType.AverageGrade:
        return averageGrade(student2.grades) - averageGrade(student1.grades);
      default:
        return 0;
    }
  });

  return sorted;
}

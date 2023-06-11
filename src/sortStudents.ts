
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

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copyStudents = [...students];

  if (order === 'asc') {
    switch (sortBy) {
      case SortType.Name:
        return copyStudents.sort((a, b) => a.name.localeCompare(b.name));
      case SortType.Surname:
        return copyStudents.sort((a, b) => a.surname.localeCompare(b.surname));
      case SortType.Age:
        return copyStudents.sort((a, b) => a.age - b.age);
      case SortType.Married:
        return copyStudents
          .sort((a, b) => (a.married ? 1 : -1) - (b.married ? 1 : -1));
      case SortType.AverageGrade:
        return copyStudents
          .sort((a, b) => (a.grades
            .reduce((sum, currentGrade) => sum + currentGrade, 0)
            / a.grades.length)
          - (b.grades
            .reduce((sum, currentGrade) => sum + currentGrade, 0)
            / b.grades.length));
      default:
        break;
    }
  }

  if (order === 'desc') {
    switch (sortBy) {
      case SortType.Name:
        return copyStudents.sort((a, b) => b.name.localeCompare(a.name));
      case SortType.Surname:
        return copyStudents.sort((a, b) => b.surname.localeCompare(a.surname));
      case SortType.Age:
        return copyStudents.sort((a, b) => b.age - a.age);
      case SortType.Married:
        return copyStudents
          .sort((a, b) => (b.married ? 1 : -1) - (a.married ? 1 : -1));
      case SortType.AverageGrade:
        return copyStudents
          .sort((a, b) => (b.grades
            .reduce((sum, currentGrade) => sum + currentGrade, 0)
            / b.grades.length)
          - (a.grades
            .reduce((sum, currentGrade) => sum + currentGrade, 0)
            / a.grades.length));
      default:
        break;
    }
  }

  return copyStudents;
}

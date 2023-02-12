
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

export function sortStudents(
  students: Student[], sortBy: SortType, order: SortOrder,
): Student[] {
  // write your function
  const sortedStudents = [...students];

  sortedStudents.sort((a, b) => {
    let comparison = 0;
    let aAverageGrade = 0;
    let bAverageGrade = 0;

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
        aAverageGrade = a.grades
          .reduce((sum, grade) => sum + grade, 0) / a.grades.length;

        bAverageGrade = b.grades
          .reduce((sum, grade) => sum + grade, 0) / b.grades.length;

        comparison = aAverageGrade - bAverageGrade;
        break;
      default:
        break;
    }

    return order === 'asc' ? comparison : -comparison;
  });

  return sortedStudents;
}

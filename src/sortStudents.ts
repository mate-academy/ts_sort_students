
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
  function averageGrade(grades: number[]): number {
    return grades.reduce((sum, grade) => sum + grade, 0) / grades.length;
  }

  const sortedStudents = [...students].sort((student1, student2) => {
    switch (sortBy) {
      case SortType.Name:
        return order === 'asc'
          ? student1.name.localeCompare(student2.name)
          : student2.name.localeCompare(student1.name);
      case SortType.Surname:
        return order === 'asc'
          ? student1.surname.localeCompare(student2.surname)
          : student2.surname.localeCompare(student1.surname);
      case SortType.Age:
        return order === 'asc'
          ? student1.age - student2.age
          : student2.age - student1.age;
      case SortType.Married:
        return order === 'asc'
          ? +student1.married - +student2.married
          : +student2.married - +student1.married;
      case SortType.AverageGrade:
        return order === 'asc'
          ? averageGrade(student1.grades) - averageGrade(student2.grades)
          : averageGrade(student2.grades) - averageGrade(student1.grades);
      default:
        return 0;
    }
  });

  return sortedStudents;
}

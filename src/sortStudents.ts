
export interface Student {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[],
}

export enum SortType {
  Name,
  Surname,
  Age,
  Married,
  AverageGrade,
}

export type SortOrder = 'asc' | 'desc';

function calculateAverageGrade(grades: number[]): number {
  return grades.reduce((prev, grade) => prev + grade, 0) / grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copiedStudents: Student[] = [...students];

  copiedStudents.sort((student1, student2): number => {
    let result: number = 0;

    switch (sortBy) {
      case SortType.Name:
        result = student1.name.localeCompare(student2.name);
        break;

      case SortType.Surname:
        result = student1.surname.localeCompare(student2.surname);
        break;

      case SortType.Age:
        result = student1.age - student2.age;
        break;

      case SortType.Married:
        result = Number(student1.married) - Number(student2.married);
        break;

      case SortType.AverageGrade:
        result = calculateAverageGrade(student1.grades)
          - calculateAverageGrade(student2.grades);
        break;

      default:
        break;
    }

    return order === 'asc' ? result : -result;
  });

  return copiedStudents;
}

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

function averageGradeCalc(grades: number[]): number {
  return grades.reduce((sum, grade) => sum + grade, 0) / grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const sortedStudents = [...students];

  sortedStudents.sort((a, b) => {
    let valueA;
    let valueB;

    switch (sortBy) {
      case SortType.Name:
        valueA = a.name.localeCompare(b.name);
        valueB = b.name.localeCompare(a.name);
        break;

      case SortType.Surname:
        valueA = a.surname.localeCompare(b.surname);
        valueB = b.surname.localeCompare(a.surname);
        break;

      case SortType.Age:
        valueA = a.age;
        valueB = b.age;
        break;

      case SortType.Married:
        valueA = a.married;
        valueB = b.married;
        break;

      case SortType.AverageGrade:
        valueA = averageGradeCalc(a.grades);

        valueB = averageGradeCalc(b.grades);
        break;

      default:
        return sortedStudents;
    }

    if (valueA === valueB) {
      return 0;
    }

    if (order === 'asc') {
      return valueA < valueB ? -1 : 1;
    }

    return valueA < valueB ? 1 : -1;
  });

  return sortedStudents;
}

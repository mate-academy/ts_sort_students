export interface Student {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];
}

export enum SortType {
  Name = "Name",
  Surname = "Surname",
  Age = "Age",
  Married = "Married",
  AverageGrade = "AverageGrade",
}

export type SortOrder = "asc" | "desc";

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const sortedStudents = [...students];

  let averageGradeA;
  let averageGradeB;

  sortedStudents.sort((a, b) => {
    let aValue, bValue;

    switch (sortBy) {
      case SortType.Name:
        aValue = a.name;
        bValue = b.name;
        break;

      case SortType.Surname:
        aValue = a.surname;
        bValue = b.surname;
        break;

      case SortType.Age:
        aValue = a.age;
        bValue = b.age;
        break;

      case SortType.Married:
        aValue = a.married;
        bValue = b.married;
        break;

      case SortType.AverageGrade:
        averageGradeA =
          a.grades.reduce((sum, grade) => sum + grade, 0) / a.grades.length;

        averageGradeB =
          b.grades.reduce((sum, grade) => sum + grade, 0) / b.grades.length;

        aValue = averageGradeA;
        bValue = averageGradeB;
        break;

      default:
        throw new Error();
    }

    if (aValue === bValue) {
      return 0;
    }

    if (order === "asc") {
      return aValue < bValue ? -1 : 1;
    }

    return aValue > bValue ? -1 : 1;
  });

  return sortedStudents;
}

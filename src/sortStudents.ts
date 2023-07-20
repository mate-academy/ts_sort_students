
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

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const sortedOrder = order === 'asc';
  const studentsCopy = [...students];

  switch (sortBy) {
    case SortType.Name:
      studentsCopy.sort((a, b) => (sortedOrder
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name)
      ));
      break;

    case SortType.Surname:
      studentsCopy.sort((a, b) => (sortedOrder
        ? a.surname.localeCompare(b.surname)
        : b.surname.localeCompare(a.surname)
      ));
      break;

    case SortType.Age:
      studentsCopy.sort((a, b) => (sortedOrder
        ? a.age - b.age
        : b.age - a.age
      ));
      break;

    case SortType.Married:
      studentsCopy.sort((a, b) => (sortedOrder
        ? Number(a.married) - Number(b.married)
        : Number(b.married) - Number(a.married)
      ));
      break;

    case SortType.AverageGrade:
      studentsCopy.sort((a, b) => {
        const averageGradeA
        = a.grades.reduce((sum, grade) => sum + grade) / a.grades.length;
        const averageGradeB
        = b.grades.reduce((sum, grade) => sum + grade) / b.grades.length;

        return sortedOrder
          ? averageGradeA - averageGradeB
          : averageGradeB - averageGradeA;
      });
      break;

    default:
      return studentsCopy;
  }

  return studentsCopy;
}

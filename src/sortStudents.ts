
export interface Student {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'averageGrade',
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
    case SortType.Surname:
      studentsCopy.sort((a, b) => (sortedOrder
        ? a[sortBy].localeCompare(b[sortBy])
        : b[sortBy].localeCompare(a[sortBy])
      ));
      break;

    case SortType.Age:
    case SortType.Married:
      studentsCopy.sort((a, b) => (sortedOrder
        ? Number(a[sortBy]) - Number(b[sortBy])
        : Number(b[sortBy]) - Number(a[sortBy])
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

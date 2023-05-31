
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
  AverageGrade = 'grades',
}

export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const newStudentsArr: Student[] = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      newStudentsArr.sort((a, b) => {
        return order === 'asc'
          ? a[sortBy].localeCompare(b[sortBy])
          : b[sortBy].localeCompare(a[sortBy]);
      });
      break;

    case SortType.Age:
    case SortType.Married:
      newStudentsArr.sort((a, b) => {
        return order === 'asc'
          ? +a[sortBy] - +b[sortBy]
          : +b[sortBy] - +a[sortBy];
      });
      break;

    case SortType.AverageGrade:
      newStudentsArr.sort((a, b) => {
        const averageStudentA: number = a.grades
          .reduce((sum, grade) => sum + grade) / a.grades.length;
        const averageStudentB: number = b.grades
          .reduce((sum, grade) => sum + grade) / b.grades.length;

        return order === 'asc'
          ? averageStudentA - averageStudentB
          : averageStudentB - averageStudentA;
      });
      break;

    default:
      return newStudentsArr;
  }

  return newStudentsArr;
}

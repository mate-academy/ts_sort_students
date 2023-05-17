export interface Student {
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[],
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
  const sorted: Student[] = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      if (order === 'asc') {
        sorted.sort(
          (a, b) => String(a[sortBy]).localeCompare(String(b[sortBy])),
        );
      } else {
        sorted.sort(
          (a, b) => String(b[sortBy]).localeCompare(String(a[sortBy])),
        );
      }
      break;

    case SortType.Age:
    case SortType.Married:
      if (order === 'asc') {
        sorted.sort((a, b) => Number(a[sortBy]) - Number(b[sortBy]));
      } else {
        sorted.sort((a, b) => Number(b[sortBy]) - Number(a[sortBy]));
      }
      break;

    case SortType.AverageGrade:
      sorted.sort((a, b) => {
        const averageGradeA
          = a.grades.reduce((sum, grade) => sum + grade, 0) / a.grades.length;
        const averageGradeB
          = b.grades.reduce((sum, grade) => sum + grade, 0) / b.grades.length;
        let result;

        if (order === 'asc') {
          result = averageGradeA - averageGradeB;
        } else {
          result = averageGradeB - averageGradeA;
        }

        return result;
      });
      break;

    default:
      break;
  }

  return sorted;
}

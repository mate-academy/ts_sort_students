
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

function studentGrades(student: number[]): number {
  return (
    student.reduce((a, b) => {
      return a + b;
    }, 0) / student.length
  );
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const studentsCopy = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      if (order === 'asc') {
        studentsCopy.sort((a, b) => a[sortBy].localeCompare(b[sortBy]));
      } else {
        studentsCopy.sort((a, b) => b[sortBy].localeCompare(a[sortBy]));
      }
      break;

    case SortType.Age:
    case SortType.Married:
      if (order === 'asc') {
        studentsCopy.sort((a, b) => +a[sortBy] - +b[sortBy]);
      } else {
        studentsCopy.sort((a, b) => +b[sortBy] - +a[sortBy]);
      }
      break;
    case SortType.AverageGrade:
      if (order === 'asc') {
        studentsCopy.sort(
          (a, b) => studentGrades(a.grades) - studentGrades(b.grades),
        );
      } else {
        studentsCopy.sort(
          (a, b) => studentGrades(b.grades) - studentGrades(a.grades),
        );
      }
      break;

    default:
      break;
  }

  return studentsCopy;
}

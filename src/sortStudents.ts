
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

function averageGrade(student: Student): number {
  return student.grades.reduce((a, b) => a + b, 0) / student.grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const result: Student[] = [...students];

  switch (sortBy) {
    case (SortType.Age):
      result.sort((a, b) => {
        return (order === 'asc')
          ? a.age - b.age
          : b.age - a.age;
      });
      break;

    case (SortType.Married):
      result.sort((a, b) => {
        return (order === 'asc')
          ? +a.married - +b.married
          : +b.married - +a.married;
      });
      break;

    case (SortType.Name):
    case (SortType.Surname):
      result.sort((a, b) => {
        return (order === 'asc')
          ? a[sortBy].localeCompare(b[sortBy])
          : b[sortBy].localeCompare(a[sortBy]);
      });
      break;

    case (SortType.AverageGrade):
      result.sort((a, b) => {
        return (order === 'asc')
          ? averageGrade(a) - averageGrade(b)
          : averageGrade(b) - averageGrade(a);
      });
      break;

    default:
      break;
  }

  return result;
}

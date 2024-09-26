
export interface Student {
  // describe Student interface
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];
}

export enum SortType {
  // describe SortType enum
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'grades',
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  // write your function
  const studentsCopy = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      studentsCopy.sort(
        (a, b) => (
          (order === 'asc')
            ? a[sortBy].localeCompare(b[sortBy])
            : b[sortBy].localeCompare(a[sortBy])
        ),
      );
      break;
    case SortType.Age:
    case SortType.Married:
      studentsCopy.sort(
        (a, b) => (
          (order === 'asc')
            ? +a[sortBy] - +b[sortBy]
            : +b[sortBy] - +a[sortBy]
        ),
      );
      break;
    case SortType.AverageGrade:
      studentsCopy.sort(
        (a, b) => {
          const averageGrades = (grades: number[]): number => (
            grades.reduce((x, y) => x + y, 0) / grades.length
          );

          return (order === 'asc')
            ? averageGrades(a.grades) - averageGrades(b.grades)
            : averageGrades(b.grades) - averageGrades(a.grades);
        },
      );
      break;
    default:
      break;
  }

  return studentsCopy;
}

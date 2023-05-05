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

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copyStudents = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      copyStudents.sort((a, b) => (order === 'asc'
        ? a[sortBy].localeCompare(b[sortBy])
        : b[sortBy].localeCompare(a[sortBy])
      ));
      break;
    case SortType.Age:
      copyStudents.sort((a, b) => (order === 'asc'
        ? a.age - b.age : b.age - a.age
      ));
      break;
    case SortType.Married:
      copyStudents.sort((a, b) => (order === 'asc'
        ? +a.married - +b.married
        : +b.married - +a.married
      ));
      break;
    default:
      copyStudents.sort((a, b) => {
        const firstEl = a.grades
          .reduce((sum, item) => sum + item, 0) / a.grades.length;
        const secondEl = b.grades
          .reduce((sum, item) => sum + item, 0) / b.grades.length;

        return order === 'asc' ? firstEl - secondEl : secondEl - firstEl;
      });
  }

  return copyStudents;
}


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

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

function getAverageGrade(students: Student) : number {
  const gradesLength: number = students.grades.length;
  const averageGrade: number = students.grades.reduce(
    (total, num) => total + num, 0,
  );

  return averageGrade / gradesLength;
}

export function sortStudents(students:Student[],
  sortBy: SortType, order:SortOrder):Student[] {
  const copyStudents: Student[] = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return copyStudents.sort((a, b) => a[sortBy].localeCompare(b[sortBy]));

    case SortType.Age:
    case SortType.Married:
      return order === 'asc'
        ? copyStudents.sort((a, b) => +a[sortBy] - +b[sortBy])
        : copyStudents.sort((a, b) => +b[sortBy] - +a[sortBy]);

    case SortType.AverageGrade:
      return copyStudents.sort((a, b) => (
        order === 'desc'
          ? getAverageGrade(b) - getAverageGrade(a)
          : getAverageGrade(a) - getAverageGrade(b)));

    default:
      break;
  }

  return copyStudents;
}


export interface Student {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];
  averageGrade?: number;
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'averageGrade'
}

export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[], sortBy: SortType, order: SortOrder,
): Student[] {
  const studentsWithAverageGrade: Student[] = students.map((student) => {
    const averageGrade: number = student.grades
      .reduce((total, current) => total + current) / student.grades.length;

    return {
      ...student,
      averageGrade,
    };
  });

  let sortingCallback: (a: Student, b: Student) => number;

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      sortingCallback = order === 'asc'
        ? (a, b): number => a[sortBy].localeCompare(b[sortBy])
        : (a, b): number => b[sortBy].localeCompare(a[sortBy]);
      break;

    case SortType.Age:
    case SortType.Married:
    case SortType.AverageGrade:
      sortingCallback = order === 'asc'
        ? (a, b): number => Number(a[sortBy]) - Number(b[sortBy])
        : (a, b): number => Number(b[sortBy]) - Number(a[sortBy]);
      break;

    default:
      throw new Error('Wrong type!');
  }

  return studentsWithAverageGrade.sort(sortingCallback);
}


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

function getAverageGrades(array: Student): number {
  return array.grades
    .reduce((acc: number, el: number) => (acc + el), 0)
    / array.grades.length;
}

export function sortStudents(
  students: Student,
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const newCopyStudents: Student[] = students.slice();

  newCopyStudents.sort((firstStudent, secondStudent) => {
    let first = firstStudent;
    let second = secondStudent;

    if (order === 'desc') {
      first = secondStudent;
      second = firstStudent;
    }

    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return first[sortBy].localeCompare(second[sortBy]);

      case SortType.Age:
        return first[sortBy] - second[sortBy];

      case SortType.Married:
        return Number(first[sortBy]) - Number(second[sortBy]);

      case SortType.AverageGrade:
        return getAverageGrades(first) - getAverageGrades(second);

      default:
        return 0;
    }
  });

  return newCopyStudents;
}

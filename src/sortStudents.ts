
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

function getAverageGrade(student: Student): number {
  return student.grades.reduce(
    (averageGrade: number, grade: number) => {
      return grade + averageGrade;
    },
  ) / student.grades.length;
}

function getSortValue(
  order: SortOrder,
  currentValue: number,
  nextValue: number,
): number {
  return order === 'asc'
    ? currentValue - nextValue
    : nextValue - currentValue;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const studentsCopy: Student[] = [...students].map((item) => ({ ...item }));

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return studentsCopy.sort(
        (currentStudent: Student, nextStudent: Student): number => {
          return order === 'asc'
            ? (currentStudent[sortBy]).localeCompare(nextStudent[sortBy])
            : (nextStudent[sortBy].localeCompare(currentStudent[sortBy]));
        },
      );

    case SortType.Age:
    case SortType.Married:
      return studentsCopy.sort(
        (currentStudent: Student, nextStudent: Student) => {
          return getSortValue(
            order,
            +currentStudent[sortBy],
            +nextStudent[sortBy],
          );
        },
      );

    case SortType.AverageGrade:
      return studentsCopy.sort(
        (currentStudent: Student, nextStudent: Student) => {
          return getSortValue(
            order,
            getAverageGrade(currentStudent),
            getAverageGrade(nextStudent),
          );
        },
      );

    default:
      throw new Error('Invalid sorting parameters');
  }
}

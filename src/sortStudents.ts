
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
  AverageGrade = 'averageGrade'
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

function getAverage(grades: number[]): number {
  return grades.reduce((first, second) => first + second) / grades.length;
}

export function sortStudents(
  students: Student,
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const studentsCopy: Student[] = Object.assign([], students);

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return order === 'asc'
        ? studentsCopy.sort(
          (person1, person2) => person1[sortBy].localeCompare(person2[sortBy]),
        )
        : studentsCopy.sort(
          (person1, person2) => person2[sortBy].localeCompare(person1[sortBy]),
        );

    case SortType.Age:
    case SortType.Married:
      return order === 'asc'
        ? studentsCopy.sort(
          (person1, person2) => +person1[sortBy] - +person2[sortBy],
        )
        : studentsCopy.sort(
          (person1, person2) => +person2[sortBy] - +person1[sortBy],
        );

    case SortType.AverageGrade:
      return order === 'asc'
        ? studentsCopy.sort((person1, person2) => {
          return getAverage(person1.grades) - getAverage(person2.grades);
        })
        : studentsCopy.sort((person1, person2) => {
          return getAverage(person2.grades) - getAverage(person1.grades);
        });

    default:
      return studentsCopy;
  }
}

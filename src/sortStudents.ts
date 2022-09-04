
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
      return order === 'asc'
        ? studentsCopy.sort(
          (person1, person2) => person1.name.localeCompare(person2.name),
        )
        : studentsCopy.sort(
          (person1, person2) => person2.name.localeCompare(person1.name),
        );

    case SortType.Surname:
      return order === 'asc'
        ? studentsCopy.sort(
          (person1, person2) => person1.surname.localeCompare(person2.surname),
        )
        : studentsCopy.sort(
          (person1, person2) => person2.surname.localeCompare(person1.surname),
        );

    case SortType.Age:
      return order === 'asc'
        ? studentsCopy.sort((person1, person2) => person1.age - person2.age)
        : studentsCopy.sort((person1, person2) => person2.age - person1.age);

    case SortType.Married:
      return order === 'asc'
        ? studentsCopy.sort(
          (person1, person2) => Number(person1.married)
          - Number(person2.married),
        )
        : studentsCopy.sort((person1, person2) => {
          return Number(person2.married) - Number(person1.married);
        });

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

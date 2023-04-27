
export interface Student {
  name: string,
  surname: string,
  age: number,
  married: number,
  grades: number[],
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'gradesAverage',
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

export function sortStudents(students: Student[],
  sortBy: SortType, order: SortOrder): Student[] {
  const studentsCopy = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return (order === 'asc')
        ? studentsCopy.sort(
          (personA: Student, personB: Student) => personA[sortBy].localeCompare(
            personB[sortBy],
          ),
        )
        : studentsCopy.sort(
          (personA: Student, personB: Student) => personB[sortBy].localeCompare(
            personA[sortBy],
          ),
        );
    case SortType.Age:
    case SortType.Married:
      return (order === 'asc')
        ? studentsCopy.sort(
          (personA: Student, personB: Student) => personA[sortBy]
           - personB[sortBy],
        )
        : studentsCopy.sort(
          (personA: Student, personB: Student) => personB[sortBy]
           - personA[sortBy],
        );

    case SortType.AverageGrade:
      return (order === 'asc')
        ? studentsCopy.sort(
          (personA: Student, personB: Student) => (personA.grades.reduce(
            (acc: number, value: number) => acc + value, 0,
          ) / personA.grades.length) - (personB.grades.reduce(
            (acc: number, value: number) => acc + value, 0,
          ) / personB.grades.length),
        )
        : studentsCopy.sort(
          (personA: Student, personB: Student) => (personB.grades.reduce(
            (acc: number, value: number) => acc + value, 0,
          ) / personB.grades.length) - (personA.grades.reduce(
            (acc: number, value: number) => acc + value, 0,
          ) / personA.grades.length),
        );

    default:
      return students;
  }
}

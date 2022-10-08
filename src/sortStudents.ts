
export interface Student {
  // describe Student interface
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[],
}

export enum SortType {
  // describe SortType enum
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'grades'
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

// type Collection<T> = {
//   items: T[],
//   limit: number,
//   sum: number,
//   x: number,
// }

function getAverage<T>(numbers: T[]): number {
  return numbers.reduce((sum, x) => sum + x, 0) / numbers.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const sortedStudents = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return sortedStudents.sort((person: Student, nextPerson: Student) => {
        if (order === 'asc') {
          return (person[sortBy]).localeCompare(nextPerson[sortBy]);
        }

        return (nextPerson[sortBy]).localeCompare(person[sortBy]);
      });

    case SortType.Age:
    case SortType.Married:
      return sortedStudents.sort((person: Student, nextPerson: Student) => {
        if (order === 'asc') {
          return Number(person[sortBy]) - Number(nextPerson[sortBy]);
        }

        return Number(nextPerson[sortBy]) - Number(person[sortBy]);
      });

    case SortType.AverageGrade:
      return sortedStudents.sort((person: Student, nextPerson: Student) => {
        if (order === 'asc') {
          return getAverage<number>(person[sortBy])
            - getAverage<number>(nextPerson[sortBy]);
        }

        return getAverage<number>(nextPerson[sortBy])
          - getAverage<number>(person[sortBy]);
      });

    default:

      return sortedStudents;
  }
}

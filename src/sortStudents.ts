
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

function getAverage(numbers: number[]): number {
  return numbers.reduce((sum, x) => sum + x, 0) / numbers.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const sortedStudents = [...students];

  return sortedStudents.sort((person: Student, nextPerson: Student): number => {
    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        if (order === 'asc') {
          return (person[sortBy]).localeCompare(nextPerson[sortBy]);
        }

        return (nextPerson[sortBy]).localeCompare(person[sortBy]);
      case SortType.Age:
      case SortType.Married:
        if (order === 'asc') {
          return Number(person[sortBy]) - Number(nextPerson[sortBy]);
        }

        return Number(nextPerson[sortBy]) - Number(person[sortBy]);
      case SortType.AverageGrade:
        if (order === 'asc') {
          return getAverage(person[sortBy])
            - getAverage(nextPerson[sortBy]);
        }

        return getAverage(nextPerson[sortBy])
          - getAverage(person[sortBy]);
      default:

        return 0;
    }
  });
}

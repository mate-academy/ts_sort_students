
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

// function sortLiteral((a, b) => a.localeCompare(b);

// function sortNumbers((a, b) => a - b;

function findAverageGrade(grades: number[]): number {
  return grades.reduce((sum: number, x: number) => sum + x, 0) / grades.length;
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
      sortedStudents.sort((person: Student, nextPerson: Student) => {
        if (order === 'asc') {
          return findAverageGrade(person[sortBy])
            - findAverageGrade(nextPerson[sortBy]);
        }

        return findAverageGrade(nextPerson[sortBy])
          - findAverageGrade(person[sortBy]);
      });

      break;

    default:

      break;
  }

  return sortedStudents;
}

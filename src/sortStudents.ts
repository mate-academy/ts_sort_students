
export interface Student {
  // describe Student interface
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[],
  middle: number;

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

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  // write your function
  const sortedStudents = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      if (order === 'asc') {
        return sortedStudents
          .sort((person: Student, nextPerson: Student) => (person[sortBy])
            .localeCompare(nextPerson[sortBy]));
      }

      return sortedStudents
        .sort((person: Student, nextPerson: Student) => (nextPerson[sortBy])
          .localeCompare(person[sortBy]));

    case SortType.Age:
    case SortType.Married:
      if (order === 'asc') {
        return sortedStudents
          .sort((person: Student,
            nextPerson: Student) => person[sortBy] - nextPerson[sortBy]);
      }

      return sortedStudents
        .sort((person: Student,
          nextPerson: Student) => nextPerson[sortBy] - person[sortBy]);

    case SortType.AverageGrade:
      sortedStudents.sort((person: Student, nextPerson: Student) => {
        const prevPersonAverage = person[sortBy]
          .reduce((sum: number, x: number) => {
            return sum + x;
          }, 0) / person[sortBy].length;

        const curPersonAverage = nextPerson[sortBy]
          .reduce((sum: number, x: number) => {
            return sum + x;
          }, 0) / nextPerson[sortBy].length;

        if (order === 'asc') {
          return prevPersonAverage - curPersonAverage;
        }

        return curPersonAverage - prevPersonAverage;
      });

      break;

    default:

      break;
  }

  return sortedStudents;
}

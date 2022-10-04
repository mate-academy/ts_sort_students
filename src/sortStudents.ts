export interface Student {
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[],
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'grades',
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const sortedListOfStudents: Student[] = [...students];

  switch (sortBy) {
    case SortType.Name:
      sortedListOfStudents.sort((person: Student, prevPerson: Student) => (
        order === 'asc'
          ? person[sortBy].localeCompare(prevPerson[sortBy])
          : prevPerson[sortBy].localeCompare(person[sortBy])
      ));
      break;

    case SortType.Surname:
      sortedListOfStudents.sort((person: Student, prevPerson: Student) => (
        order === 'asc'
          ? person[sortBy].localeCompare(prevPerson[sortBy])
          : prevPerson[sortBy].localeCompare(person[sortBy])
      ));
      break;

    case SortType.Age:
      sortedListOfStudents.sort((person: Student, prevPerson: Student) => (
        order === 'asc'
          ? person[sortBy] - prevPerson[sortBy]
          : prevPerson[sortBy] - person[sortBy]
      ));
      break;

    case SortType.Married:
      sortedListOfStudents.sort((person: Student, prevPerson: Student) => (
        order === 'asc'
          ? Number(person[sortBy]) - Number(prevPerson[sortBy])
          : Number(prevPerson[sortBy]) - Number(person[sortBy])
      ));
      break;

    case SortType.AverageGrade:
      sortedListOfStudents.sort((person: Student, prevPerson: Student) => {
        const firstAverage = person[sortBy]
          .reduce((prev: number, curr: number) => {
            return prev + curr;
          }, 0) / person[sortBy].length;

        const secondAverage = prevPerson[sortBy]
          .reduce((prev: number, curr: number) => {
            return prev + curr;
          }, 0) / prevPerson[sortBy].length;

        if (order === 'asc') {
          return firstAverage - secondAverage;
        }

        return secondAverage - firstAverage;
      });
      break;

    default:
      break;
  }

  return sortedListOfStudents;
}

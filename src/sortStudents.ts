
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

export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const sortedStudents = [...students];

  switch (sortBy) {
    case SortType.Name:
      sortedStudents.sort((person: Student, prevPerson: Student) => (
        order === 'asc'
          ? person[sortBy].localeCompare(prevPerson[sortBy])
          : prevPerson[sortBy].localeCompare(person[sortBy])
      ));
      break;

    case SortType.Surname:
      sortedStudents.sort((person: Student, prevPerson: Student) => (
        order === 'asc'
          ? person[sortBy].localeCompare(prevPerson[sortBy])
          : prevPerson[sortBy].localeCompare(person[sortBy])
      ));
      break;

    case SortType.Age:
      sortedStudents.sort((person: Student, prevPerson: Student) => (
        order === 'asc'
          ? person[sortBy] - prevPerson[sortBy]
          : prevPerson[sortBy] - person[sortBy]
      ));
      break;

    case SortType.Married:
      sortedStudents.sort((person: Student, prevPerson: Student) => (
        order === 'asc'
          ? Number(person[sortBy]) - Number(prevPerson[sortBy])
          : Number(prevPerson[sortBy]) - Number(person[sortBy])
      ));
      break;

    case SortType.AverageGrade:
      sortedStudents.sort((person: Student, prevPerson: Student) => {
        const firstAverage = person[sortBy]
          .reduce((prev: number, curr: number) => prev + curr, 0)
            / person[sortBy].length;

        const secondAverage = prevPerson[sortBy]
          .reduce((prev: number, curr: number) => prev + curr, 0)
            / prevPerson[sortBy].length;

        return order === 'asc'
          ? firstAverage - secondAverage
          : secondAverage - firstAverage;
      });
      break;

    default:
      break;
  }

  return sortedStudents;
}

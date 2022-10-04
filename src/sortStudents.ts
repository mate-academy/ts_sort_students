
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
  const studentsCopy: Student[] = [...students];

  switch (sortBy) {
    case SortType.Name:
      studentsCopy.sort((curRerson: Student, prevPerson: Student) => (
        order === 'asc'
          ? curRerson[sortBy].localeCompare(prevPerson[sortBy])
          : prevPerson[sortBy].localeCompare(curRerson[sortBy])
      ));
      break;

    case SortType.Surname:
      studentsCopy.sort((curRerson: Student, prevPerson: Student) => (
        order === 'asc'
          ? curRerson[sortBy].localeCompare(prevPerson[sortBy])
          : prevPerson[sortBy].localeCompare(curRerson[sortBy])
      ));
      break;

    case SortType.Age:
      studentsCopy.sort((curRerson: Student, prevPerson: Student) => (
        order === 'asc'
          ? curRerson[sortBy] - prevPerson[sortBy]
          : prevPerson[sortBy] - curRerson[sortBy]
      ));
      break;

    case SortType.Married:
      studentsCopy.sort((curRerson: Student, prevPerson: Student) => (
        order === 'asc'
          ? Number(curRerson[sortBy]) - Number(prevPerson[sortBy])
          : Number(prevPerson[sortBy]) - Number(curRerson[sortBy])
      ));
      break;

    case SortType.AverageGrade:
      studentsCopy.sort((person: Student, prevPerson: Student) => {
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

  return studentsCopy;
}

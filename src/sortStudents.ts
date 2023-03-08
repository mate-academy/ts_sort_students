export interface Student {
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[]
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'grades',
}

export enum SortOrder {
  Ascending = 'asc',
  Descending = 'desc',
}

function getAverage({ grades }: Student): number {
  return grades.reduce((total, grade) => total + grade, 0) / grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copyArrStudents: Student[] = [...students];

  return copyArrStudents.sort((prevPerson, currPerson) => {
    const direction = order === SortOrder.Ascending
      ? 1
      : -1;

    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return (
          prevPerson[sortBy].localeCompare(currPerson[sortBy]))
          * direction;
      case SortType.Age:
      case SortType.Married:
        return (
          Number(prevPerson[sortBy])
          - Number(currPerson[sortBy]))
          * direction;
      case SortType.AverageGrade:
        return (
          getAverage(prevPerson)
          - getAverage(currPerson))
          * direction;
      default:
        throw new Error(`Undefined sort type: ${sortBy}`);
    }
  });
}

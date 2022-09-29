
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
  const sortedStudents: Student[] = [...students];

  switch (sortBy) {
    // Sort by name and surname and return result:
    case SortType.Name:
    case SortType.Surname:
      sortedStudents.sort((prev: Student, curr: Student) => (
        prev[sortBy].localeCompare(curr[sortBy])
      ));

      return order === 'asc' ? sortedStudents : sortedStudents.reverse();

    // Sort by age:
    case SortType.Age:
      sortedStudents.sort((prev: Student, curr: Student) => (
        order === 'asc'
          ? prev[sortBy] - curr[sortBy]
          : curr[sortBy] - prev[sortBy]
      ));
      break;

    // Sort by married:
    case SortType.Married:
      sortedStudents.sort((prev: Student, curr: Student) => (
        order === 'asc'
          ? Number(prev[sortBy]) - Number(curr[sortBy])
          : Number(curr[sortBy]) - Number(prev[sortBy])
      ));
      break;

    // Sort by grades:
    case SortType.AverageGrade:
      sortedStudents.sort((prev: Student, curr: Student) => {
        const prevAverage = prev[sortBy].reduce(
          (accum: number, current: number) => accum + current,
        ) / prev[sortBy].length;

        const currAverage = curr[sortBy].reduce(
          (accum: number, current: number) => accum + current,
        ) / curr[sortBy].length;

        return order === 'asc'
          // ASC:
          ? prevAverage - currAverage
          // DESC:
          : currAverage - prevAverage;
      });
      break;

    default:
      break;
  }

  return sortedStudents;
}

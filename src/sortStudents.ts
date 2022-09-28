
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
  students: Student[], sortBy: SortType, order: SortOrder,
): Student[] {
  const sortedStudents: Student[] = [...students];

  // Sort by name and surname and return result:
  if (sortBy === 'name' || sortBy === 'surname') {
    sortedStudents.sort((prev: Student, curr: Student) => (
      prev[sortBy].localeCompare(curr[sortBy])
    ));

    return order === 'asc' ? sortedStudents : sortedStudents.reverse();
  }

  // Sort by age:
  if (sortBy === 'age') {
    sortedStudents.sort((prev: Student, curr: Student) => (
      order === 'asc'
        ? prev[sortBy] - curr[sortBy]
        : curr[sortBy] - prev[sortBy]
    ));

  // Sort by married:
  } else if (sortBy === 'married') {
    sortedStudents.sort((prev: Student, curr: Student) => (
      order === 'asc'
        ? Number(prev[sortBy]) - Number(curr[sortBy])
        : Number(curr[sortBy]) - Number(prev[sortBy])
    ));

  // Sort by grades:
  } else if (sortBy === 'grades') {
    sortedStudents.sort((prev: Student, curr: Student) => (
      order === 'asc'

        // ASC:
        ? (prev[sortBy].reduce(
          (accum: number, current: number) => accum + current,
        ) / prev[sortBy].length)
        - (curr[sortBy].reduce(
          (accum: number, current: number) => accum + current,
        ) / curr[sortBy].length)

        // DESC:
        : (curr[sortBy].reduce(
          (accum: number, current: number) => accum + current,
        ) / curr[sortBy].length)
          - (prev[sortBy].reduce(
            (accum: number, current: number) => accum + current,
          ) / prev[sortBy].length)
    ));
  }

  return sortedStudents;
}

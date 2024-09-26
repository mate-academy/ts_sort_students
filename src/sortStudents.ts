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
  AverageGrade = 'grades'
}

export type SortOrder = 'asc' | 'desc';

export function getAverageGrade(students: Student) : number {
  return students.grades
    .reduce((acc: number, curr: number) => acc + curr, 0)
    / students.grades.length;
}

export function sortStudents(
  students:Student[],
  sortBy:SortType,
  order:SortOrder,
):Student[] {
  const copyStudent: Student[] = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return copyStudent.sort((prev: Student, curr: Student) => {
        return order === 'asc'
          ? prev[sortBy].localeCompare(curr[sortBy])
          : curr[sortBy].localeCompare(prev[sortBy]);
      });

    case SortType.Age:
    case SortType.Married:
      return copyStudent.sort((prev: Student, curr: Student) => {
        return order === 'asc'
          ? Number(prev[sortBy]) - Number(curr[sortBy])
          : Number(curr[sortBy]) - Number(prev[sortBy]);
      });

    case SortType.AverageGrade:
      return copyStudent.sort((prev: Student, curr: Student) => {
        return order === 'asc'
          ? getAverageGrade(prev) - getAverageGrade(curr)
          : getAverageGrade(curr) - getAverageGrade(prev);
      });

    default:
      throw new Error('Wrong input!');
  }
}

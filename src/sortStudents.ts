
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
  const callback = (acc: number, curt: number): number => acc + curt;

  sortedStudents.sort((studentA: Student, studentB: Student): number => {
    let comparator: number = 0;

    switch (sortBy) {
      case (SortType.Name):
      case (SortType.Surname):
        comparator = studentA[sortBy].localeCompare(studentB[sortBy]);
        break;
      case (SortType.Age):
      case (SortType.Married):
        comparator = +studentA[sortBy] - +studentB[sortBy];
        break;
      case (SortType.AverageGrade):
        comparator
          = (studentA[sortBy].reduce(callback) / studentA[sortBy].length)
            - (studentB[sortBy].reduce(callback) / studentB[sortBy].length);
        break;
      default:
        throw new Error('Invalid data for this sort function!');
    }

    return (order === 'asc') ? comparator : comparator * -1;
  });

  return sortedStudents;
}

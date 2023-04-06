
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
  Married ='married',
  AverageGrade = 'grades',
}

export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const sortedStudents: Student[] = [...students];
  const orderFactor = (order === 'asc') ? 1 : -1;

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return sortedStudents.sort(
        (a: Student, b: Student) => a[sortBy].localeCompare(b[sortBy]),
      );

    case SortType.Age:
      return sortedStudents.sort(
        (a: Student, b: Student) => orderFactor * (a.age - b.age),
      );

    case SortType.Married:
      sortedStudents.sort((a: Student, b: Student) => (
        a.married > b.married ? orderFactor : orderFactor * -1
      ));
      break;

    case SortType.AverageGrade:
      sortedStudents.sort((a: Student, b: Student) => {
        const avgA = a.grades.reduce((acc, curr) => acc + curr, 0)
          / a.grades.length;
        const avgB = b.grades.reduce((acc, curr) => acc + curr, 0)
          / b.grades.length;

        return orderFactor * (avgA - avgB);
      });
      break;

    default:
      throw new Error('error');
  }

  return sortedStudents;
}

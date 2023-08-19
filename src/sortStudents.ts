
export interface Student {
  name:string,
  surname: string,
  age:number,
  married:boolean,
  grades:number[],
}

export enum SortType {
  Name,
  Surname,
  Age,
  Married,
  AverageGrade,
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const sortedStudents: Student[] = [...students];
  function calculateAverage(student: Student): number {
    return student.grades.reduce((a, b) => a + b)
      / student.grades.length;
  }

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return sortedStudents.sort((a, b) => {
        return order === 'asc'
          ? a[sortBy].localeCompare(b[sortBy])
          : b[sortBy].localeCompare(a[sortBy]);
      });

    case SortType.Age:
    case SortType.Married:
      return sortedStudents.sort((a, b) => {
        return order === 'asc'
          ? +a[sortBy] - (+b[sortBy])
          : +b[sortBy] - (+a[sortBy]);
      });

    case SortType.AverageGrade:
      return sortedStudents.sort((a, b) => {
        return order === 'asc'
          ? calculateAverage(a) - calculateAverage(b)
          : calculateAverage(b) - calculateAverage(a);
      });

    default:
      return sortedStudents;
  }
};

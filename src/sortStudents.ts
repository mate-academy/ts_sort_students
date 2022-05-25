
export interface Student {
  // describe Student interface
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[],
}

export enum SortType {
  // describe SortType enum
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'grades',
}

// create SortOrder type
export enum SortOrder {
  asc = 'asc',
  desc = 'desc',
}

export function calculateAverage(student: number[]): number {
  return student
    .reduce((prev: number, curr: number) => (prev + curr), 0) / student.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  // write your function
  const isSortedStudents: Student[] = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return isSortedStudents.sort((firstSt: Student, secondSt: Student) => {
        return order === SortOrder.asc
          ? firstSt[sortBy].localeCompare(secondSt[sortBy])
          : secondSt[sortBy].localeCompare(firstSt[sortBy]);
      });

    case SortType.Age:
    case SortType.Married:
      return isSortedStudents.sort((firstSt: Student, secondSt: Student) => {
        return order === SortOrder.asc
          ? +firstSt[sortBy] - +secondSt[sortBy]
          : +secondSt[sortBy] - +firstSt[sortBy];
      });

    case SortType.AverageGrade:
      return isSortedStudents.sort((firstSt: Student, secondSt: Student) => {
        return order === SortOrder.asc
          ? calculateAverage(firstSt[sortBy])
            - calculateAverage(secondSt[sortBy])
          : calculateAverage(secondSt[sortBy])
            - calculateAverage(firstSt[sortBy]);
      });

    default:
      return [];
  }
}

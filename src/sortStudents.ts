
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

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

const calculateAverageGrades = (grades: number[]): number => {
  return grades.reduce((acc, num) => acc + num, 0) / grades.length;
};

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  // write your function
  const studentsToSort = [...students];

  return studentsToSort.sort((a, b) => {
    switch (sortBy) {
      case SortType.Married:
      case SortType.Age:
        return order === 'desc'
          ? +b[sortBy] - +a[sortBy]
          : +a[sortBy] - +b[sortBy];

      case SortType.AverageGrade:
        return order === 'desc'
          ? calculateAverageGrades(b[sortBy])
            - calculateAverageGrades(a[sortBy])
          : calculateAverageGrades(a[sortBy])
            - calculateAverageGrades(b[sortBy]);

      case SortType.Name:
      case SortType.Surname:
        if (order === 'desc') {
          return b[sortBy] < a[sortBy] ? -1 : 1;
        }

        return a[sortBy] < b[sortBy] ? -1 : 1;

      default: throw new Error('Sorting parameter does not exist');
    }
  });
}

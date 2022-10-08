
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
  AverageGrade = 'grades'
}

export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copyStudents: Student[] = [...students];

  const sortArrStudents: Student[] = copyStudents
    .sort((prev: Student, current: Student): number => {
      switch (sortBy) {
        case SortType.Name:
        case SortType.Surname:
          if (order === 'desc') {
            return current[sortBy].localeCompare(prev[sortBy]);
          }

          return prev[sortBy].localeCompare(current[sortBy]);
        case SortType.Age:
        case SortType.Married:
          if (order === 'desc') {
            return +current[sortBy] - (+prev[sortBy]);
          }

          return +prev[sortBy] - (+current[sortBy]);

        case SortType.AverageGrade: {
          const sumGradesPrev: number = prev[sortBy]
            .reduce((prevValue, currentValue) => {
              return prevValue + currentValue;
            }, 0)
              / prev[sortBy].length;
          const sumGradesCurrent: number = current[sortBy]
            .reduce((prevValue, currentValue) => {
              return prevValue + currentValue;
            }, 0)
              / current[sortBy].length;

          if (order === 'desc') {
            return sumGradesCurrent - sumGradesPrev;
          }

          return sumGradesPrev - sumGradesCurrent;
        }
        default:
          return 0;
      }
    });

  return sortArrStudents;
}

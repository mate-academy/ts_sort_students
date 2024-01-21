
export interface Student {
  name: string
  surname: string
  age: number
  married: boolean
  grades: number[]
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'AverageGrade'
}

export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copyStudents: Student[] = [...students];

  switch (sortBy) {
    case SortType.Name:
      copyStudents.sort((a, b) => {
        const valueA = a[SortType.Name];
        const valueB = b[SortType.Name];

        if (order === 'asc') {
          if (valueA < valueB) {
            return -1;
          }

          if (valueA > valueB) {
            return 1;
          }
        } else {
          if (valueA < valueB) {
            return 1;
          }

          if (valueA > valueB) {
            return -1;
          }
        }

        return 0;
      });
      break;
    case SortType.Surname:
      copyStudents.sort((a, b) => {
        const valueA = a[SortType.Surname];
        const valueB = b[SortType.Surname];

        if (order === 'asc') {
          if (valueA < valueB) {
            return -1;
          }

          if (valueA > valueB) {
            return 1;
          }
        } else {
          if (valueA < valueB) {
            return 1;
          }

          if (valueA > valueB) {
            return -1;
          }
        }

        return 0;
      });
      break;
    case SortType.Age:
      copyStudents.sort((a, b) => {
        const valueA = a[SortType.Age];
        const valueB = b[SortType.Age];

        if (order === 'asc') {
          return valueA - valueB;
        }

        return valueB - valueA;
      });
      break;
    case SortType.Married:
      copyStudents.sort((a, b) => {
        const valueA = a[SortType.Married];
        const valueB = b[SortType.Married];

        if (order === 'asc') {
          if (valueA && !valueB) {
            return 1;
          }

          if (!valueA && valueB) {
            return -1;
          }
        } else {
          if (valueA && !valueB) {
            return -1;
          }

          if (!valueA && valueB) {
            return 1;
          }
        }

        return 0;
      });
      break;
    case SortType.AverageGrade:
      copyStudents.sort((a, b) => {
        const valueA = a.grades.reduce((accumulator, currentValue) => {
          return accumulator + currentValue;
        }, 0) / a.grades.length;
        const valueB = b.grades.reduce((accumulator, currentValue) => {
          return accumulator + currentValue;
        }, 0) / b.grades.length;

        if (order === 'asc') {
          return valueA - valueB;
        }

        return valueB - valueA;
      });
      break;

    default:
      break;
  }

  return copyStudents;
}

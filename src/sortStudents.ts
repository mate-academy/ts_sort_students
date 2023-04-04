
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
  AverageGrade = 'averagegrade',
}

export type SortOrder = 'asc' | 'desc';

function getAverageGrades(grades: number[]): number {
  return grades.reduce((sum, el) => sum + el, 0) / grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const sortedStudents = [...students];

  sortedStudents.sort((a, b) => {
    let aValue;
    let bValue;
    let result;

    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        aValue = a[sortBy];
        bValue = b[sortBy];
        break;

      case SortType.Age:
        aValue = a.age;
        bValue = b.age;
        break;

      case SortType.Married:
        aValue = a.married;
        bValue = b.married;
        break;

      case SortType.AverageGrade:
        aValue = getAverageGrades(a.grades);
        bValue = getAverageGrades(b.grades);
        break;

      default:
        throw new Error(`Invalid SortType '${sortBy}'`);
    }

    if (aValue === bValue) {
      return 0;
    }

    if (typeof aValue === 'string') {
      result = aValue.localeCompare(bValue);
    } else {
      result = aValue > bValue ? 1 : -1;
    }

    return order === 'asc' ? result : -result;
  });

  return sortedStudents;
}

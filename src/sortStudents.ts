
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

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const sortedStudents = [...students];

  sortedStudents.sort((a, b) => {
    let aValue;
    let bValue;

    if (sortBy === SortType.AverageGrade) {
      const aGradeSum = a[sortBy].reduce((sum, grade) => sum + grade, 0);
      const bGradeSum = b[sortBy].reduce((sum, grade) => sum + grade, 0);
      const aGradeAvg = aGradeSum / a[sortBy].length;
      const bGradeAvg = bGradeSum / b[sortBy].length;

      aValue = aGradeAvg;
      bValue = bGradeAvg;
    } else {
      aValue = a[sortBy];
      bValue = b[sortBy];
    }

    if (aValue === bValue) {
      return 0;
    }

    if (typeof aValue === 'string' && typeof bValue === 'string') {
      return order === 'asc'
        ? aValue.localeCompare(bValue)
        : bValue.localeCompare(aValue);
    }

    if (order === 'asc') {
      return aValue > bValue ? 1 : -1;
    }

    return aValue < bValue ? 1 : -1;
  });

  return sortedStudents;
}

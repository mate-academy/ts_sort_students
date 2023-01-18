
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
): Student[] | string {
  function getAvarageGrade(array: number[]): number {
    return array.reduce((a, b) => a + b, 0) / array.length;
  }

  const studentsClone = [...students].sort((obj1, obj2) => {
    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return order === 'asc'
          ? obj1[sortBy].localeCompare(obj2[sortBy])
          : obj2[sortBy].localeCompare(obj1[sortBy]);
      case SortType.Age:
      case SortType.Married:
        return order === 'asc'
          ? +obj1[sortBy] - +obj2[sortBy]
          : +obj2[sortBy] - +obj1[sortBy];
      case SortType.AverageGrade:
        return order === 'asc'
          ? getAvarageGrade(obj1.grades) - getAvarageGrade(obj2.grades)
          : getAvarageGrade(obj2.grades) - getAvarageGrade(obj1.grades);
      default:
        throw new Error('Unexpected sort type');
    }
  });

  return studentsClone;
}

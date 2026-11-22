
export interface Student {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'averageGrade'
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

const getAverage = (grades: number[]): number => {
  return grades.reduce((sum, grade) => sum + grade, 0) / grades.length;
};

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const sortedStudents = [...students];
  const direction = order === 'asc' ? 1 : -1;

  sortedStudents.sort((a, b) => {
    let aValue: string | number;
    let bValue: string | number;

    switch (sortBy) {
      case SortType.Name:
        aValue = a.name;
        bValue = b.name;
        break;
      case SortType.Surname:
        aValue = a.surname;
        bValue = b.surname;
        break;
      case SortType.Age:
        aValue = a.age;
        bValue = b.age;
        break;
      case SortType.Married:
        aValue = a.married ? 1 : 0;
        bValue = b.married ? 1 : 0;
        break;
      case SortType.AverageGrade:
        aValue = getAverage(a.grades);
        bValue = getAverage(b.grades);
        break;

      default:
        return 0;
    }

    if (typeof aValue === 'string' && typeof bValue === 'string') {
      return aValue.localeCompare(bValue) * direction;
    }

    return (Number(aValue) - Number(bValue)) * direction;
  });

  return sortedStudents;
}

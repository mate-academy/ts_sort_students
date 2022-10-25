
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

export function sortStudents(students: Student[],
  sortBy: SortType, order: SortOrder):Student[] {
  const copy: Student[] = [...students];

  copy.sort((a, b) => {
    if (sortBy === SortType.AverageGrade) {
      const aSum = a.grades
        .reduce((acc, item) => acc + item, 0) / a.grades.length;
      const bSum = b.grades
        .reduce((acc, item) => acc + item, 0) / b.grades.length;

      return order === 'desc' ? bSum - aSum : aSum - bSum;
    }

    if (sortBy === SortType.Age || sortBy === SortType.Married) {
      return order === 'desc' ? Number(b[sortBy]) - Number(a[sortBy])
        : Number(a[sortBy]) - Number(b[sortBy]);
    }

    // if (sortBy === SortType.Married) {
    //   return order === 'desc' ? Number(b.married) - Number(a.married)
    //     : Number(a.married) - Number(b.married);
    // }

    return order === 'desc' ? b[sortBy].localeCompare(a[sortBy])
      : a[sortBy].localeCompare(b[sortBy]);
  });

  return copy;
}

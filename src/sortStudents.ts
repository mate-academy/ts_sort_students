
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
// eslint-disable-next-line
export function sortStudents(students: Student[], sortBy: SortType, order: SortOrder): Student[] {
  const copyStudents: Student[] = JSON.parse(JSON.stringify(students));

  copyStudents.sort((a, b) => {
    const sortA = order === 'asc' ? a : b;
    const sortB = order === 'asc' ? b : a;

    if (sortBy === SortType.Age) {
      return sortA.age - sortB.age;
    }

    if (sortBy === SortType.AverageGrade) {
      // eslint-disable-next-line
      const averageA = sortA.grades.reduce((sum, x) => sum + x, 0) / sortA.grades.length;
      // eslint-disable-next-line
      const averageB = sortB.grades.reduce((sum, x) => sum + x, 0) / sortB.grades.length;

      return averageA - averageB;
    }

    if (sortBy === SortType.Married) {
      // eslint-disable-next-line
      return (sortA.married === sortB.married) ? 0 : sortB.married ? -1 : 1;
    }

    return sortA[sortBy].localeCompare(sortB[sortBy]);
  });

  return copyStudents;
}

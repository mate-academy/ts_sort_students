
export type Student = {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: Array<number>;
};

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'grades',
}

export type SortOrder = 'asc' | 'desc';

function averageGrade(grades: number[]): number {
  return grades.reduce((a, b) => a + b) / grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copyStudents = [...students];

  if (sortBy === 'name' || sortBy === 'surname') {
    if (order === 'asc') {
      copyStudents.sort((a, b) => {
        return a[sortBy].localeCompare(b[sortBy]);
      });
    } else if (order === 'desc') {
      copyStudents.sort((a, b) => {
        return b[sortBy].localeCompare(a[sortBy]);
      });
    }
  }

  if (sortBy === 'married' || sortBy === 'age') {
    if (order === 'asc') {
      copyStudents.sort((a, b) => +a[sortBy] - +b[sortBy]);
    } else if (order === 'desc') {
      copyStudents.sort((a, b) => +b[sortBy] - +a[sortBy]);
    }
  }

  if (sortBy === 'grades') {
    if (order === 'asc') {
      copyStudents.sort((a, b) => {
        return averageGrade(a[sortBy]) - averageGrade(b[sortBy]);
      });
    } else if (order === 'desc') {
      copyStudents.sort((a, b) => {
        return averageGrade(b[sortBy]) - averageGrade(a[sortBy]);
      });
    }
  }

  return copyStudents;
}

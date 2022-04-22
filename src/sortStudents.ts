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
  AverageGrade = 'grades',
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copy: Student[] = [...students];

  function averageMarks(std: Student): number {
    return std.grades.reduce((sum, b) => sum + b, 0) / std.grades.length;
  }

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return copy.sort((std1: Student, std2: Student) => (order === 'asc'
        ? std1[sortBy].localeCompare(std2[sortBy])
        : std2[sortBy].localeCompare(std1[sortBy])
      ));

    case SortType.Age: {
      return copy.sort((std1: Student, std2: Student) => (order === 'asc'
        ? std1.age - std2.age
        : std2.age - std1.age
      ));
    }

    case SortType.AverageGrade: {
      return copy.sort((std1: Student, std2: Student) => (order === 'asc'
        ? averageMarks(std1) - averageMarks(std2)
        : averageMarks(std2) - averageMarks(std1)
      ));
    }

    case SortType.Married: {
      return copy.sort((std1: Student, std2: Student) => (order === 'asc'
        ? +std1.married - +std2.married
        : +std2.married - +std1.married
      ));
    }

    default: {
      return copy;
    }
  }
}

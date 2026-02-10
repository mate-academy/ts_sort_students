
export interface Student {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];
}

export enum SortType {
  Name = 'NAME',
  Surname = 'SURNAME',
  Age = 'AGE',
  Married = 'MARRIED',
  AverageGrade = 'AVERAGE_GRADE',
}

export type SortOrder = 'asc' | 'desc';

function getAverage(grades: number[]): number {
  if (grades.length === 0) {
    return 0;
  }

  const sum = grades.reduce((acc, curr) => acc + curr, 0);

  return sum / grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const sortByToKey: Partial<Record<SortType, keyof Student>> = {
    [SortType.Name]: 'name',
    [SortType.Surname]: 'surname',
    [SortType.Age]: 'age',
    [SortType.Married]: 'married',
  };

  const indexedStudents = students.map((student, index) => ({
    student, index,
  }));

  indexedStudents.sort((a, b) => {
    let valA: string | number | boolean;
    let valB: string | number | boolean;

    if (sortBy === SortType.AverageGrade) {
      valA = getAverage(a.student.grades);
      valB = getAverage(b.student.grades);
    } else {
      const key = sortByToKey[sortBy];

      if (!key) {
        return 0;
      }

      const rawA = a.student[key];
      const rawB = b.student[key];

      if (Array.isArray(rawA) || Array.isArray(rawB)) {
        return 0;
      }

      valA = rawA;
      valB = rawB;
    }

    if (valA === valB) {
      return a.index - b.index;
    }

    const comparison = valA > valB ? 1 : -1;

    return order === 'asc' ? comparison : -comparison;
  });

  return indexedStudents.map((item) => item.student);
}

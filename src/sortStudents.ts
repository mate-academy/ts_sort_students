
export interface Student {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];
}

export enum SortType {
  AverageGrade,
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  Grades = 'grades',
}

export type SortOrder = 'asc' | 'dsc';

function getAverageGrade(student: Student): number {
  return student.grades
    .reduce((a, b) => a + b) / student.grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  return [...students]
    .sort((firstStudent: Student, secondStudent: Student) => {
      const firstStKey = firstStudent[sortBy];
      const secondStKey = secondStudent[sortBy];

      if (sortBy === SortType.AverageGrade) {
        return order === 'asc'
          ? getAverageGrade(firstStudent) - getAverageGrade(secondStudent)
          : getAverageGrade(secondStudent) - getAverageGrade(firstStudent);
      }

      if (typeof firstStKey === 'string' && typeof secondStKey === 'string') {
        return order === 'asc'
          ? firstStKey.localeCompare(secondStKey)
          : secondStKey.localeCompare(firstStKey);
      }

      if (typeof firstStKey === 'number' && typeof secondStKey === 'number') {
        return order === 'asc'
          ? firstStKey - secondStKey
          : secondStKey - firstStKey;
      }

      if (typeof firstStKey === 'boolean' && typeof secondStKey === 'boolean') {
        return order === 'asc'
          ? Number(firstStKey) - Number(secondStKey)
          : Number(secondStKey) - Number(firstStKey);
      }

      return 0;
    });
}

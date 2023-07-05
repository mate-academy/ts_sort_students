export interface Student {
  name: string;
  surname: string;
  age: number
  married: boolean;
  grades: number[];
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'grades'
}

export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[], sortBy: SortType, order: SortOrder,
): Student[] {
  const studArr = [...students];

  const sorter = studArr.sort((a: Student, b: Student) => {
    if (sortBy === SortType.AverageGrade) {
      const avgA = a.grades
        .reduce((sum, val) => sum + val, 0)
        / a.grades.length;

      const avgB = b.grades
        .reduce((sum, val) => sum + val, 0)
        / b.grades.length;

      return order === 'asc' ? avgA - avgB : avgB - avgA;
    }

    const [valA, valB] = [a[sortBy], b[sortBy]];

    if (typeof valA === 'number' && typeof valB === 'number') {
      return order === 'asc' ? valA - valB : valB - valA;
    }

    if (typeof valA === 'string' && typeof valB === 'string') {
      return order === 'asc'
        ? valA.localeCompare(valB) : valB.localeCompare(valA);
    }

    if (typeof valA === 'boolean' && typeof valB === 'boolean') {
      return order === 'asc'
        ? Number(valA) - Number(valB) : Number(valB) - Number(valA);
    }

    return 0;
  });

  return sorter;
}

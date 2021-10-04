// describe Student type
interface Student {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];
  average?: number;
}
// create and export SortType enum
export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'average',
}
// create SortOrder type
type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[], sortBy: SortType, order: SortOrder,
): Student[] {
  if (!students.length) {
    return [];
  }

  const studentsCopy: Student[] = students
    .map((student) => {
      const average = student.grades
        .reduce((sum, grade) => sum + grade, 0) / student.grades.length;

      return {
        ...student,
        average,
      };
    });

  studentsCopy.sort((a: Student, b: Student): number => {
    if (typeof a[sortBy] === 'string') {
      return order === 'asc'
        ? a[sortBy].localeCompare(b[sortBy])
        : b[sortBy].localeCompare(a[sortBy]);
    }

    if (typeof a[sortBy] === 'number' || typeof a[sortBy] === 'boolean') {
      return order === 'asc'
        ? a[sortBy] - b[sortBy]
        : b[sortBy] - a[sortBy];
    }

    return 0;
  });

  return studentsCopy;
}

export interface Student {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[],
  averageGrades: number,
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'averageGrades',
}

export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const studentsData = students.map((student: Student) => {
    const averageGrades = student.grades
      .reduce((a: number, b: number): number => a + b) / student.grades.length;

    return {
      ...student,
      averageGrades,
    };
  });

  studentsData.sort((a: Student, b: Student): number => {
    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return (order === 'asc')
          ? a[sortBy].localeCompare(b[sortBy])
          : b[sortBy].localeCompare(a[sortBy]);
      case SortType.Age:
      case SortType.Married:
      case SortType.AverageGrade:
        return (order === 'asc')
          ? Number(a[sortBy]) - Number(b[sortBy])
          : Number(b[sortBy]) - Number(a[sortBy]);
      default:
        return 0;
    }
  });

  return studentsData;
}

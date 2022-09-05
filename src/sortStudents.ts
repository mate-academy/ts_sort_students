export interface Student {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];
  averageGrade: number;
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'averageGrade'
}

export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const sortedStudens = [...students];

  sortedStudens.forEach((student) => {
    const changedStudent = student;

    changedStudent.averageGrade = student.grades
      .reduce((sum, grade) => sum + grade) / student.grades.length;
  });

  sortedStudens.sort((firstStudent: Student, secondStudent: Student) => {
    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return order === 'asc'
          ? firstStudent[sortBy].localeCompare(secondStudent[sortBy])
          : secondStudent[sortBy].localeCompare(firstStudent[sortBy]);

      case SortType.Age:
      case SortType.Married:
      case SortType.AverageGrade:
        return order === 'asc'
          ? Number(firstStudent[sortBy]) - Number(secondStudent[sortBy])
          : Number(secondStudent[sortBy]) - Number(firstStudent[sortBy]);

      default:
        return 0;
    }
  });

  return sortedStudens;
}

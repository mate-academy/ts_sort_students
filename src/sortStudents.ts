
export interface Student {
  name: string;
  surname: string;
  age: number;
  married: number;
  grades: number[];
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'avarageGrade',
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

export function sortStudents(students: Student[],
  sortBy: SortType, order: SortOrder): Student[] {
  const copyStudents = students.map((student: Student) => ({ ...student }));

  return copyStudents.sort((student1, student2): number => {
    const firstStudentMarks = student1.grades.reduce((sum: number,
      grade: number) => sum + grade, 0) / student1.grades.length;
    const secondStudentMarks = student2.grades.reduce((sum: number,
      grade: number) => sum + grade, 0) / student2.grades.length;

    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return order === 'asc'
          ? student1[sortBy].localeCompare(student2[sortBy])
          : student2[sortBy].localeCompare(student1[sortBy]);

      case SortType.Married:
      case SortType.Age:
        return order === 'desc'
          ? student2[sortBy] - student1[sortBy]
          : student1[sortBy] - student2[sortBy];

      case SortType.AverageGrade:
        return order === 'asc'
          ? firstStudentMarks - secondStudentMarks
          : secondStudentMarks - firstStudentMarks;

      default:
        return 0;
    }
  });
}

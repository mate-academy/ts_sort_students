export interface Student {
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[],
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'grades',
}

export type SortOrder = 'asc' | 'desc';

function getAveregeGrade(student: Student): number {
  return student.grades
    .reduce((sum, grade) => sum + grade, 0) / student.grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const sortedStudents: Student[] = [...students];

  sortedStudents.sort((studentA, studentB) => {
    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return order === 'desc'
          ? studentB[sortBy].localeCompare(studentA[sortBy])
          : studentA[sortBy].localeCompare(studentB[sortBy]);

      case SortType.Age:
      case SortType.Married:
        return order === 'desc'
          ? Number(studentB[sortBy]) - Number(studentA[sortBy])
          : Number(studentA[sortBy]) - Number(studentB[sortBy]);

      case SortType.AverageGrade:
        return order === 'desc'
          ? getAveregeGrade(studentB) - getAveregeGrade(studentA)
          : getAveregeGrade(studentA) - getAveregeGrade(studentB);
      default:
        return 0;
    }
  });

  return sortedStudents;
}

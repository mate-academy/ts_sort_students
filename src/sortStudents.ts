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

export type SortOrder = 'asc' | 'desc';

function getAveregeGrade(studentGrades: number[]): number {
  const sumOfGrades = studentGrades.reduce((sum: number, grade: number) => {
    return sum + grade;
  }, 0);

  return sumOfGrades / studentGrades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copyStudents = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return copyStudents.sort((student1, student2) => {
        return order === 'asc'
          ? student1[sortBy].localeCompare(student2[sortBy])
          : student2[sortBy].localeCompare(student1[sortBy]);
      });

    case SortType.Age:
    case SortType.Married:
      return copyStudents.sort((student1, student2) => {
        return order === 'asc'
          ? Number(student1[sortBy]) - Number(student2[sortBy])
          : Number(student2[sortBy]) - Number(student1[sortBy]);
      });

    case SortType.AverageGrade:
      return copyStudents
        .sort((student1, student2) => {
          return order === 'asc'
            ? getAveregeGrade(student1.grades)
              - getAveregeGrade(student2.grades)
            : getAveregeGrade(student2.grades)
              - getAveregeGrade(student1.grades);
        });

    default:
      return copyStudents;
  }
}

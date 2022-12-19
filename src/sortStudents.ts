
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
  AverageGrade = 'averageGrade',
}

export type SortOrder = 'asc' | 'desc';

function countAverageGrade(studentGrades: number[]): number {
  const sumGrades = studentGrades.reduce((sum: number, grade: number) => {
    return sum + grade;
  }, 0);

  return sumGrades / studentGrades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const studentsCopy = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return studentsCopy.sort((student1, student2) => {
        return order === 'asc'
          ? student1[sortBy].localeCompare(student2[sortBy])
          : student2[sortBy].localeCompare(student1[sortBy]);
      });

    case SortType.Age:
    case SortType.Married:
      return studentsCopy.sort((student1, student2) => {
        return order === 'asc'
          ? Number(student1[sortBy]) - Number(student2[sortBy])
          : Number(student2[sortBy]) - Number(student1[sortBy]);
      });

    case SortType.AverageGrade:
      return studentsCopy.sort((student1, student2) => {
        return order === 'asc'
          ? countAverageGrade(student1.grades)
            - countAverageGrade(student2.grades)
          : countAverageGrade(student2.grades)
            - countAverageGrade(student1.grades);
      });

    default:
      return studentsCopy;
  }
}


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

export function sortStudents(
  students: [], sortBy: SortType, order: SortOrder,
): Student[] {
  function getAverageGrade(pupils: Student): number {
    return pupils.grades.reduce((sum: number, curr: number) => sum + curr)
    / pupils.grades.length;
  }

  const studentsCopy: Student[] = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return studentsCopy
        .sort((student1: Student, student2: Student): number => {
          return (order === 'asc')
            ? student1[sortBy].localeCompare(student2[sortBy])
            : student2[sortBy].localeCompare(student1[sortBy]);
        });

    case SortType.Age:
    case SortType.Married:
      return studentsCopy
        .sort((student1: Student, student2: Student): number => {
          return (order === 'asc')
            ? Number(student1[sortBy]) - Number(student2[sortBy])
            : Number(student2[sortBy]) - Number(student1[sortBy]);
        });

    case SortType.AverageGrade:
      return studentsCopy
        .sort((student1: Student, student2: Student): number => {
          if (order === 'asc') {
            return getAverageGrade(student1) - getAverageGrade(student2);
          }

          return getAverageGrade(student2) - getAverageGrade(student1);
        });

    default:
      throw new Error('Invalid sort type');
  }
}

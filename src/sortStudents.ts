
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

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

function averageGrade(gradesArr: number[]): number {
  return gradesArr.reduce((sum: number, current: number) => sum + current, 0)
  / gradesArr.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const sortedStudents: Student[] = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return sortedStudents.sort((student1: Student, student2: Student) => {
        return order === 'asc'
          ? student1[sortBy].localeCompare(student2[sortBy])
          : student2[sortBy].localeCompare(student1[sortBy]);
      });

    case SortType.Age:
      return sortedStudents.sort((student1: Student, student2: Student) => {
        return order === 'asc'
          ? student1[sortBy] - student2[sortBy]
          : student2[sortBy] - student1[sortBy];
      });

    case SortType.Married:
      return sortedStudents.sort((student1: Student, student2: Student) => {
        return order === 'asc'
          ? +student1[sortBy] - +student2[sortBy]
          : +student2[sortBy] - +student1[sortBy];
      });

    case SortType.AverageGrade:
      return sortedStudents.sort((student1: Student, student2: Student) => {
        return order === 'asc'
          ? averageGrade(student1[sortBy]) - averageGrade(student2[sortBy])
          : averageGrade(student2[sortBy]) - averageGrade(student1[sortBy]);
      });
    default:
      return sortedStudents;
  }
}

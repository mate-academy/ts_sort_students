
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

function calcAvgGrades(arrayGrades: number[]): number {
  return arrayGrades
    .reduce((acc, num) => acc + num, 0) / arrayGrades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copyStudents: Student[] = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      copyStudents.sort((student1: Student, student2: Student) => {
        return order === 'asc'
          ? student1[sortBy].localeCompare(student2[sortBy])
          : student2[sortBy].localeCompare(student1[sortBy]);
      });
      break;

    case SortType.Age:
    case SortType.Married:
      copyStudents.sort((student1: Student, student2: Student) => {
        return order === 'asc'
          ? (+student1[sortBy]) - (+student2[sortBy])
          : (+student2[sortBy]) - (+student1[sortBy]);
      });
      break;

    case SortType.AverageGrade:
      copyStudents.sort((student1: Student, student2: Student) => {
        return order === 'asc'
          ? calcAvgGrades(student1.grades) - calcAvgGrades(student2.grades)
          : calcAvgGrades(student2.grades) - calcAvgGrades(student1.grades);
      });
      break;

    default:
      return [];
  }

  return copyStudents;
}


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
  AverageGrade = 'grades'
}

function getAvgGrade(grades: number[]): number {
  return grades.reduce((sum: number, el: number) => sum + el) / grades.length;
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const cloneStudents: Student[] = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return cloneStudents.sort((st1:Student, st2:Student) => {
        return order === 'asc'
          ? st1[sortBy].localeCompare(st2[sortBy])
          : st2[sortBy].localeCompare(st1[sortBy]);
      });

    case SortType.Age:
    case SortType.Married:
      return cloneStudents.sort((st1:Student, st2:Student) => {
        return order === 'asc'
          ? Number(st1[sortBy]) - Number(st2[sortBy])
          : Number(st2[sortBy]) - Number(st1[sortBy]);
      });

    case SortType.AverageGrade:
      return cloneStudents.sort((st1:Student, st2:Student) => {
        return order === 'asc'
          ? getAvgGrade(st1.grades) - getAvgGrade(st2.grades)
          : getAvgGrade(st2.grades) - getAvgGrade(st1.grades);
      });

    default:
      throw new Error('Wrong sort type');
  }
}

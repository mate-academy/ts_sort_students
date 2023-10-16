
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

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

function averageGrade(grades: number[]): number {
  return grades.reduce((acc, grade) => acc + grade) / grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const studentsCopy = [...students];

  studentsCopy.sort((st1: Student, st2: Student) => {
    switch (sortBy) {
      case 'name':
      case 'surname':
        return order === 'asc'
          ? st1[sortBy].localeCompare(st2[sortBy])
          : st2[sortBy].localeCompare(st1[sortBy]);
      case 'grades':
        return order === 'asc'
          ? averageGrade(st1.grades) - averageGrade(st2.grades)
          : averageGrade(st2.grades) - averageGrade(st1.grades);
      default:
        return order === 'asc'
          ? st1[sortBy] - st2[sortBy]
          : st2[sortBy] - st1[sortBy];
    }
  });

  return studentsCopy;
}

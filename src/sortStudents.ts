
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

function getAverageGrade(student: Student): number {
  return student.grades.reduce((acc, curr) => acc + curr, 0)
  / student.grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const newArrayOfStudent = [...students];

  return newArrayOfStudent.sort((student1: Student, student2: Student) => {
    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return student1[sortBy].localeCompare(student2[sortBy]);
      case SortType.Age:
      case SortType.Married:
        return order === 'asc'
          ? Number(student1[sortBy]) - Number(student2[sortBy])
          : Number(student2[sortBy]) - Number(student1[sortBy]);
      case SortType.AverageGrade:
        return order === 'asc'
          ? getAverageGrade(student1) - getAverageGrade(student2)
          : getAverageGrade(student2) - getAverageGrade(student1);
      default:
        throw new Error('Your input property does not exist on type SortType');
    }
  });
}

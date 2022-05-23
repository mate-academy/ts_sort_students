
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

export type SortOrder = 'asc' | 'desc';

function getAverageGrades(studentGrades: number[]): number {
  return studentGrades
    .reduce((sum, current) => sum + current) / studentGrades.length;
}

export function
sortStudents(students: Student[], sortBy: string, order: string): Student[] {
  const studentCopy: Student[] = [...students];

  return studentCopy.sort((firstStudent, secondStudent) => {
    switch (sortBy) {
      case 'name':
      case 'surname':
        return order === 'asc'
          ? firstStudent[sortBy].localeCompare(secondStudent[sortBy])
          : firstStudent[sortBy].localeCompare(secondStudent[sortBy]);
      case 'age':
        return order === 'asc'
          ? firstStudent[sortBy] - secondStudent[sortBy]
          : secondStudent[sortBy] - firstStudent[sortBy];
      case 'married':
        return order === 'asc'
          ? Number(firstStudent[sortBy]) - Number(secondStudent[sortBy])
          : Number(secondStudent[sortBy]) - Number(firstStudent[sortBy]);
      case 'grades':
        return order === 'asc'
          ? getAverageGrades(firstStudent.grades)
            - getAverageGrades(secondStudent.grades)
          : getAverageGrades(secondStudent.grades)
            - getAverageGrades(firstStudent.grades);
      default:
        return 0;
    }
  });
}

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

export function getAverageGrades(studentGrades: number[]): number {
  return studentGrades.reduce((sum, num) => (sum + num), 0)
    / studentGrades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: keyof SortType,
  order: SortOrder,
): Student[] {
  const myListStudents = [...students];

  switch (sortBy) {
    case 'name': case 'surname':
      return myListStudents.sort((firstStudent, nextStudent) => {
        return order === 'asc'
          ? firstStudent[sortBy].localeCompare(nextStudent[sortBy])
          : nextStudent[sortBy].localeCompare(firstStudent[sortBy]);
      });

    case 'age': case 'married':
      return myListStudents.sort((firstStudent, nextStudent) => {
        return order === 'desc'
          ? nextStudent[sortBy] - firstStudent[sortBy]
          : firstStudent[sortBy] - nextStudent[sortBy];
      });

    case 'grades':
      return myListStudents.sort((firstStudent, nextStudent) => {
        return order === 'asc'
          ? getAverageGrades(firstStudent.grades)
            - getAverageGrades(nextStudent.grades)
          : getAverageGrades(nextStudent.grades)
            - getAverageGrades(firstStudent.grades);
      });

    default:
      return myListStudents;
  }
}

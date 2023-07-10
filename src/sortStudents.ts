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
  AverageGrade = 'grade',
}

export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copyStudents: Student[] = [...students];

  function calcAvg(student: Student): number {
    const { grades } = student;

    return grades.reduce((sum, grade) => sum + grade, 0) / grades.length;
  }

  if (sortBy) {
    const sortOrder: number = order === 'asc' ? 1 : -1;

    copyStudents.sort((stud1: Student, stud2: Student) => {
      switch (sortBy) {
        case SortType.Name:
        case SortType.Surname:
          return sortOrder * stud1[sortBy].localeCompare(stud2[sortBy]);

        case SortType.Age:
        case SortType.Married:
          return sortOrder * (Number(stud1[sortBy]) - Number(stud2[sortBy]));

        case SortType.AverageGrade:
          return sortOrder * (calcAvg(stud1) - calcAvg(stud2));

        default:
          return 0;
      }
    });
  }

  return copyStudents;
}

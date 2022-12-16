
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

export function getAverageGrade({ grades }: Student): number {
  return grades.reduce((acc, current) => acc + current, 0) / grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  return [...students]
    .sort((prevStudent: Student, nextStudent: Student) => {
      switch (sortBy) {
        case SortType.Name:
        case SortType.Surname:
          return prevStudent[sortBy].localeCompare(nextStudent[sortBy]);

        case SortType.Age:
          return order === 'asc'
            ? prevStudent.age - nextStudent.age
            : nextStudent.age - prevStudent.age;

        case SortType.Married:
          return Number(nextStudent.married) - Number(prevStudent.married);

        case SortType.AverageGrade:
          return order === 'asc'
            ? getAverageGrade(prevStudent) - getAverageGrade(nextStudent)
            : getAverageGrade(nextStudent) - getAverageGrade(prevStudent);

        default:
          return 0;
      }
    });
}

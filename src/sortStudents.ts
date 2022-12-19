
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
  AverageGrade = 'averageGrade',
}

export type SortOrder = 'asc' | 'desc';

function countAverageGrade(studentGrades: number[]): number {
  const sumGrades = studentGrades.reduce((sum: number, grade: number) => {
    return sum + grade;
  }, 0);

  return sumGrades / studentGrades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  return [...students]
    .sort((student1: Student, student2: Student) => {
      switch (sortBy) {
        case SortType.Name:
        case SortType.Surname:
          return student1[sortBy].localeCompare(student2[sortBy]);

        case SortType.Age:
          return order === 'asc'
            ? student1.age - student2.age
            : student2.age - student1.age;

        case SortType.Married:
          return Number(student2.married) - Number(student1.married);

        case SortType.AverageGrade:
          return order === 'asc'
            ? countAverageGrade(student1.grades)
            - countAverageGrade(student2.grades)
            : countAverageGrade(student2.grades)
            - countAverageGrade(student1.grades);

        default:
          return 0;
      }
    });
}

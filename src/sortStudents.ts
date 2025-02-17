
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

export function getAverageGrade(grades: number[]): number {
  const sumOfGrades = grades.reduce((a: number, b: number) => a + b, 0);

  return sumOfGrades / grades.length;
}

export type SortOrder = 'asc' |'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  return [...students].sort((student1, student2) => {
    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        if (order === 'asc') {
          return student1[sortBy].localeCompare(student2[sortBy]);
        }

        return student2[sortBy].localeCompare(student1[sortBy]);

      case SortType.Age:
      case SortType.Married:
        if (order === 'asc') {
          return +student1[sortBy] - +student2[sortBy];
        }

        return +student2[sortBy] - +student1[sortBy];

      case SortType.AverageGrade:
        if (order === 'asc') {
          return (
            getAverageGrade(student1.grades) - getAverageGrade(student2.grades)
          );
        }

        return (
          getAverageGrade(student2.grades) - getAverageGrade(student1.grades)
        );

      default:
        return 0;
    }
  });
}

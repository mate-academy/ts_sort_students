
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

export type SortOrder = 'asc'| 'desc';

function findAverageGrade(grades: number[]): number {
  return grades.reduce((sum: number, grade: number) => {
    return sum + grade;
  }, 0) / grades.length;
}

export function sortStudents(
  students: Student [],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copyStudents = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return copyStudents.sort((firstStudent, secondStudent) => {
        return firstStudent[sortBy].localeCompare(secondStudent[sortBy]);
      });

    case SortType.Age:
    case SortType.Married:
      return copyStudents.sort((firstStudent, secondStudent) => {
        return Number(secondStudent[sortBy]) - Number(firstStudent[sortBy]);
      });
    case SortType.AverageGrade:
      return copyStudents.sort((firstStudent, secondStudent) => {
        if (order === 'asc') {
          return findAverageGrade(firstStudent.grades)
              - findAverageGrade(secondStudent.grades);
        }

        return findAverageGrade(secondStudent.grades)
          - findAverageGrade(firstStudent.grades);
      });
    default:
      return copyStudents;
  }
}

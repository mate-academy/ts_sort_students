
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

function getAverageGrade(grades: number[]): number {
  return grades.reduce((grade, sum) => sum + grade) / grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const sortedStudents = [...students];

  sortedStudents.sort((firstStud: Student, secondStud: Student) => {
    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return order === 'asc'
          ? firstStud[sortBy].localeCompare(secondStud[sortBy])
          : secondStud[sortBy].localeCompare(firstStud[sortBy]);

      case SortType.Age:
      case SortType.Married:
        return order === 'asc'
          ? +(firstStud[sortBy]) - +(secondStud[sortBy])
          : +(secondStud[sortBy]) - +(firstStud[sortBy]);

      case SortType.AverageGrade:
        return order === 'asc'
          ? getAverageGrade(firstStud.grades)
            - getAverageGrade(secondStud.grades)
          : getAverageGrade(secondStud.grades)
            - getAverageGrade(firstStud.grades);

      default:
        throw new Error('Not valid data');
    }
  });

  return sortedStudents;
}

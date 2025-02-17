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

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const avarageGrade = (grades: number[]): number => {
    return grades.reduce((prev, cur) => cur + prev) / grades.length;
  };

  return [...students].sort((student1, student2) => {
    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return order === 'asc'
          ? student1[sortBy].localeCompare(student2[sortBy])
          : student2[sortBy].localeCompare(student1[sortBy]);

      case SortType.Age:
      case SortType.Married:
        return order === 'asc'
          ? Number(student1[sortBy]) - Number(student2[sortBy])
          : Number(student2[sortBy]) - Number(student1[sortBy]);

      case SortType.AverageGrade:
        return order === 'asc'
          ? avarageGrade(student1[sortBy]) - avarageGrade(student2[sortBy])
          : avarageGrade(student2[sortBy]) - avarageGrade(student1[sortBy]);

      default:
        throw new Error('ERROR!');
    }
  });
}

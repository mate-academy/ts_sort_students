
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
  AverageGrade = 'grades'
}

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

function averageGrades({ grades }: Student): number {
  return grades.reduce((grade, sum) => grade + sum, 0) / grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  return [...students].sort((student1: Student, student2: Student) => {
    const direction = order === SortOrder.Asc
      ? 1
      : -1;

    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return student1[sortBy].localeCompare(student2[sortBy])
        * direction;

      case SortType.Age:
      case SortType.Married:
        return (Number(student1[sortBy]) - Number(student2[sortBy]))
        * direction;

      case SortType.AverageGrade:
        return (averageGrades(student1) - averageGrades(student2))
        * direction;
      default:
        throw new Error(`${sortBy} isn't a valid sorting type`);
    }
  });
}

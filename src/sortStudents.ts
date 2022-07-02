
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
  AverageGrade = 'averageAge'
}

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc',
}

export function sortStudents(
  students: Student,
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  return [...students].sort((student1, student2) => {
    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return order === SortOrder.Asc
          ? student1[sortBy].localeCompare(student2[sortBy])
          : student2[sortBy].localeCompare(student1[sortBy]);

      case SortType.Age:
      case SortType.Married:
        return order === SortOrder.Asc
          ? +student1[sortBy] - +student2[sortBy]
          : +student2[sortBy] - +student1[sortBy];

      case SortType.AverageGrade:
        return order === SortOrder.Asc
          ? student1.sortBy.reduce((sum, t) => sum + t, 0)
            - student2.sortBy.reduce((sum, t) => sum + t, 0)
          : student2.sortBy.reduce((sum, t) => sum + t, 0)
            - student1.sortBy.reduce((sum, t) => sum + t, 0);
      default:
        return 'Cant\'t sort this type of data!';
    }
  });
}

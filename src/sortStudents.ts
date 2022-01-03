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
  AverageGrade = 'averageGrade'
}

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): object[] {
  const copiedStudents: Student[] = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      copiedStudents.sort((student1, student2) => {
        return (order === SortOrder.Asc)
          ? student1[sortBy].localeCompare(student2[sortBy])
          : student2[sortBy].localeCompare(student1[sortBy]);
      });
      break;

    case SortType.Age:
      copiedStudents.sort((student1, student2) => {
        return (order === SortOrder.Asc)
          ? student1[sortBy] - student2[sortBy]
          : student2[sortBy] - student1[sortBy];
      });
      break;

    case SortType.Married:
      copiedStudents.sort((student1, student2) => {
        return (order === SortOrder.Asc)
          ? +student1[sortBy] - +student2[sortBy]
          : +student2[sortBy] - +student1[sortBy];
      });
      break;

    case SortType.AverageGrade:
      copiedStudents.sort((student1, student2) => {
        const student1AverageGrade: number = student1.grades
          .reduce((sum, grade) => sum + grade, 0) / student1.grades.length;

        const student2AverageGrade: number = student2.grades
          .reduce((sum, grade) => sum + grade, 0) / student2.grades.length;

        return (order === SortOrder.Asc)
          ? student1AverageGrade - student2AverageGrade
          : student2AverageGrade - student1AverageGrade;
      });
      break;

    default:
      throw new Error('Enter valid sort type');
  }

  return copiedStudents;
}

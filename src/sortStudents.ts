
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
  AverageGrade ='averageGrade',
}

export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
)
  : Student[] {
  return [...students].sort((student1: Student, student2: Student) => {
    const isAsc: boolean = order === 'asc';
    const student1AverageGrade: number = student1.grades
      .reduce((prev, grade) => (prev + grade), 0) / student1.grades.length;
    const student2AverageGrade: number = student2.grades
      .reduce((prev, grade) => (prev + grade), 0) / student2.grades.length;

    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return isAsc
          ? student1[sortBy].localeCompare(student2[sortBy])
          : student2[sortBy].localeCompare(student1[sortBy]);
      case SortType.Age:
      case SortType.Married:
        return isAsc
          ? Number(student1[sortBy]) - Number(student2[sortBy])
          : Number(student2[sortBy]) - Number(student1[sortBy]);
      case SortType.AverageGrade:
        return isAsc
          ? student1AverageGrade - student2AverageGrade
          : student2AverageGrade - student1AverageGrade;
      default:
        return 0;
    }
  });
}


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
  AverageGrade = 'averageGrade',
}

export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const newStudentsArray: Student[] = [...students];

  switch (sortBy) {
    case (SortType.Name):
    case (SortType.Surname):
      newStudentsArray.sort((
        student1: Student,
        student2: Student,
      ) => {
        if (order === 'asc') {
          return student1[sortBy].localeCompare(student2[sortBy]);
        }

        return student2[sortBy].localeCompare(student1[sortBy]);
      });
      break;

    case (SortType.Married):
    case (SortType.Age):
      newStudentsArray.sort((
        student1: Student,
        student2: Student,
      ) => {
        if (order === 'asc') {
          return Number(student1[sortBy]) - Number(student2[sortBy]);
        }

        return Number(student2[sortBy]) - Number(student1[sortBy]);
      });
      break;

    case (SortType.AverageGrade):
      newStudentsArray.sort((student1: Student, student2: Student) => {
        const student1AverageGrade: number = student1.grades.reduce((
          acc: number,
          val: number,
        ) => acc + val, 0) / student1.grades.length;

        const student2AverageGrade: number = student2.grades.reduce((
          acc: number,
          val: number,
        ) => acc + val, 0) / student2.grades.length;

        if (order === 'asc') {
          return student1AverageGrade - student2AverageGrade;
        }

        return student2AverageGrade - student1AverageGrade;
      });
      break;

    default:
      throw new Error();
  }

  return newStudentsArray;
}

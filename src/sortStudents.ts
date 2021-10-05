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
  AverageGrade = 'grades'
}

export type SortOrder = 'asc' | 'desc';

function calcAvgMark(value: number[] = []):number {
  return value.reduce((accum, grade) => accum + grade, 0) / value.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const newStudentsArray = students.concat();

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      newStudentsArray.sort((student1: Student, student2: Student) => {
        return order === 'asc'
          ? student1[sortBy].localeCompare(student2[sortBy])
          : student2[sortBy].localeCompare(student1[sortBy]);
      });
      break;

    case SortType.Age:
      newStudentsArray.sort((student1: Student, student2: Student) => {
        return order === 'asc'
          ? student1[sortBy] - student2[sortBy]
          : student2[sortBy] - student1[sortBy];
      });
      break;

    case SortType.Married:
      newStudentsArray.sort((student1: Student, student2: Student) => {
        return order === 'asc'
          ? Number(student1[sortBy]) - Number(student2[sortBy])
          : Number(student2[sortBy]) - Number(student1[sortBy]);
      });
      break;

    case SortType.AverageGrade:
      newStudentsArray.sort((student1: Student, student2: Student) => {
        return order === 'asc'
          ? calcAvgMark(student1[sortBy]) - calcAvgMark(student2[sortBy])
          : calcAvgMark(student2[sortBy]) - calcAvgMark(student1[sortBy]);
      });
      break;

    default:
      break;
  }

  return newStudentsArray;
}

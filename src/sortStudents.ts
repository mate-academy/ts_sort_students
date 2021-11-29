export interface Student {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];
  averageGrade: number;
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
  students:Student[],
  sortBy:SortType,
  order:SortOrder,
):Student[] {
  const copyOfArray:Student[] = students.map((student) => {
    const avG = student.grades.reduce((a, b) => a + b) / student.grades.length;

    return {
      ...student,
      averageGrade: avG,
    };
  });

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      copyOfArray.sort((a, b) => {
        return (order === 'asc')
          ? a[sortBy].localeCompare(b[sortBy])
          : b[sortBy].localeCompare(a[sortBy]);
      });
      break;

    case SortType.Age:
    case SortType.Married:
    case SortType.AverageGrade:
      copyOfArray.sort((a, b) => {
        return (order === 'asc')
          ? Number(a[sortBy]) - Number(b[sortBy])
          : Number(b[sortBy]) - Number(a[sortBy]);
      });
      break;

    default: return copyOfArray;
  }

  return copyOfArray;
}

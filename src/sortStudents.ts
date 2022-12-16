
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

function avrg(arr: number[]): number {
  return arr.reduce((acc, el) => acc + el) / arr.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const studentsCopy: Student[] = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      studentsCopy.sort((student1, student2) => (
        order === 'asc'
          ? student1[sortBy].localeCompare(student2[sortBy])
          : student2[sortBy].localeCompare(student1[sortBy])
      ));
      break;

    case SortType.Married:
    case SortType.Age:
      studentsCopy.sort((student1, student2) => (
        order === 'asc'
          ? Number(student1[sortBy]) - Number(student2[sortBy])
          : Number(student2[sortBy]) - Number(student1[sortBy])
      ));
      break;

    case SortType.AverageGrade:
      studentsCopy.sort((student1, student2) => (
        order === 'asc'
          ? avrg(student1.grades) - avrg(student2.grades)
          : avrg(student2.grades) - avrg(student1.grades)
      ));
      break;

    default:
      break;
  }

  return studentsCopy;
}

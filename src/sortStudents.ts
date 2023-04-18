
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

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

const getGrade = (grades: number[]): number => {
  const sum: number = (grades.reduce((acc: number, number: number) => (
    acc + number), 0));
  const result = sum / grades.length;

  return result;
};

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const studentsArrayCopy: Student[] = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      studentsArrayCopy.sort((student1: Student, student2: Student) => (
        order === 'asc'
          ? student1[sortBy].localeCompare(student2[sortBy])
          : student2[sortBy].localeCompare(student1[sortBy])));
      break;

    case SortType.Age:
    case SortType.Married:
      studentsArrayCopy.sort((student1: Student, student2: Student) => (
        order === 'asc'
          ? Number(student1[sortBy]) - Number(student2[sortBy])
          : Number(student2[sortBy]) - Number(student1[sortBy])));
      break;

    case SortType.AverageGrade:
      studentsArrayCopy.sort((student1: Student, student2: Student) => (
        order === 'asc'
          ? getGrade(student1[sortBy]) - getGrade(student2[sortBy])
          : getGrade(student2[sortBy]) - getGrade(student1[sortBy])));
      break;

    default:
      return studentsArrayCopy;
  }

  return studentsArrayCopy;
}

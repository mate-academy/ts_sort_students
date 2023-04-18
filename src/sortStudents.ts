
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

const getAverageGrade = (grades: number[]): number => {
  const sum = (grades.reduce((acc, number) => (
    acc + number), 0));

  return sum / grades.length;
};

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const studentsArrayCopy = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      studentsArrayCopy.sort((student1, student2) => (
        order === 'asc'
          ? student1[sortBy].localeCompare(student2[sortBy])
          : student2[sortBy].localeCompare(student1[sortBy])));
      break;

    case SortType.Age:
    case SortType.Married:
      studentsArrayCopy.sort((student1, student2) => (
        order === 'asc'
          ? Number(student1[sortBy]) - Number(student2[sortBy])
          : Number(student2[sortBy]) - Number(student1[sortBy])));
      break;

    case SortType.AverageGrade:
      studentsArrayCopy.sort((student1, student2) => (
        order === 'asc'
          ? getAverageGrade(student1[sortBy])
            - getAverageGrade(student2[sortBy])
          : getAverageGrade(student2[sortBy])
            - getAverageGrade(student1[sortBy])));
      break;

    default:
      return studentsArrayCopy;
  }

  return studentsArrayCopy;
}

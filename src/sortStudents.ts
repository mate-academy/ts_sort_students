
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
  AverageGrade = 'grades',
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

const getAverageGrade = (grades: number[]): number => {
  return grades.reduce((sum, grade) => sum + grade) / grades.length;
};

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const arrayStudent: Student[] = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return order === 'asc'
        ? arrayStudent.sort((firstStudent, secondStudent) => (
          firstStudent[sortBy].localeCompare(secondStudent[sortBy])))
        : arrayStudent.sort((firstStudent, secondStudent) => (
          secondStudent[sortBy].localeCompare(firstStudent[sortBy])));

    case SortType.Age:
    case SortType.Married:
      return order === 'asc'
        ? arrayStudent.sort((firstStudent, secondStudent) => (
          Number(firstStudent[sortBy]) - Number(secondStudent[sortBy])))
        : arrayStudent.sort((firstStudent, secondStudent) => (
          Number(secondStudent[sortBy]) - Number(firstStudent[sortBy])));

    case SortType.AverageGrade:
      return order === 'asc'
        ? arrayStudent.sort(
          (firstStudent, secondStudent) => (
            getAverageGrade(firstStudent[sortBy])
            - getAverageGrade(secondStudent[sortBy])),
        )
        : arrayStudent.sort(
          (firstStudent, secondStudent) => (
            getAverageGrade(secondStudent[sortBy])
            - getAverageGrade(firstStudent[sortBy])),
        );

    default:
      throw new Error('Error');
  }
}

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
  AverageGrade = 'grades',
}

export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const calcAverageGrade = ({ grades }: Student): number => (
    grades.reduce((total, grade) => total + grade, 0) / grades.length
  );

  const studentsCopy: Student[] = [...students];
  const isAscendingOrder = order === 'asc';

  studentsCopy.sort((firstStudent, secondStudent): number => {
    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return isAscendingOrder
          ? firstStudent[sortBy].localeCompare(secondStudent[sortBy])
          : secondStudent[sortBy].localeCompare(firstStudent[sortBy]);
      case SortType.AverageGrade:
        return isAscendingOrder
          ? calcAverageGrade(firstStudent) - calcAverageGrade(secondStudent)
          : calcAverageGrade(secondStudent) - calcAverageGrade(firstStudent);
      case SortType.Age:
        return isAscendingOrder
          ? firstStudent[sortBy] - secondStudent[sortBy]
          : secondStudent[sortBy] - firstStudent[sortBy];
      case SortType.Married:
        return isAscendingOrder
          ? Number(firstStudent[sortBy]) - Number(secondStudent[sortBy])
          : Number(secondStudent[sortBy]) - Number(firstStudent[sortBy]);
      default:
        return 0;
    }
  });

  return studentsCopy;
}

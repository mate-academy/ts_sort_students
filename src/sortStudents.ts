
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
  AverageGrade = 'averageGrade'
}

// create SortOrder type
export enum SortOrder {
  Ascending = 'asc',
  Descending = 'desc',
}

function getAverageGrade({ grades }: Student): number {
  return grades.reduce((acc, grade) => acc + grade, 0) / grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const studentsCopy = [...students];

  return studentsCopy.sort((prevStudent: Student, nextStudent: Student) => {
    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return order === SortOrder.Ascending
          ? prevStudent[sortBy].localeCompare(nextStudent[sortBy])
          : nextStudent[sortBy].localeCompare(prevStudent[sortBy]);

      case SortType.Age:
      case SortType.Married:
        return order === SortOrder.Ascending
          ? Number(prevStudent[sortBy]) - Number(nextStudent[sortBy])
          : Number(nextStudent[sortBy]) - Number(prevStudent[sortBy]);

      case SortType.AverageGrade:
        return order === SortOrder.Ascending
          ? getAverageGrade(prevStudent) - getAverageGrade(nextStudent)
          : getAverageGrade(nextStudent) - getAverageGrade(prevStudent);

      default:
        throw new Error('Unknown type');
    }
  });
}

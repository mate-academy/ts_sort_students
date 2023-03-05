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

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

// calculating average grade function
function getAverageGrade({ grades }: Student): number {
  return grades.reduce((grade, sum) => grade + sum, 0) / grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copiedStudents = [...students];

  return copiedStudents.sort((previousStudent, currentStudent) => {
    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return order === 'asc'
          ? previousStudent[sortBy].localeCompare(currentStudent[sortBy])
          : currentStudent[sortBy].localeCompare(previousStudent[sortBy]);

      case SortType.Age:
      case SortType.Married:
        return order === 'asc'
          ? +(previousStudent[sortBy]) - +(currentStudent[sortBy])
          : +(currentStudent[sortBy]) - +(previousStudent[sortBy]);

      case SortType.AverageGrade:
        return order === 'asc'
          ? getAverageGrade(previousStudent) - getAverageGrade(currentStudent)
          : getAverageGrade(currentStudent) - getAverageGrade(previousStudent);

      default:
        throw new Error('Provided type is not valid');
    }
  });
}

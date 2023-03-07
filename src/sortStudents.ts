
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

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  function averageMark(grades: number[]): number {
    const sum = grades.reduce((acc, curr) => acc + curr, 0);

    return sum / grades.length;
  }

  const studentsCopy = [...students];

  return studentsCopy.sort((previousStudent, currentStudent): number => {
    switch (sortBy) {
      case SortType.Name:
        return order === 'asc'
          ? previousStudent[sortBy].localeCompare(currentStudent[sortBy])
          : currentStudent[sortBy].localeCompare(previousStudent[sortBy]);

      case SortType.Surname:
        return order === 'asc'
          ? previousStudent[sortBy].localeCompare(currentStudent[sortBy])
          : currentStudent[sortBy].localeCompare(previousStudent[sortBy]);

      case SortType.Age:
        return order === 'asc'
          ? previousStudent[sortBy] - currentStudent[sortBy]
          : currentStudent[sortBy] - previousStudent[sortBy];

      case SortType.Married:
        return order === 'asc'
          ? +(previousStudent[sortBy]) - +(currentStudent[sortBy])
          : +(currentStudent[sortBy]) - +(previousStudent[sortBy]);

      case SortType.AverageGrade:
        return order === 'asc'
          ? averageMark(previousStudent[sortBy])
            - averageMark(currentStudent[sortBy])
          : averageMark(currentStudent[sortBy])
            - averageMark(previousStudent[sortBy]);

      default: throw new Error('SortType failure!');
    }
  });
}


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

function getAverage(students: number[]): number {
  return students.reduce((prev, curr) => prev + curr, 0) / students.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const studentsCopy: Student[] = [...students];

  return studentsCopy.sort((firstStudent, secondStudent) => {
    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return order === 'asc'
          ? firstStudent[sortBy].localeCompare(secondStudent[sortBy])
          : secondStudent[sortBy].localeCompare(firstStudent[sortBy]);

      case SortType.Age:
      case SortType.Married:
        return order === 'asc'
          ? +(firstStudent[sortBy]) - +(secondStudent[sortBy])
          : +(secondStudent[sortBy]) - +(firstStudent[sortBy]);

      case SortType.AverageGrade:
        return order === 'asc'
          ? getAverage(firstStudent[sortBy])
            - getAverage(secondStudent[sortBy])
          : getAverage(secondStudent[sortBy])
            - getAverage(firstStudent[sortBy]);

      default: throw new Error('Wrong sort data');
    }
  });
}

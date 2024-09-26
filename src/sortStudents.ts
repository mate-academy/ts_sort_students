
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
  const copyStudents: Student[] = [...students];

  return copyStudents.sort((prevStudent: Student, currentStudent: Student) => {
    let one: number;
    let two: number;

    switch (sortBy) {
      case SortType.AverageGrade:
        one = prevStudent[sortBy]
          .reduce((acum: number, mark: number) => acum + mark);

        two = currentStudent[sortBy]
          .reduce((acum: number, mark: number) => acum + mark);

        return (order === 'asc')
          ? (one / prevStudent[sortBy].length)
            - (two / currentStudent[sortBy].length)
          : (two / currentStudent[sortBy].length)
            - (one / prevStudent[sortBy].length);

      case SortType.Age:
        return (order === 'asc')
          ? prevStudent[sortBy] - currentStudent[sortBy]
          : currentStudent[sortBy] - prevStudent[sortBy];

      case SortType.Married:
        one = (prevStudent[sortBy])
          ? 1
          : 0;

        two = (currentStudent[sortBy])
          ? 1
          : 0;

        return (order === 'asc')
          ? one - two
          : two - one;

      case SortType.Name:
        return (order === 'asc')
          ? prevStudent[sortBy].localeCompare(currentStudent[sortBy])
          : currentStudent[sortBy].localeCompare(prevStudent[sortBy]);

      case SortType.Surname:
        return (order === 'asc')
          ? prevStudent[sortBy].localeCompare(currentStudent[sortBy])
          : currentStudent[sortBy].localeCompare(prevStudent[sortBy]);

      default:
        throw new Error(`Fix mistake in ${sortBy}`);
    }
  });
}

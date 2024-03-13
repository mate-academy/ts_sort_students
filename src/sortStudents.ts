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
  let theSortOrder: number = 1;

  if (order === 'desc') {
    theSortOrder = -1;
  }

  const studentsCopy = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      studentsCopy.sort(
        (student1, student2) => student1[sortBy].localeCompare(student2[sortBy])
         * theSortOrder,
      );
      break;

    case SortType.Age:
    case SortType.Married:
      studentsCopy.sort((student1, student2) => (
        +student1[sortBy] - +student2[sortBy]) * theSortOrder);
      break;

    case SortType.AverageGrade:
      studentsCopy.sort((student1, student2) => (
        (student1[sortBy]
          .reduce((sum, current) => sum + current, 0) / student1[sortBy].length)
        - (student2[sortBy]
          .reduce((
            sum, current,
          ) => sum + current, 0) / student2[sortBy].length)) * theSortOrder);
      break;

    default:
      throw new Error('Enter valid sort type');
  }

  return studentsCopy;
}

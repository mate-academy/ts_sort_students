
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

export type SortOrder = 'asc' | 'desc';

function getAverageGrade(grades: []): number {
  return grades.reduce((a: number, b: number) => a + b, 0) / grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copiedStudents: Student[] = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      copiedStudents.sort((prevStudent, currStudent) => {
        return order === 'asc'
          ? prevStudent[sortBy].localeCompare(currStudent[sortBy])
          : currStudent[sortBy].localeCompare(prevStudent[sortBy]);
      });
      break;

    case SortType.Age:
      copiedStudents.sort((prevStudent, currStudent) => {
        return order === 'asc'
          ? prevStudent[sortBy] - currStudent[sortBy]
          : currStudent[sortBy] - prevStudent[sortBy];
      });
      break;

    case SortType.Married:
      copiedStudents.sort((prevStudent, currStudent) => {
        return order === 'asc'
          ? +prevStudent[sortBy] - +currStudent[sortBy]
          : +currStudent[sortBy] - +prevStudent[sortBy];
      });
      break;

    case SortType.AverageGrade:
      copiedStudents.sort((prevStudent, currStudent) => {
        return order === 'asc'
          ? getAverageGrade(prevStudent[sortBy])
            - getAverageGrade(currStudent[sortBy])
          : getAverageGrade(currStudent[sortBy])
            - getAverageGrade(prevStudent[sortBy]);
      });
      break;

    default:
      throw new Error(`Invalid sort type ${sortBy}`);
  }

  return copiedStudents;
}

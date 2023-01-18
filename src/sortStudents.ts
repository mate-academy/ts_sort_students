
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

function getAverageGrades(grades: number[]): number {
  return grades.reduce((a, b) => a + b, 0) / grades.length;
}

export function sortStudents(students: Student[],
  sortBy: SortType, order: SortOrder):
  Student[] {
  const studentsCopy: Student[] = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      studentsCopy.sort((prevStudent, currStudent) => {
        return order === 'asc'
          ? prevStudent[sortBy].localeCompare(currStudent[sortBy])
          : currStudent[sortBy].localeCompare(prevStudent[sortBy]);
      });
      break;

    case SortType.Age:
      studentsCopy.sort((prevStudent, currStudent) => {
        return order === 'asc'
          ? prevStudent[sortBy] - currStudent[sortBy]
          : currStudent[sortBy] - prevStudent[sortBy];
      });
      break;

    case SortType.Married:
      studentsCopy.sort((prevStudent, currStudent) => {
        return order === 'asc'
          ? Number(prevStudent[sortBy]) - Number(currStudent[sortBy])
          : Number(currStudent[sortBy]) - Number(prevStudent[sortBy]);
      });
      break;

    case SortType.AverageGrade:
      studentsCopy.sort((prevStudent, currStudent) => {
        return order === 'asc'
          ? getAverageGrades(prevStudent[sortBy])
            - getAverageGrades(currStudent[sortBy])
          : getAverageGrades(currStudent[sortBy])
            - getAverageGrades(prevStudent[sortBy]);
      });
      break;

    default:
      throw new Error('Invalid sort type');
  }

  return studentsCopy;
}

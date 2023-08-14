
export interface Student {
  name: string;
  surname: string;
  age: number;
  married: Boolean;
  grades: Array<number>;
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'grades',
}

export type SortOrder = 'asc' | 'desc';

export function getAverageGrades(gradesArray: Array<number>): number {
  return gradesArray
    .reduce((acc: number, mark: number) => acc + mark, 0) / gradesArray.length;
}

export function sortStudents(
  students: Array<Student>,
  sortBy: SortType,
  order: SortOrder,
)

  : Array<Student> {
  const studentsCopy: Array<Student> = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return studentsCopy.sort((pupil1: Student, pupil2: Student) => {
        return order === 'asc'
          ? pupil1[sortBy].localeCompare(pupil2[sortBy])
          : pupil2[sortBy].localeCompare(pupil1[sortBy]);
      });

    case SortType.Age:
    case SortType.Married:
      return studentsCopy.sort((pupil1: Student, pupil2: Student) => {
        return order === 'asc'
          ? +pupil1[sortBy] - +pupil2[sortBy]
          : +pupil2[sortBy] - +pupil1[sortBy];
      });

    case SortType.AverageGrade:
      return studentsCopy.sort((pupil1: Student, pupil2: Student) => {
        return order === 'asc'
          ? getAverageGrades(pupil1[sortBy]) - getAverageGrades(pupil2[sortBy])
          : getAverageGrades(pupil2[sortBy]) - getAverageGrades(pupil1[sortBy]);
      });

    default:
      throw new Error('You have entered incorrect data');
  }
}

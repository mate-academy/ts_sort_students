export interface Student {
  name: string;
  surname: string;
  age: number;
  married: boolean;
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

function calcAverage(student: Student): number {
  return student.grades
    .reduce((acc, curr) => acc + curr, 0) / student.grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const studentsCopy = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      studentsCopy.sort((currStudent, nextStudent) => (
        order === 'asc'
          ? currStudent[sortBy].localeCompare(nextStudent[sortBy])
          : nextStudent[sortBy].localeCompare(currStudent[sortBy])
      ));
      break;

    case SortType.Age:
    case SortType.Married:
      studentsCopy.sort((currStudent, nextStudent) => (
        order === 'asc'
          ? +currStudent[sortBy] - +nextStudent[sortBy]
          : +nextStudent[sortBy] - +currStudent[sortBy]
      ));
      break;

    case SortType.AverageGrade:
      studentsCopy.sort((currStudent, nextStudent) => {
        return order === 'asc'
          ? calcAverage(currStudent) - calcAverage(nextStudent)
          : calcAverage(nextStudent) - calcAverage(currStudent);
      });
      break;

    default:
      return studentsCopy;
  }

  return studentsCopy;
}

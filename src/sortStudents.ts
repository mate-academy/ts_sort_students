
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
  AverageGrade = 'grades'
}

export type SortOrder = 'asc' | 'desc';

function calcAvgGrades(grades: Array<number>):number {
  const sum: number = grades.reduce((acc:number, curr:number) => acc + curr, 0);
  const avg: number = (sum / grades.length);

  return avg;
}

export function sortStudents(
  students: Array<Student>,
  sortBy: SortType,
  order: SortOrder,
): Array<Student> {
  const studentsCopy = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      studentsCopy.sort((firstStudent, secondStudent) => (order === 'asc'
        ? firstStudent[sortBy].localeCompare(secondStudent[sortBy])
        : secondStudent[sortBy].localeCompare(firstStudent[sortBy])
      ));
      break;
    case SortType.Age:
    case SortType.Married:
      studentsCopy.sort((firstStudent, secondStudent) => (order === 'asc'
        ? +firstStudent[sortBy] - +secondStudent[sortBy]
        : +secondStudent[sortBy] - +firstStudent[sortBy]
      ));
      break;
    case SortType.AverageGrade:
      studentsCopy.sort((firstS, secondS) => (order === 'asc'
        ? calcAvgGrades(firstS[sortBy]) - calcAvgGrades(secondS[sortBy])
        : calcAvgGrades(secondS[sortBy]) - calcAvgGrades(firstS[sortBy])
      ));
      break;
    default:
      return studentsCopy;
  }

  return studentsCopy;
}


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

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  let sortedList: Student[] = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      sortedList = sortedList.sort((previous: Student, next: Student) => {
        return order === 'asc'
          ? previous[sortBy].localeCompare(next[sortBy])
          : next[sortBy].localeCompare(previous[sortBy]);
      });
      break;

    case SortType.Married:
    case SortType.Age:
      sortedList = sortedList.sort((previous: Student, next: Student) => {
        return order === 'asc'
          ? +previous[sortBy] - +next[sortBy]
          : +next[sortBy] - +previous[sortBy];
      });
      break;

    case SortType.AverageGrade:
      sortedList = sortedList.sort((previous: Student, next: Student) => {
        const AverageGradePrev = previous.grades
          .reduce((sum, prev) => sum + prev, 0) / previous.grades.length;
        const AverageGradeNext = next.grades
          .reduce((sum, prev) => sum + prev, 0) / next.grades.length;

        return order === 'asc'
          ? AverageGradePrev - AverageGradeNext
          : AverageGradeNext - AverageGradePrev;
      });
      break;

    default:
      break;
  }

  return sortedList;
}

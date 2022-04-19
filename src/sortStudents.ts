
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
  AverageGrade = 'grades'
}

export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const sortedStudents: Student[] = [...students];

  function getAverage(grades: number[]): number {
    return grades.reduce((summ, value) => summ + value, 0) / grades.length;
  }

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      sortedStudents.sort((studentA, studentB) => {
        return order === 'asc'
          ? studentA[sortBy].localeCompare(studentB[sortBy])
          : studentB[sortBy].localeCompare(studentA[sortBy]);
      });
      break;

    case SortType.Age:
    case SortType.Married:
      sortedStudents.sort((studentA, studentB) => {
        return order === 'asc'
          ? Number(studentA[sortBy]) - Number(studentB[sortBy])
          : Number(studentB[sortBy]) - Number(studentA[sortBy]);
      });
      break;

    case SortType.AverageGrade:
      sortedStudents.sort((student1, student2) => {
        return order === 'asc'
          ? getAverage(student1.grades) - getAverage(student2.grades)
          : getAverage(student2.grades) - getAverage(student1.grades);
      });
      break;
    default:
      return sortedStudents;
  }

  return sortedStudents;
}

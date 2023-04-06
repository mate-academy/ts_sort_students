
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

function calcAverage(grades: number[]): number {
  return grades.reduce((sum, grade) => sum + grade) / grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const studentsArray: Student[] = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      studentsArray.sort((student1, student2) => {
        return order === 'asc'
          ? student1[sortBy].localeCompare(student2[sortBy])
          : student2[sortBy].localeCompare(student1[sortBy]);
      });
      break;

    case SortType.Age:
    case SortType.Married:
      studentsArray.sort((student1, student2) => {
        return order === 'asc'
          ? +student1[sortBy] - +student2[sortBy]
          : +student2[sortBy] - +student1[sortBy];
      });
      break;

    case SortType.AverageGrade:
      studentsArray.sort((student1, student2) => {
        return order === 'asc'
          ? calcAverage(student1[sortBy]) - calcAverage(student2[sortBy])
          : calcAverage(student2[sortBy]) - calcAverage(student1[sortBy]);
      });
      break;

    default:
      return studentsArray;
  }

  return studentsArray;
}


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

function getAverage(grades: number[]): number {
  return grades.reduce((acc, curr) => acc + curr, 0) / grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const resultArray = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      resultArray.sort((student1, student2) => {
        return order === 'asc'
          ? student1[sortBy].localeCompare(student2[sortBy])
          : student2[sortBy].localeCompare(student1[sortBy]);
      });
      break;

    case SortType.Age:
      resultArray.sort((student1, student2) => {
        return order === 'asc'
          ? student1.age - student2.age
          : student2.age - student1.age;
      });
      break;

    case SortType.Married:
      resultArray.sort((student1, student2) => {
        if (student1.married === student2.married) {
          return 0;
        }

        if (order === 'asc') {
          return student1.married ? 1 : -1;
        }

        return student2.married ? 1 : -1;
      });
      break;

    case SortType.AverageGrade:
      resultArray.sort((student1, student2) => {
        return order === 'asc'
          ? getAverage(student1.grades) - getAverage(student2.grades)
          : getAverage(student2.grades) - getAverage(student1.grades);
      });
      break;

    default:
  }

  return resultArray;
}

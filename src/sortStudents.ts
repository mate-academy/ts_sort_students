
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

const callback = (sum: number, value: number): number => sum + value;

function calcAverageGrade(person: Student): number {
  return person.grades.reduce(callback) / person.grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  let sortedStudents: Student[] = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      if (order === 'desc') {
        sortedStudents = sortedStudents
          .sort((student1, student2) => student2[sortBy]
            .localeCompare(student1[sortBy]));
      } else {
        sortedStudents = sortedStudents
          .sort((student1, student2) => student1[sortBy]
            .localeCompare(student2[sortBy]));
      }
      break;

    case SortType.Age:
    case SortType.Married:
      if (order === 'desc') {
        sortedStudents = sortedStudents
          .sort((student1, student2) => Number(student2[sortBy])
          - Number(student1[sortBy]));
      } else {
        sortedStudents = sortedStudents
          .sort((student1, student2) => Number(student1[sortBy])
          - Number(student2[sortBy]));
      }
      break;

    case SortType.AverageGrade:
      if (order === 'desc') {
        sortedStudents = sortedStudents
          .sort((a, b) => calcAverageGrade(b) - calcAverageGrade(a));
      } else {
        sortedStudents = sortedStudents
          .sort((a, b) => calcAverageGrade(a) - calcAverageGrade(b));
      }
      break;

    default:
      break;
  }

  return sortedStudents;
}

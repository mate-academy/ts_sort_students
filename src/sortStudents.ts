
export interface Student {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades:number[];
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'grades',
}

export type SortOrder = 'asc'|'desc';

function findAverage(data:number[]):number {
  return data.reduce((sum, num) => (
    sum + num), 0) / data.length;
}

export function sortStudents(
  students:Student[],
  sortBy: SortType,
  order:SortOrder,
):object[] {
  const studentsDublicate = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      studentsDublicate.sort((student1, student2) => {
        return order === 'asc'
          ? student1[sortBy].localeCompare(student2[sortBy])
          : student2[sortBy].localeCompare(student1[sortBy]);
      });

      break;

    case SortType.Age:
      studentsDublicate.sort((student1, student2) => {
        return order === 'asc'
          ? student1.age - student2.age
          : student2.age - student1.age;
      });
      break;

    case SortType.Married:
      studentsDublicate.sort((student1, student2) => {
        const hasSpouse1 = student1.married;
        const hasSpouse2 = student2.married;

        if (hasSpouse1 === hasSpouse2) {
          return 0;
        }

        if (order === 'asc') {
          return hasSpouse1 ? 1 : -1;
        }

        return hasSpouse1 ? -1 : 1;
      });
      break;

    case SortType.AverageGrade:
      studentsDublicate.sort((student1, student2) => {
        const averageMark1 = findAverage(student1.grades);
        const averageMark2 = findAverage(student2.grades);

        return order === 'asc'
          ? averageMark1 - averageMark2
          : averageMark2 - averageMark1;
      });
      break;

    default:
      throw new Error('Unknown error');
  }

  return studentsDublicate;
}

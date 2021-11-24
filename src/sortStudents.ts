
export interface Student {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades:number[];
}

export enum SortType {
  Name,
  Surname,
  Age,
  Married,
  AverageGrade,
}

export type SortOrder = 'asc'|'desc';

export function sortStudents(
  students:Student[],
  sortBy: SortType,
  order:SortOrder,
):object[] {
  const studentsDublicate = [...students];

  switch (sortBy) {
    case SortType.Name:
      studentsDublicate.sort((student1, student2) => {
        if (order === 'asc') {
          return student1.name.localeCompare(student2.name);
        }

        return student2.name.localeCompare(student1.name);
      });

      break;

    case SortType.Surname:
      studentsDublicate.sort((student1, student2) => {
        if (order === 'asc') {
          return student1.surname.localeCompare(student2.surname);
        }

        return student2.surname.localeCompare(student1.surname);
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
        const averageMark1 = student1.grades.reduce((sum, mark) => (
          sum + mark), 0) / student1.grades.length;
        const averageMark2 = student2.grades.reduce((sum, mark) => (
          sum + mark), 0) / student2.grades.length;

        if (averageMark1 === averageMark2) {
          return 0;
        }

        if (order === 'asc') {
          return averageMark1 > averageMark2 ? 1 : -1;
        }

        return averageMark1 > averageMark2 ? -1 : 1;
      });
      break;

    default:
      return studentsDublicate;
  }

  return studentsDublicate;
}

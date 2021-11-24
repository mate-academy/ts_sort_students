
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
        const name1 = student1.name.toLowerCase();
        const name2 = student2.name.toLowerCase();

        if (name1 === name2) {
          return 0;
        }

        if (order === 'asc') {
          return name1 > name2 ? 1 : -1;
        }

        return name1 > name2 ? -1 : 1;
      });

      break;

    case SortType.Surname:
      studentsDublicate.sort((student1, student2) => {
        const surname1 = student1.surname.toLowerCase();
        const surname2 = student2.surname.toLowerCase();

        if (surname1 === surname2) {
          return 0;
        }

        if (order === 'asc') {
          return surname1 > surname2 ? 1 : -1;
        }

        return surname1 > surname2 ? -1 : 1;
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


export interface Student {
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[],
}

export enum SortType {
  Name,
  Surname,
  Age,
  Married,
  AverageGrade,
}

export type SortOrder = 'asc' |'desc';

export function sortStudents(
  students: Student, sortBy: SortType, order: SortOrder,
): string[] {
  const copy: string[] = [...students];
  const copyObject = copy.map((el) => ({ ...el }));

  switch (sortBy) {
    case (SortType.Name):
      if (order === 'asc') {
        copyObject.sort((a, b) => a.name.localeCompare(b.name));
      }

      if (order === 'desc') {
        copyObject.sort((a, b) => b.name.localeCompare(a.name));
      }
      break;

    case (SortType.Surname):
      if (order === 'asc') {
        copyObject.sort((a, b) => a.surname.localeCompare(b.surname));
      }

      if (order === 'desc') {
        copyObject.sort((a, b) => b.surname.localeCompare(a.surname));
      }
      break;

    case (SortType.Age):
      if (order === 'asc') {
        copyObject.sort((a, b) => a.age - b.age);
      }

      if (order === 'desc') {
        copyObject.sort((a, b) => b.age - a.age);
      }
      break;

    case (SortType.Married):
      if (order === 'desc') {
        copyObject.sort((a, b) => {
          if (a.married === b.married) {
            return 0;
          }

          return a.married ? -1 : 1;
        });
      }

      if (order === 'asc') {
        copyObject.sort((a, b) => {
          if (b.married === a.married) {
            return 0;
          }

          return b.married ? -1 : 1;
        });
      }
      break;

    case (SortType.AverageGrade):
      if (order === 'asc') {
        copyObject.sort((a, b) => {
          const aSum = a.grades.reduce((acc: number, num: number) => {
            return acc + num;
          }, 0);
          const bSum = b.grades.reduce((acc: number, num: number) => {
            return acc + num;
          }, 0);

          return aSum / a.grades.length - bSum / b.grades.length;
        });
      }

      if (order === 'desc') {
        copyObject.sort((a, b) => {
          const aSum = a.grades.reduce((acc: number, num: number) => {
            return acc + num;
          }, 0);
          const bSum = b.grades.reduce((acc: number, num: number) => {
            return acc + num;
          }, 0);

          return bSum / b.grades.length - aSum / a.grades.length;
        });
      }
      break;

    default:
      throw new Error('uncorrect parameters');
  }

  return copyObject;
}

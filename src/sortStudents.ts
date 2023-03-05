
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
  const copyArray: string[] = [...students];
  const copyObject = copyArray.map((person) => ({ ...person }));

  switch (sortBy) {
    case (SortType.Name):
      copyObject.sort((prev, current) => {
        return order === 'asc'
          ? prev.name.localeCompare(current.name)
          : current.name.localeCompare(prev.name);
      });
      break;

    case (SortType.Surname):
      copyObject.sort((prev, current) => {
        return order === 'asc'
          ? prev.surname.localeCompare(current.surname)
          : current.surname.localeCompare(prev.surname);
      });
      break;

    case (SortType.Age):
      copyObject.sort((prev, current) => {
        return order === 'asc'
          ? prev.age - current.age
          : current.age - prev.age;
      });
      break;

    case (SortType.Married):
      if (order === 'desc') {
        copyObject.sort((prev, current) => {
          if (prev.married === current.married) {
            return 0;
          }

          return prev.married ? -1 : 1;
        });
      }

      if (order === 'asc') {
        copyObject.sort((prev, current) => {
          if (current.married === prev.married) {
            return 0;
          }

          return current.married ? -1 : 1;
        });
      }
      break;

    case (SortType.AverageGrade):
      copyObject.sort((prev, current) => {
        const aSum = prev.grades.reduce((acc: number, num: number) => {
          return acc + num;
        }, 0);
        const bSum = current.grades.reduce((acc: number, num: number) => {
          return acc + num;
        }, 0);

        return order === 'asc'
          ? aSum / prev.grades.length - bSum / current.grades.length
          : bSum / current.grades.length - aSum / prev.grades.length;
      });
      break;

    default:
      throw new Error('wrong parameters');
  }

  return copyObject;
}

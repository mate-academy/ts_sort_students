
export interface Student {
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[]
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'grades',
}

export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[], sortBy: SortType, order: SortOrder,
): Student[] {
  const array = [...students];

  array.sort((el1, el2) => {
    let tmp: number = 0;

    if (order === 'asc') {
      if (typeof el1[sortBy] === 'number' || typeof el1[sortBy] === 'boolean') {
        tmp = (el1[sortBy] as number) - (el2[sortBy] as number);
      } else if (typeof el1[sortBy] === 'string') {
        tmp = (el1[sortBy] as string).localeCompare(el2[sortBy] as string);
      } else {
        // only left property from Student is grades: number[]
        let val1: number = (el1[sortBy] as number[])
          .reduce((g: number, sum: number) => sum + g, 0);
        let val2: number = (el2[sortBy] as number[])
          .reduce((g: number, sum: number) => sum + g, 0);

        val1 /= (el1[sortBy] as number[]).length;
        val2 /= (el2[sortBy] as number[]).length;

        tmp = (val1 as number) - (val2 as number);
      }

      return tmp;
    }
    // for descending order

    if (typeof el1[sortBy] === 'number' || typeof el1[sortBy] === 'boolean') {
      tmp = (el2[sortBy] as number) - (el1[sortBy] as number);
    } else if (typeof el1[sortBy] === 'string') {
      tmp = (el2[sortBy] as string).localeCompare(el1[sortBy] as string);
    } else {
      let val1: number = (el1[sortBy] as number[])
        .reduce((g: number, sum: number) => sum + g, 0);
      let val2: number = (el2[sortBy] as number[])
        .reduce((g: number, sum: number) => sum + g, 0);

      val1 /= (el1[sortBy] as number[]).length;
      val2 /= (el2[sortBy] as number[]).length;

      tmp = (val2 as number) - (val1 as number);
    }

    return tmp;
  });

  return array;
}

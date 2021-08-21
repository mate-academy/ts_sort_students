// describe Student type
// create and export SortType enum
// create SortOrder type

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'grades',
}

enum SortOrder {
  acs = 'acs',
  desc = 'desc',
}

export function sortStudents(
  students: object[],
  sortBy: string,
  order: string,
) : object[] {
  // write your function

  const copyStudents = students.map((student) => {
    return { ...student };
  });

  if (SortOrder.desc === order) {
    return copyStudents
      .sort((a: {[index: string]: any}, b: {[index: string]: any}) => {
        if (typeof b[sortBy] === 'string') {
          return b[sortBy]
            .localeCompare(a[sortBy]);
        }

        if (typeof b[sortBy] === 'object') {
          const first = a[sortBy]
            .reduce((result:number, currentNumber:number) => {
              return result + currentNumber;
            }, 0);
          const second = b[sortBy]
            .reduce((result:number, currentNumber:number) => {
              return result + currentNumber;
            }, 0);

          return second - first;
        }

        return b[sortBy] - a[sortBy];
      });
  }

  return copyStudents
    .sort((a: { [key: string]: any}, b: { [key: string]: any}) => {
      if (typeof b[sortBy] === 'string') {
        return a[sortBy].localeCompare(b[sortBy]);
      }

      if (typeof b[sortBy] === 'object') {
        const first = a[sortBy]
          .reduce((result:number, currentNumber:number) => {
            return result + currentNumber;
          }, 0);
        const second = b[sortBy]
          .reduce((result:number, currentNumber:number) => {
            return result + currentNumber;
          }, 0);

        return first - second;
      }

      return a[sortBy] - b[sortBy];
    });
}

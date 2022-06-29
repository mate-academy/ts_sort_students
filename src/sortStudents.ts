
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

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

function callback(arr:number[], arr1:number[]):number {
  return arr.reduce((prev, inn) => prev + inn) / arr.length
    - arr1.reduce((prev, inn) => prev + inn) / arr1.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
):Student[] | Error {
  const copy = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return order === 'asc'
        ? copy
          .sort((prevStudent, nextStudent) => prevStudent[sortBy]
            .localeCompare(nextStudent[sortBy]))
        : [...students]
          .sort((prevStudent, nextStudent) => nextStudent[sortBy]
            .localeCompare(prevStudent[sortBy]));

    case SortType.Age:
      return order === 'asc'
        ? copy
          .sort((prevStudent, nextStudent) => {
            return prevStudent[sortBy] - nextStudent[sortBy];
          })
        : [...students]
          .sort((prevStudent, nextStudent) => {
            return nextStudent[sortBy] - prevStudent[sortBy];
          });

    case SortType.AverageGrade:
      return order === 'asc'
        ? copy.sort((prevStudent, nextStudent) => {
          return callback(prevStudent[sortBy], nextStudent[sortBy]);
        })
        : copy.sort((prevStudent, nextStudent) => {
          return callback(nextStudent[sortBy], prevStudent[sortBy]);
        });

    case SortType.Married:
      return order === 'asc'
        ? copy
          .sort((prevStudent, nextStudent) => {
            return Number(prevStudent.married) - Number(nextStudent.married);
          })
        : copy
          .sort((prevStudent, nextStudent) => {
            return Number(nextStudent.married) - Number(prevStudent.married);
          });
    default:
      return new Error('something');
  }
}

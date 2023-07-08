
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

export function sortStudents(
  students:Student[],
  sortBy:SortType,
  order:SortOrder,
):Student[] {
  function getAVGage(ageArray:number[]): number {
    return ageArray.reduce((acc, red) => acc + red) / ageArray.length;
  }

  const sortOrder:number = order === 'asc' ? 1 : -1;

  switch (sortBy) {
    case 'name':
    case 'surname':
      return [...students].sort(
        (firstStudent, secStudent) => sortOrder * firstStudent[sortBy]
          .localeCompare(secStudent[sortBy]),
      );

    case 'age':
      return [...students].sort((firstStudent, secStudent) => sortOrder
        * (firstStudent[sortBy] - secStudent[sortBy]));

    case 'married':
      return [...students].sort((firstStudent, secStudent) => sortOrder
        * (+firstStudent[sortBy] - +secStudent[sortBy]));

    case 'grades':
      return [...students].sort((firstStudent, secStudent) => sortOrder
        * (getAVGage(firstStudent[sortBy]) - getAVGage(secStudent[sortBy])));

    default:
      return [...students];
  }
}

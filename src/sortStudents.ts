
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

export function sortStudents(
  students:Student[],
  sortBy:SortType,
  order:SortOrder,
):Student[] {
  function averageGrades(grades:number[]):number {
    return grades.reduce((sum, current) => sum + current) / grades.length;
  }

  const studentsCopy:Student[] = [...students];

  switch (sortBy) {
    case (SortType.Age):
    case (SortType.Married):

      return order === 'asc'
        ? studentsCopy.sort((firstStudent, secondStudent) => {
          return Number(firstStudent[sortBy]) - Number(secondStudent[sortBy]);
        })

        : studentsCopy.sort((firstStudent, secondStudent) => {
          return Number(secondStudent[sortBy]) - Number(firstStudent[sortBy]);
        });

    case (SortType.Name):
    case (SortType.Surname):

      return order === 'asc'
        ? studentsCopy.sort((firstStudent, secondStudent) => {
          return firstStudent[sortBy].localeCompare(secondStudent[sortBy]);
        })

        : studentsCopy.sort((firstStudent, secondStudent) => {
          return secondStudent[sortBy].localeCompare(firstStudent[sortBy]);
        });

    case (SortType.AverageGrade):
      return order === 'asc'
        ? studentsCopy.sort((firstStudent, secondStudent) => {
          return averageGrades(firstStudent[sortBy])
          - averageGrades(secondStudent[sortBy]);
        })

        : studentsCopy.sort((firstStudent, secondStudent) => {
          return averageGrades(secondStudent[sortBy])
          - averageGrades(firstStudent[sortBy]);
        });
    default:
      throw new Error('all is bad');
  }
}

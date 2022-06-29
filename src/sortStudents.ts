export interface Student {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'grades',
}

export type SortOrder = 'asc' | 'desc';

export
function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
)
  :Student[] {
  const sorted = JSON.parse(JSON.stringify(students));

  function average(set:number[]) :number {
    return set.reduce((firstItem, secondItem) => firstItem + secondItem)
    / set.length;
  }

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return order === 'desc'
        ? sorted.sort((one:Student, another:Student):number => another[sortBy]
          .localeCompare(one[sortBy]))
        : sorted.sort((one:Student, another:Student):number => one[sortBy]
          .localeCompare(another[sortBy]));

    case SortType.Age:
    case SortType.Married:
      return order === 'desc'
        ? sorted.sort((one:Student, another:Student):number => +another[sortBy]
          - +one[sortBy])
        : sorted.sort((one:Student, another:Student):number => +one[sortBy]
          - +another[sortBy]);

    case SortType.AverageGrade:
      return order === 'desc'
        ? sorted.sort((one:Student,
          another:Student):number => average(another[sortBy])
            - average(one[sortBy]))
        : sorted.sort((one:Student,
          another:Student):number => average(one[sortBy])
            - average(another[sortBy]));

    default:
      return sorted.sort();
  }
}

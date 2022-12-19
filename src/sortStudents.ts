
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

const getAverageNumber = (arr: number[]): number => {
  return arr.reduce((prev, current) => prev + current, 0) / arr.length;
};

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
):Student[] {
  let studentsCopy = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      studentsCopy = studentsCopy.sort((firstPerson, secondPerson) => {
        return order === 'asc'
          ? firstPerson[sortBy].localeCompare(secondPerson[sortBy])
          : secondPerson[sortBy].localeCompare(firstPerson[sortBy]);
      });

      break;

    case SortType.Age:
    case SortType.Married:
      studentsCopy = studentsCopy.sort((firstPerson, secondPerson) => {
        return order === 'asc'
          ? Number(firstPerson[sortBy]) - Number(secondPerson[sortBy])
          : Number(secondPerson[sortBy]) - Number(firstPerson[sortBy]);
      });

      break;

    case SortType.AverageGrade:
      studentsCopy = studentsCopy.sort((firstPerson, secondPerson) => {
        return order === 'asc'
          ? getAverageNumber(firstPerson.grades)
            - getAverageNumber(secondPerson.grades)
          : getAverageNumber(secondPerson.grades)
            - getAverageNumber(firstPerson.grades);
      });

      break;

    default:
      throw Error('This type doesn\'t exist');
  }

  return studentsCopy;
}

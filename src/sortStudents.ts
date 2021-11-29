
export interface Student {
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[],
  averageGrade?: number
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'grades',
}

export type SortOrder = 'asc' | 'desc';

function getAvg(person:Student):number {
  return person.grades.reduce((sum, el) => el + sum, 0)
  / person.grades.length;
}

export function sortStudents(students:Student[],
  sortBy:SortType, order:SortOrder):Student[] {
  const people = [...students];

  switch (sortBy) {
    case SortType.Age:
    case SortType.Married:
      people.sort((current, next) => (order === 'asc'
        ? +current[sortBy] - (+next[sortBy])
        : +next[sortBy] - (+current[sortBy])));
      break;

    case SortType.Name:
    case SortType.Surname:
      people.sort((current, next) => (order === 'asc'
        ? current[sortBy].localeCompare(next[sortBy])
        : next[sortBy].localeCompare(current[sortBy])));
      break;

    case SortType.AverageGrade:
      people.sort((current, next) => (order === 'asc'
        ? getAvg(current) - getAvg(next)
        : getAvg(next) - getAvg(current)));
      break;

    default:
      return people;
  }

  return people;
}

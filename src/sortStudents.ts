/* eslint-disable max-len */

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
  sortBy: SortType,
  order: SortOrder,
):Student[] {
  const rezult:Student[] = [...students];

  function averGrade(person: Student): number {
    return person.grades.reduce((a, b) => a + b) / person.grades.length;
  }

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return order === 'asc'
        ? rezult.sort((people, people1) => people[sortBy].localeCompare(people1[sortBy]))
        : rezult.sort((people, people1) => people1[sortBy].localeCompare(people[sortBy]));

    case SortType.Age:
    case SortType.Married:
      return order === 'asc'
        ? rezult.sort((people, people1) => +people[sortBy] - +people1[sortBy])
        : rezult.sort((people, people1) => +people1[sortBy] - +people[sortBy]);

    case SortType.AverageGrade:
      return order === 'asc'
        ? rezult.sort((people, people1) => averGrade(people) - averGrade(people1))
        : rezult.sort((people, people1) => averGrade(people1) - averGrade(people));

    default:
  }

  return rezult;
}

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

function getAverageValue(numbers: number[]): number {
  return numbers.reduce((prev, curr) => prev + curr) / numbers.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const sortedListOfStudents: Student[] = [...students];

  return sortedListOfStudents.sort((person: Student, prevPerson: Student) => {
    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return (order === 'asc')
          ? person[sortBy].localeCompare(prevPerson[sortBy])
          : prevPerson[sortBy].localeCompare(person[sortBy]);

      case SortType.Age:
      case SortType.Married:
        return (order === 'asc')
          ? Number(person[sortBy]) - Number(prevPerson[sortBy])
          : Number(prevPerson[sortBy]) - Number(person[sortBy]);

      default:
        return (order === 'asc')
          ? getAverageValue(person.grades) - getAverageValue(prevPerson.grades)
          : getAverageValue(prevPerson.grades) - getAverageValue(person.grades);
    }
  });
}

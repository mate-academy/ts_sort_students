
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

export type SortOrder = ('asc' | 'desc');

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const studentsCopy = students.map((person: Student) => ({ ...person }));
  const reducer = (prev: number, curnt: number):number => prev + curnt;

  studentsCopy.sort((person1: Student, person2: Student): number => {
    switch (sortBy) {
      case SortType.Name:
        switch (order) {
          case 'asc':
            return person1[sortBy].localeCompare(person2[sortBy]);
          case 'desc':
            return person2[sortBy].localeCompare(person1[sortBy]);
          default: return 0;
        }

      case SortType.Surname:
        switch (order) {
          case 'asc':
            return person1[sortBy].localeCompare(person2[sortBy]);
          case 'desc':
            return person2[sortBy].localeCompare(person1[sortBy]);
          default: return 0;
        }

      case SortType.Age:
        switch (order) {
          case 'asc':
            return person1[sortBy] - person2[sortBy];
          case 'desc':
            return person2[sortBy] - person1[sortBy];
          default: return 0;
        }

      case SortType.Married:
        switch (order) {
          case 'asc':
            return Number(person1[sortBy]) - Number(person2[sortBy]);
          case 'desc':
            return Number(person2[sortBy]) - Number(person1[sortBy]);
          default: return 0;
        }

      case SortType.AverageGrade:

        switch (order) {
          case 'asc':
            return (person1[sortBy].reduce(reducer)
              / person1[sortBy].length)
                - (person2[sortBy].reduce(reducer)
                  / person2[sortBy].length);
          case 'desc':
            return (person2[sortBy].reduce(reducer)
              / person2[sortBy].length)
                - (person1[sortBy].reduce(reducer)
                  / person1[sortBy].length);
          default: return 0;
        }

      default: return 0;
    }
  });

  return studentsCopy;
}

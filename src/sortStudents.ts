
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

export type SortOrder = 'asc' | 'desc';

export function sortStudents(students: Student[], sortBy: SortType, order: SortOrder): Student[] { // eslint-disable-line
  const copyStudents: Student[] = [...students];

  return copyStudents.sort((pref: Student, now: Student) => {
    let one: number;
    let two: number;

    switch (sortBy) {
      case 'grades':
        one = pref[sortBy]
          .reduce((acum: number, mark: number) => acum + mark);

        two = now[sortBy]
          .reduce((acum: number, mark: number) => acum + mark);

        return (order === 'asc')
          ? (one / pref[sortBy].length) - (two / now[sortBy].length)
          : (two / now[sortBy].length) - (one / pref[sortBy].length);

      case 'age':
        return (order === 'asc')
          ? pref[sortBy] - now[sortBy]
          : now[sortBy] - pref[sortBy];

      case 'married':
        one = (pref[sortBy])
          ? 1
          : 0;

        two = (now[sortBy])
          ? 1
          : 0;

        return (order === 'asc')
          ? one - two
          : two - one;

      case 'name':
        return (order === 'asc')
          ? pref[sortBy].localeCompare(now[sortBy])
          : now[sortBy].localeCompare(pref[sortBy]);

      case 'surname':
        return (order === 'asc')
          ? pref[sortBy].localeCompare(now[sortBy])
          : now[sortBy].localeCompare(pref[sortBy]);

      default:
        throw new Error(`Fix mistake in ${sortBy}`);
    }
  });
}

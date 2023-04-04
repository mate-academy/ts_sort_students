
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
    if (sortBy === 'grades') {
      const firstSum = pref[sortBy]
        .reduce((acumulator: number, mark: number) => acumulator + mark);
      const secondSum = now[sortBy]
        .reduce((acumulator: number, mark: number) => acumulator + mark);

      return (order === 'asc')
        ? (firstSum / pref[sortBy].length) - (secondSum / now[sortBy].length)
        : (secondSum / now[sortBy].length) - (firstSum / pref[sortBy].length);
    }

    if (sortBy === 'age') {
      return (order === 'asc')
        ? pref[sortBy] - now[sortBy]
        : now[sortBy] - pref[sortBy];
    }

    if (sortBy === 'married') {
      const one = (pref[sortBy])
        ? 1
        : 0;

      const two = (now[sortBy])
        ? 1
        : 0;

      return (order === 'asc')
        ? one - two
        : two - one;
    }

    return (order === 'asc')
      ? pref[sortBy].localeCompare(now[sortBy])
      : now[sortBy].localeCompare(pref[sortBy]);
  });
}

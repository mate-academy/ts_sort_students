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

export function sortStudents(students: Student[],
  sortBy: SortType, order: SortOrder): Student[] {
  function average(person: Student): number {
    const sum: number = person.grades.reduce((accum: number, curnt: number) => {
      return accum + curnt;
    });

    return sum / person.grades.length;
  }

  const studentsArr = [...students];

  studentsArr.sort((a: Student, b: Student): number => {
    if (sortBy === 'grades') {
      if (order === 'desc') {
        return average(b) - average(a);
      }

      return average(a) - average(b);
    }

    if (sortBy === 'name' || sortBy === 'surname') {
      if (order === 'asc') {
        return a[sortBy].localeCompare(b[sortBy]);
      }

      return b[sortBy].localeCompare(a[sortBy]);
    }

    if (sortBy === 'age') {
      if (order === 'asc') {
        return a[sortBy] - b[sortBy];
      }

      return b[sortBy] - a[sortBy];
    }

    return Number(b[sortBy]) - Number(a[sortBy]);
  });

  return studentsArr;
}


export interface Student {
  name:string,
  surname:string,
  age: number,
  married: boolean,
  grades:number[],
}

export enum SortType {
  Name='NAME',
  Surname='SURNAME',
  Age='AGE',
  Married='MARRIED',
  AverageGrade='AVERAGE_GRADE',
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

function getAverage(grades:number[]):number {
  return grades.reduce((prev, cur) => {
    return prev + cur;
  }, 0) / grades.length;
}

export function sortStudents(
  students:Student[],
  sortBy:SortType,
  order:SortOrder,
):Student[] {
  const copyStudents:Student[] = Array.from(students);
  const sortOrder = order === 'desc' ? -1 : 1;

  copyStudents.sort((st1, st2):number => {
    switch (sortBy) {
      case SortType.Name:
        return sortOrder * st1.name.localeCompare(st2.name);

      case SortType.Surname:
        return sortOrder * st1.surname.localeCompare(st2.surname);

      case SortType.Age:
        return sortOrder * (st1.age - st2.age);

      case SortType.Married:
        if (st1.married === st2.married) {
          return 0;
        }

        return sortOrder * (st1.married ? 1 : -1);

      case SortType.AverageGrade:
        return sortOrder * (getAverage(st1.grades) - getAverage(st2.grades));
      default:
        return 0;
    }
  });

  return copyStudents;
}

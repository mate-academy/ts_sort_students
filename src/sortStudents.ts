export interface Student {
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[],
}

export enum SortType {
  Name,
  Surname,
  Age,
  Married,
  AverageGrade,
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

export function nameSurnameAge(obj: Student[]): string[] {
  const res: string[] = [];

  for (let i: number = 0; i < obj.length; i += 1) {
    const person: string = `${obj[i].name} ${obj[i].surname} ${obj[i].age}`;

    res.push(person);
  }

  return res;
}

export function sortStudents(
  std: Student[],
  srtBy: SortType,
  ordr: SortOrder,
): string[] {
  let res: string[] = [];

  if (srtBy === SortType.Name && ordr === 'asc') {
    std.sort((a, b) => {
      return (a.name > b.name) ? 1 : -1;
    });
    res = nameSurnameAge(std);
  } else if (srtBy === SortType.Name && ordr === 'desc') {
    std.sort((a, b) => {
      return (a.name < b.name) ? 1 : -1;
    });
    res = nameSurnameAge(std);
  } else if (srtBy === SortType.Surname && ordr === 'asc') {
    std.sort((a, b) => {
      return (a.surname > b.surname) ? 1 : -1;
    });
    res = nameSurnameAge(std);
  } else if (srtBy === SortType.Surname && ordr === 'desc') {
    std.sort((a, b) => {
      return (a.surname < b.surname) ? 1 : -1;
    });
    res = nameSurnameAge(std);
  } else if (srtBy === SortType.Age && ordr === 'asc') {
    std.sort((a, b) => {
      return (a.age > b.age) ? 1 : -1;
    });
    res = nameSurnameAge(std);
  } else if (srtBy === SortType.Age && ordr === 'desc') {
    std.sort((a, b) => {
      return (a.age < b.age) ? 1 : -1;
    });
    res = nameSurnameAge(std);
  } else if (srtBy === SortType.Married && ordr === 'asc') {
    std.sort((a, b) => {
      return Number(a.married) - Number(b.married);
    });
    res = nameSurnameAge(std);
  } else if (srtBy === SortType.Married && ordr === 'desc') {
    std.sort((a, b) => {
      return Number(b.married) - Number(a.married);
    });
    res = nameSurnameAge(std);
  } else {
    res = ['false'];
  }

  return res;
}

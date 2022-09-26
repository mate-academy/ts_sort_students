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

export function nameSurnameAge(obj: Student[]): string[] {
  const res: string[] = [];

  for (let i: number = 0; i < obj.length; i += 1) {
    const person: string = `${obj[i].name} ${obj[i].surname} ${obj[i].age}`;

    res.push(person);
  }

  return res;
}

export function nameSurnameGrades(obj: Student[]): string[] {
  const res: string[] = [];

  for (let i: number = 0; i < obj.length; i += 1) {
    const person: string
    = `${obj[i].name} ${obj[i].surname} [${obj[i].grades}]`;

    res.push(person);
  }

  return res;
}

export function avgGrades(grades: number[]): number {
  let res: number = 0;

  for (let i: number = 0; i < grades.length; i += 1) {
    res += grades[i];
  }

  return res / grades.length;
}

export function sortStudents(
  std: Student[],
  srtBy: SortType,
  ordr: SortOrder,
): string[] {
  let res: string[] = [];

  switch (srtBy) {
    case SortType.Name:
    case SortType.Surname:
      std.sort((a, b) => (ordr === 'asc'
        ? a[srtBy].localeCompare(b[srtBy])
        : b[srtBy].localeCompare(a[srtBy])));
      res = nameSurnameAge(std);
      break;

    case SortType.Age:
    case SortType.Married:
      std.sort((a, b) => (ordr === 'asc'
        ? Number(a[srtBy]) - Number(b[srtBy])
        : Number(b[srtBy]) - Number(a[srtBy])));
      res = nameSurnameAge(std);
      break;

    case SortType.AverageGrade:
      std.sort((a, b) => (ordr === 'asc'
        ? avgGrades(a.grades) - avgGrades(b.grades)
        : avgGrades(b.grades) - avgGrades(a.grades)));
      res = nameSurnameGrades(std);
      break;

    default: break;
  }

  return res;
}

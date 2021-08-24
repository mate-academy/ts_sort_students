
type Student = {
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[],
};

export enum SortType {
  'Name' = 1,
  'Surname' = 2,
  'Age' = 3,
  'Married' = 4,
  'AverageGrade' = 5,
}

type SortOrder = 'asc' | 'desc';

export function sortStudents(students: Student[],
  sortBy: SortType, order: SortOrder): Student[] {
  const resultArr: Student[] = [...students];

  switch (sortBy) {
    case (SortType.AverageGrade):
      resultArr.sort((a: Student, b: Student): number => {
        if (order === 'desc') {
          return (b.grades.reduce((p, c) => p + c, 0) / b.grades.length)
          - (a.grades.reduce((p, c) => p + c, 0) / a.grades.length);
        }

        return (a.grades.reduce((p, c) => p + c, 0) / a.grades.length)
          - (b.grades.reduce((p, c) => p + c, 0) / b.grades.length);
      });
      break;
    case (SortType.Name):
      resultArr.sort((a: Student, b: Student): number => {
        if (order === 'desc') {
          b.name.localeCompare(a.name);
        }

        return a.name.localeCompare(b.name);
      });
      break;
    case (SortType.Surname):
      resultArr.sort((a: Student, b: Student): number => {
        if (order === 'desc') {
          return b.surname.localeCompare(a.surname);
        }

        return a.surname.localeCompare(b.surname);
      });
      break;
    case (SortType.Age):
      resultArr.sort((a: Student, b: Student): number => {
        if (order === 'desc') {
          return b.age - a.age;
        }

        return a.age - b.age;
      });
      break;
    case (SortType.Married):
      resultArr.sort((a: Student, b: Student): number => {
        if (a.married === b.married) {
          return 0;
        }

        if (order === 'desc') {
          return b.married ? 1 : -1;
        }

        return a.married ? 1 : -1;
      });
      break;
  }

  return resultArr;
}

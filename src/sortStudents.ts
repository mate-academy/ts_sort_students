// describe Student type
// create and export SortType enum
// create SortOrder type

interface Student {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];
}

type Students = Student[];

export enum SortType {
  Name,
  Surname,
  Age,
  Married,
  AverageGrade
}

type SortOrder = 'asc' | 'desc';

export function sortStudents(students: Students, sortBy: SortType, order: SortOrder) {
  switch (sortBy) {
    case SortType.Name:
      switch (order) {
        case 'asc':
          return students
            .map(s=>s)
            .sort((a, b) => a.name.localeCompare(b.name));
        case 'desc':
          return students
            .map(s=>s)
            .sort((a, b) => b.name.localeCompare(a.name));
      }
    case SortType.Surname:
      switch (order) {
        case 'asc':
          return students
            .map(s=>s)
            .sort((a, b) => a.surname.localeCompare(b.surname));
        case 'desc':
          return students
            .map(s=>s)
            .sort((a, b) => b.surname.localeCompare(a.surname));
      }
    case SortType.Age:
      switch (order) {
        case 'asc':
          return students
            .map(s=>s)
            .sort((a, b) => a.age - b.age);
        case 'desc':
          return students
            .map(s=>s)
            .sort((a, b) => b.age - a.age);
      }
    case SortType.Married:
      switch (order) {
        case 'asc':
          return students
            .map(s=>s)
            .sort((a, b) => +a.married - +b.married);
        case 'desc':
          return students
            .map(s=>s)
            .sort((a, b) => +b.married - +a.married);
      }
    case SortType.AverageGrade:
      switch (order) {
        case 'asc':
          return students
            .map(s=>s)
            .sort((a, b) => {
              const averageA = a.grades.reduce((acc, curr) =>acc + curr)/a.grades.length;
              const averageB = b.grades.reduce((acc, curr) =>acc + curr)/b.grades.length;
              return averageA - averageB;
            });
        case 'desc':
          return students
            .map(s=>s)
            .sort((a, b) => {
              const averageA = a.grades.reduce((acc, curr) =>acc + curr)/a.grades.length;
              const averageB = b.grades.reduce((acc, curr) =>acc + curr)/b.grades.length;
              return averageB - averageA;
            });
      }
  }
}

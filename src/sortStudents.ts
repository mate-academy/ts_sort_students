export interface Student {
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[],
}

// const stus: Student[] = [
//   {
//     name: 'Diana',
//     surname: 'Dorsey',
//     age: 24,
//     married: false,
//     grades: [3, 3, 4, 5, 4, 3, 5, 5],
//   },
//   {
//     name: 'Christina',
//     surname: 'Branscome',
//     age: 23,
//     married: true,
//     grades: [4, 4, 4, 5, 5, 5, 5, 5],
//   },
//   {
//     name: 'Willie',
//     surname: 'Barrera',
//     age: 22,
//     married: false,
//     grades: [3, 5, 5, 3, 3, 5, 4, 4],
//   },
//   {
//     name: 'Douglas',
//     surname: 'Paez',
//     age: 23,
//     married: true,
//     grades: [5, 5, 5, 4, 5, 5, 5, 5],
//   },
//   {
//     name: 'Richard',
//     surname: 'Hall',
//     age: 23,
//     married: false,
//     grades: [3, 2, 4, 5, 4, 3, 3, 3],
//   },
//   {
//     name: 'Dale',
//     surname: 'Gandy',
//     age: 23,
//     married: false,
//     grades: [5, 3, 3, 3, 3, 5, 4, 3, 4],
//   },
//   {
//     name: 'Lillian',
//     surname: 'Quinn',
//     age: 23,
//     married: false,
//     grades: [3, 4, 3, 4, 4, 4, 5, 2, 3],
//   },
//   {
//     name: 'Jessica',
//     surname: 'Buxton',
//     age: 26,
//     married: true,
//     grades: [5, 5, 4, 5, 4, 4, 4, 4, 5, 4, 5, 4],
//   },
//   {
//     name: 'Pamela',
//     surname: 'Casillas',
//     age: 24,
//     married: false,
//     grades: [4, 5, 4, 5, 5, 4, 3, 2, 3, 3, 3, 2],
//   },
//   {
//     name: 'Glenn',
//     surname: 'Thompson',
//     age: 22,
//     married: false,
//     grades: [5, 5, 5, 5, 5, 5, 5, 5, 4, 4, 3, 2],
//   },
// ];

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'grades',
}

export type SortOrder = 'asc' | 'desc';

type ReduceCallback = (previos: number, current: number) => number;

const reduceCallback: ReduceCallback = (previos, current) => {
  return previos + current;
};

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const newStudents: Student[] = [...students];

  newStudents.sort((studentA, studentB) => {
    switch (sortBy) {
      case SortType.Name:
        if (order === 'desc') {
          return studentB.name.localeCompare(studentA.name);
        }

        return studentA.name.localeCompare(studentB.name);
      case SortType.Surname:
        if (order === 'desc') {
          return studentB.surname.localeCompare(studentA.surname);
        }

        return studentA.surname.localeCompare(studentB.surname);
      case SortType.Age:
        if (order === 'desc') {
          return studentB.age - studentA.age;
        }

        return studentA.age - studentB.age;
      case SortType.Married:
        if (order === 'desc') {
          return +studentB.married - +studentA.married;
        }

        return +studentA.married - +studentB.married;
      case SortType.AverageGrade:

        if (order === 'desc') {
          return (studentB.grades.reduce(reduceCallback, 0)
                    / studentB.grades.length)
          - (studentA.grades.reduce(reduceCallback, 0)
          / studentA.grades.length);
        }

        return (studentA.grades.reduce(reduceCallback, 0)
                    / studentA.grades.length)
          - (studentB.grades.reduce(reduceCallback, 0)
          / studentB.grades.length);
      default:
        return 0;
    }
  });

  return newStudents;
}

// console.log(sortStudents(stus, SortType.Name));

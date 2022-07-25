
export interface Student {
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[],
}

export enum SortType {
  Name = 'Name',
  Surname = 'Surname',
  Age = 'Age',
  Married = 'Married',
  AverageGrade = 'AverageGrade',
}

export type SortOrder = 'asc' | 'desc';

function getAverageGrade(grade: number[]):number {
  return grade.reduce((prev, curr) => prev + curr) / grade.length;
}

export function sortStudents(
  students: Student[],
  sortBy:SortType,
  order: SortOrder,
): Student[] {
  let result: Student[] = [...students];

  result = result.sort((studentOne, studentTwo) => {
    switch (sortBy) {
      case SortType.Name:
        if (order === 'asc') {
          return studentOne.name.localeCompare(studentTwo.name);
        }

        return studentOne.name.localeCompare(studentTwo.name);

      case SortType.Age:
        if (order === 'asc') {
          return studentOne.age - studentTwo.age;
        }

        return studentTwo.age - studentOne.age;

      case SortType.Surname:
        if (order === 'asc') {
          return studentOne.surname.localeCompare(studentTwo.surname);
        }

        return studentTwo.surname.localeCompare(studentOne.surname);

      case SortType.Married:
        if (order === 'asc') {
          return Number(studentOne.married) - Number(studentTwo.married);
        }

        return Number(studentTwo.married) - Number(studentOne.married);

      case SortType.AverageGrade: {
        const studentOneAverageGrade = getAverageGrade(studentOne.grades);

        const studentTwoAverageGrade = getAverageGrade(studentTwo.grades);

        if (order === 'asc') {
          return studentOneAverageGrade - studentTwoAverageGrade;
        }

        return studentTwoAverageGrade - studentOneAverageGrade;
      }

      default:
        throw new Error('Invalid SortType!');
    }
  });

  return result;
}

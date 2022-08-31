
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

function getAver(grades: number[]): number {
  const average = grades.reduce((sum, iteracionItem) => sum + iteracionItem, 0);

  return average / grades.length;
}

export function sortStudents(
  students: Student,
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copy: Student[] = Object.assign([], students);

  switch (sortBy) {
    case SortType.Name:
      return order === 'asc'
        ? copy.sort((firstStudent, secondStudent) => {
          return firstStudent.name.localeCompare(secondStudent.name);
        })
        : copy.sort((firstStudent, secondStudent) => {
          return secondStudent.name.localeCompare(firstStudent.name);
        });

    case SortType.Surname:
      return order === 'asc'
        ? copy.sort((firstStudent, secondStudent) => {
          return firstStudent.surname.localeCompare(secondStudent.surname);
        })
        : copy.sort((firstStudent, secondStudent) => {
          return secondStudent.surname.localeCompare(firstStudent.surname);
        });

    case SortType.Age:
      return order === 'asc'
        ? copy.sort((firstStudent, secondStudent) => {
          return firstStudent.age - secondStudent.age;
        })
        : copy.sort((firstStudent, secondStudent) => {
          return secondStudent.age - firstStudent.age;
        });

    case SortType.Married:
      return order === 'asc'
        ? copy.sort((firstStudent, secondStudent) => {
          return Number(firstStudent.married) - Number(secondStudent.married);
        })
        : copy.sort((firstStudent, secondStudent) => {
          return Number(secondStudent.married) - Number(firstStudent.married);
        });

    case SortType.AverageGrade:
      return order === 'asc'
        ? copy.sort((firstStud, secondStud) => {
          const aver = getAver(firstStud.grades) - getAver(secondStud.grades);

          return aver;
        })
        : copy.sort((firstStud, secondStud) => {
          const aver = getAver(secondStud.grades) - getAver(firstStud.grades);

          return aver;
        });

    default:
      return copy;
  }
}

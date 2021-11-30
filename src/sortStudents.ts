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

export type SortOrder = 'asc'|'desc';

function findAverage(grades: number[]): number {
  return grades.reduce((prev, grade) => prev + grade) / grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): object[] {
  const studentsCopy = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      studentsCopy.sort((person1, person2) => {
        return order === 'asc'
          ? person1[sortBy].localeCompare(person2[sortBy])
          : person2[sortBy].localeCompare(person1[sortBy]);
      });

      break;

    case SortType.Age:
      studentsCopy.sort((person1, person2) => {
        return order === 'asc'
          ? person1.age - person2.age
          : person2.age - person1.age;
      });

      break;

    case SortType.Married:
      studentsCopy.sort((person1, person2) => {
        if (person1.married === person2.married) {
          return 0;
        }

        if (order === 'asc') {
          return person1.married ? 1 : -1;
        }

        return person1.married ? -1 : 1;
      });

      break;

    case SortType.AverageGrade:
      studentsCopy.sort((person1, person2) => {
        const firstPersonAverageGrades = findAverage(person1.grades);
        const secondPersonAverageGrades = findAverage(person2.grades);

        return order === 'asc'
          ? firstPersonAverageGrades - secondPersonAverageGrades
          : secondPersonAverageGrades - firstPersonAverageGrades;
      });

      break;

    default:

      return studentsCopy;
  }

  return studentsCopy;
}

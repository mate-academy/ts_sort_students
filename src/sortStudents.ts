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
  AverageGrade = 'averageGrade'
}

export type SortOrder = 'asc' | 'desc';

function getAverage(student: Student): number {
  return student.grades.reduce((prev, current) => prev + current, 0)
    / student.grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const allStudents = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      allStudents.sort((prev: Student, current: Student) => {
        return order === 'asc'
          ? prev[sortBy].localeCompare(current[sortBy])
          : current[sortBy].localeCompare(prev[sortBy]);
      });
      break;

    case SortType.Age:
      allStudents.sort((prev: Student, current: Student) => {
        return order === 'asc'
          ? prev.age - current.age
          : current.age - prev.age;
      });
      break;

    case SortType.Married:
      allStudents.sort((prev: Student, current: Student) => {
        return order === 'asc'
          ? Number(prev.married) - Number(current.married)
          : Number(current.married) - Number(prev.married);
      });
      break;

    case SortType.AverageGrade:
      allStudents.sort((prev: Student, current: Student): number => {
        const averagePrev = getAverage(prev);
        const averageCurrent = getAverage(current);

        return order === 'asc'
          ? averagePrev - averageCurrent
          : averageCurrent - averagePrev;
      });
      break;

    default:
      return allStudents;
  }

  return allStudents;
}

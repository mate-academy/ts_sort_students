export interface Student {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];
}

export enum SortType {
  Name,
  Surname,
  Age,
  Married,
  AverageGrade,
}

export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  let callback: (prev: Student, cur: Student) => number;

  const sortedStudents = [...students];

  function calcAvg(student: Student): number {
    return student.grades.reduce((acc, grade) => acc + grade, 0)
      / student.grades.length;
  }

  switch (sortBy) {
    case SortType.Name:
      callback = (prev, cur): number => prev.name.localeCompare(cur.name);

      break;

    case SortType.Surname:
      callback = (prev, cur): number => prev.surname.localeCompare(cur.surname);

      break;

    case SortType.Age:
      callback = (prev, cur): number => prev.age - cur.age;

      break;

    case SortType.Married:
      callback = (prev, cur): number => {
        if (prev.married === cur.married) {
          return 0;
        }

        return prev.married ? 1 : -1;
      };

      break;

    case SortType.AverageGrade:
      callback = (prev, cur): number => {
        const FirstStudentAvg = calcAvg(prev);
        const SecondStudentAvg = calcAvg(cur);

        return FirstStudentAvg - SecondStudentAvg;
      };
      break;

    default:
      throw new Error();
  }

  sortedStudents.sort((prev, cur) => {
    return order === 'asc'
      ? callback(prev, cur)
      : callback(cur, prev);
  });

  return sortedStudents;
}

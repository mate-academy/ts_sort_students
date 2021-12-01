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

function getAverageGrade(students: Student): number {
  return (students.grades.reduce(
    (accum: number, current: number) : number => {
      return accum + current;
    },
  ) / students.grades.length
  );
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const sortedStudents: Student[] = [...students];
  const isDescending: boolean = order === 'desc';

  switch (sortBy) {
    case SortType.Name: {
      sortedStudents.sort((a: Student, b: Student) : number => {
        return isDescending
          ? b.name.localeCompare(a.name)
          : a.name.localeCompare(b.name);
      });
      break;
    }

    case SortType.Surname: {
      sortedStudents.sort((a: Student, b: Student) : number => {
        return isDescending
          ? b.surname.localeCompare(a.surname)
          : a.surname.localeCompare(b.surname);
      });
      break;
    }

    case SortType.Age: {
      sortedStudents.sort((a: Student, b: Student) : number => {
        return isDescending ? b.age - a.age : a.age - b.age;
      });
      break;
    }

    case SortType.Married: {
      sortedStudents.sort((a: Student, b: Student) : number => {
        return isDescending
          ? Number(b.married) - Number(a.married)
          : Number(a.married) - Number(b.married);
      });
      break;
    }

    case SortType.AverageGrade: {
      sortedStudents.sort((a: Student, b: Student) : number => {
        return order === 'asc'
          ? getAverageGrade(a) - getAverageGrade(b)
          : getAverageGrade(b) - getAverageGrade(a);
      });
      break;
    }

    default: break;
  }

  return sortedStudents;
}

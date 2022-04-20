// import { NumberLiteralTypeAnnotation } from '@babel/types';

export interface Student {
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[],
}

export enum SortType {
  Name,
  Surname,
  Age,
  Married,
  AverageGrade,
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

type CompareFunc = (student1?: Student, student2?: Student) => number;

function getSorterBy(property: SortType, order: SortOrder = 'asc')
  : CompareFunc {
  let compareProperties: CompareFunc = () => 0;

  switch (property) {
    case SortType.Name: {
      compareProperties = (student1, student2): number => {
        return student1.name.localeCompare(student2.name);
      };

      break;
    }

    case SortType.Surname: {
      compareProperties = (student1, student2): number => {
        return student1.surname.localeCompare(student2.surname);
      };

      break;
    }

    case SortType.Age: {
      compareProperties = (student1, student2): number => {
        return student1.age - student2.age;
      };

      break;
    }

    case SortType.Married: {
      compareProperties = (student1, student2): number => {
        const married1 = student1.married
          ? 1
          : 0;
        const married2 = student2.married
          ? 1
          : 0;

        return married1 - married2;
      };

      break;
    }

    case SortType.AverageGrade: {
      compareProperties = (student1, student2): number => {
        const sum1 = student1.grades
          .reduce((total, current) => total + current, 0);
        const sum2 = student2.grades
          .reduce((total, current) => total + current, 0);
        const avg1 = sum1 / student1.grades.length;
        const avg2 = sum2 / student2.grades.length;

        return avg1 - avg2;
      };

      break;
    }

    default: {
      break;
    }
  }

  const sorter: CompareFunc = (student1, student2) => {
    const copmareResult: number = compareProperties(student1, student2);

    return order === 'asc'
      ? copmareResult
      : copmareResult * -1;
  };

  return sorter;
}

export function sortStudents(students: Student[], sortBy: SortType,
  order: SortOrder): Student[] {
  const sortedStudents: Student[] = [...students];

  const sorter: CompareFunc = getSorterBy(sortBy, order);

  sortedStudents.sort(sorter);

  return sortedStudents;
}

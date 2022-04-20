// import { NumberLiteralTypeAnnotation } from '@babel/types';

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
  AverageGrade = 'grades',
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

type CompareFunc = (student1?: Student, student2?: Student) => number;

function getSorterBy(property: SortType, order: SortOrder = 'asc')
  : CompareFunc {
  let compareProperties: CompareFunc = () => 0;

  switch (property) {
    case SortType.Name:
    case SortType.Surname:
      compareProperties = (student1, student2): number => {
        return student1[property].localeCompare(student2[property]);
      };

      break;

    case SortType.Married:
    case SortType.Age:
      compareProperties = (student1, student2): number => {
        return Number(student1[property]) - Number(student2[property]);
      };

      break;

    case SortType.AverageGrade:
      compareProperties = (student1, student2): number => {
        const sum1 = student1[property]
          .reduce((total, current) => total + current, 0);
        const sum2 = student2[property]
          .reduce((total, current) => total + current, 0);
        const avg1 = sum1 / student1[property].length;
        const avg2 = sum2 / student2[property].length;

        return avg1 - avg2;
      };

      break;

    default:
      break;
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

export interface Student {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];
  averageGrade?:number;
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'averageGrade',
}

export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const sortedStudents = [...students];

  sortedStudents.sort((a, b) => {
    let aValue: number | boolean | string;
    let bValue: number | boolean | string;

    if (sortBy === SortType.AverageGrade) {
      const average = (grades: number[]):number => grades
        .reduce((acc, grade) => acc + grade, 0) / grades.length;

      aValue = average(a.grades);
      bValue = average(b.grades);
    } else {
      aValue = a[sortBy];
      bValue = b[sortBy];
    }

    let comparison = 0;

    switch (typeof aValue) {
      case 'string':
        comparison = (aValue as string).localeCompare(bValue as string);
        break;
      case 'number':
        comparison = (aValue as number) - (bValue as number);
        break;
      case 'boolean':
        if (aValue === bValue) {
          comparison = 0;
        } else {
          comparison = aValue ? 1 : -1;
        }
        break;
      default:
    }

    return order === 'desc' ? comparison * -1 : comparison;
  });

  return sortedStudents;
}

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

export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const sortedStudents = [...students];

  function sortArray(array: number[]): number {
    return array.reduce((sum, el) => sum + el) / array.length;
  }

  if (order === 'asc') {
    switch (sortBy) {
      case SortType.Name:
        sortedStudents.sort(
          (a: Student, b: Student) => a.name.localeCompare(b.name),
        );
        break;
      case SortType.Surname:
        sortedStudents.sort(
          (a: Student, b: Student) => a.surname.localeCompare(b.surname),
        );
        break;
      case SortType.Age:
        sortedStudents.sort((a: Student, b: Student) => a.age - b.age);
        break;
      case SortType.Married:
        sortedStudents.sort(
          (a: Student, b: Student) => Number(a.married) - Number(b.married),
        );
        break;
      case SortType.AverageGrade:
        sortedStudents.sort(
          (a: Student, b: Student) => sortArray(a.grades) - sortArray(b.grades),
        );
        break;
      default:
        throw new Error('Error...');
    }
  } else {
    switch (sortBy) {
      case SortType.Name:
        sortedStudents.sort(
          (a: Student, b: Student) => b.name.localeCompare(a.name),
        );
        break;
      case SortType.Surname:
        sortedStudents.sort(
          (a: Student, b: Student) => b.surname.localeCompare(a.surname),
        );
        break;
      case SortType.Age:
        sortedStudents.sort((a: Student, b: Student) => b.age - a.age);
        break;
      case SortType.Married:
        sortedStudents.sort(
          (a: Student, b: Student) => Number(b.married) - Number(a.married),
        );
        break;
      case SortType.AverageGrade:
        sortedStudents.sort(
          (a: Student, b: Student) => sortArray(b.grades) - sortArray(a.grades),
        );
        break;
      default:
        throw new Error('Error...');
    }
  }

  return sortedStudents;
}

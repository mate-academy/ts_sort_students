
export interface Student {
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: Array<number>,
}

export enum SortType {
  Name = 'Name',
  Surname = 'Surname',
  Age = 'Age',
  Married = 'Married',
  AverageGrade = 'AverageGrade',
}

export type SortOrder = 'asc' | 'desc';

export function sortStudents(students: Student[],
  sortBy: SortType, order: SortOrder): Student[] {
  const asc = order === 'asc';
  const copyOfStudents = [...students];
  const averageOfGrades = (grades: Array<number>): number => {
    return grades.reduce(
      (acc: number, grade: number) => acc + grade, 0,
    ) / grades.length;
  };

  copyOfStudents.sort((a, b) => {
    let comparison = 0;

    switch (sortBy) {
      case SortType.Name:
        comparison = a.name.localeCompare(b.name);
        break;
      case SortType.Surname:
        comparison = a.surname.localeCompare(b.surname);
        break;
      case SortType.Age:
        comparison = a.age - b.age;
        break;
      case SortType.Married:
        comparison = Number(a.married) - Number(b.married);
        break;
      case SortType.AverageGrade:
        comparison = averageOfGrades(a.grades) - averageOfGrades(b.grades);
        break;
      default:
        break;
    }

    return asc ? comparison : -comparison;
  });

  return copyOfStudents;
}

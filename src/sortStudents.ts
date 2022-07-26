
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
  AverageGrade
}

export type SortOrder = 'asc' | 'desc';

function getAverageGrade(student: Student): number {
  return student.grades.reduce((acc, mark) => acc + mark, 0)
    / student.grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): {}[] {
  const copy = [...students];

  return copy.sort((student1: Student, student2: Student) => {
    switch (sortBy) {
      case SortType.Name:
        return order === 'asc'
          ? student1.name.localeCompare(student2.name)
          : student2.name.localeCompare(student1.name);

      case SortType.Surname:
        return order === 'asc'
          ? student1.surname.localeCompare(student2.surname)
          : student2.surname.localeCompare(student1.surname);

      case SortType.Age:
        return order === 'asc'
          ? student1.age - student2.age
          : student2.age - student1.age;

      case SortType.Married:
        return order === 'asc'
          ? Number(student1.married) - Number(student2.married)
          : Number(student2.married) - Number(student1.married);

      case SortType.AverageGrade:
        return order === 'asc'
          ? getAverageGrade(student1) - getAverageGrade(student2)
          : getAverageGrade(student2) - getAverageGrade(student1);

      default:
        throw new Error('Your input property does not exist on type SortType');
    }
  });
}

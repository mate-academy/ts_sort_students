
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
  return student.grades.reduce((sum:number, grade: number) => sum + grade, 0)
  / student.grades.length;
}

function isAscending(order: SortOrder): boolean {
  return order === 'asc';
}

export function sortStudents(students: Student[],
  sortBy: SortType, order: SortOrder): Student[] {
  const sortedStudents: Student[] = [...students];

  sortedStudents.sort((student1: Student, student2: Student): number => {
    switch (sortBy) {
      case SortType.Name:
        return isAscending(order)
          ? student1.name.localeCompare(student2.name)
          : student2.name.localeCompare(student1.name);

      case SortType.Surname:
        return isAscending(order)
          ? student1.surname.localeCompare(student2.surname)
          : student2.surname.localeCompare(student1.surname);

      case SortType.Age:
        return isAscending(order)
          ? student1.age - student2.age
          : student2.age - student1.age;

      case SortType.Married:
        return isAscending(order)
          ? Number(student1.married) - Number(student2.married)
          : Number(student2.married) - Number(student1.married);

      default:
        return isAscending(order)
          ? getAverageGrade(student1) - getAverageGrade(student2)
          : getAverageGrade(student2) - getAverageGrade(student1);
    }
  });

  return sortedStudents;
}

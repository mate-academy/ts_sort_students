
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

export function sortStudents(students: Student[],
  sortBy: SortType,
  order: SortOrder): Student[] {
  function getAverageGrade(student: Student): number {
    return student.grades.reduce((sum, point) => sum + point, 0)
    / student.grades.length;
  }

  return [...students].sort((student1, student2) => {
    switch (sortBy) {
      case SortType.Name: {
        return (order === 'asc')
          ? student1.name.localeCompare(student2.name)
          : student2.name.localeCompare(student1.name);
      }

      case SortType.Surname: {
        return (order === 'asc')
          ? student1.surname.localeCompare(student2.surname)
          : student2.surname.localeCompare(student1.surname);
      }

      case SortType.Age: {
        return (order === 'asc')
          ? student1.age - student2.age
          : student2.age - student1.age;
      }

      case SortType.Married: {
        return (order === 'asc')
          ? Number(student1.married) - Number(student2.married)
          : Number(student2.married) - Number(student1.married);
      }

      case SortType.AverageGrade: {
        return (order === 'asc')
          ? getAverageGrade(student1) - getAverageGrade(student2)
          : getAverageGrade(student2) - getAverageGrade(student1);
      }

      default: {
        return 0;
      }
    }
  });
}

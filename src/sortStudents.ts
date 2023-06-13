
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

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copyStudents: Student[] = [...students];

  copyStudents.sort((student1: Student, student2: Student) => {
    // eslint-disable-next-line default-case
    switch (sortBy) {
      case SortType.Name: {
        return order === 'asc'
          ? student1.name.localeCompare(student2.name)
          : student2.name.localeCompare(student1.name);
      }

      case SortType.Surname: {
        return order === 'asc'
          ? student1.surname.localeCompare(student2.surname)
          : student2.surname.localeCompare(student1.surname);
      }

      case SortType.Age: {
        return order === 'asc'
          ? student1.age - student2.age
          : student2.age - student1.age;
      }

      case SortType.Married: {
        return order === 'asc'
          ? Number(student1.married) - Number(student2.married)
          : Number(student2.married) - Number(student1.married);
      }

      case SortType.AverageGrade: {
        const student1AverageGrade
          = student1.grades
            .reduce((a: number, b: number) => a + b) / student1.grades.length;

        const student2AverageGrade
          = student2.grades
            .reduce((a: number, b: number) => a + b) / student2.grades.length;

        return order === 'asc'
          ? student1AverageGrade - student2AverageGrade
          : student2AverageGrade - student1AverageGrade;
      }

      default: {
        return 0;
      }
    }
  });

  return copyStudents;
}

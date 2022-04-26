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
  AverageGrade = 'grades'
}

export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  return [...students].sort((studentA, studentB) => {
    let student1 = studentA;
    let student2 = studentB;

    if (order === 'desc') {
      [student1, student2] = [student2, student1];
    }

    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return student1[sortBy].localeCompare(student2[sortBy]);

      case SortType.Age: {
        return student1.age - student2.age;
      }

      case SortType.Married: {
        return +student1.married - +student2.married;
      }

      case SortType.AverageGrade: {
        const averageStudent1 = student1.grades
          .reduce((a, b) => a + b, 0) / student1.grades.length;
        const averageStudent2 = student2.grades
          .reduce((a, b) => a + b, 0) / student2.grades.length;

        return averageStudent1 - averageStudent2;
      }

      default:
        throw new Error('Unknown type of search!');
    }
  });
}

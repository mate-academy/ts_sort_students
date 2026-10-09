
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

export type SortOrder = 'asc' | 'desc';

export function sortStudents(students: Student[],
  sortBy: SortType, order: SortOrder): Student[] {
  const copied = [...students];

  copied.sort((a: Student, b: Student) => {
    switch (sortBy) {
      case SortType.Name: {
        const result = a.name.localeCompare(b.name);

        return order === 'desc' ? -result : result;
      }

      case SortType.Surname: {
        const result = a.surname.localeCompare(b.surname);

        return order === 'desc' ? -result : result;
      }

      case SortType.Age: {
        const result = a.age - b.age;

        return order === 'desc' ? -result : result;
      }

      case SortType.Married: {
        const first = Number(a.married);
        const second = Number(b.married);

        return order === 'desc' ? second - first : first - second;
      }

      case SortType.AverageGrade: {
        const AvgA = a.grades.reduce((sum, g) => sum + g, 0) / a.grades.length;
        const AvgB = b.grades.reduce((sum, g) => sum + g, 0) / b.grades.length;

        return order === 'desc' ? AvgB - AvgA : AvgA - AvgB;
      }

      default: {
        return 0;
      }
    }
  });

  return copied;
}

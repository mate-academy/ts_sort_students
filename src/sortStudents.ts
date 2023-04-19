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

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copyArray: Student[] = [...students];

  switch (sortBy) {
    case SortType.Name: {
      copyArray.sort((a, b) => a.name.localeCompare(b.name));
      break;
    }

    case SortType.Surname: {
      copyArray.sort((a, b) => a.surname.localeCompare(b.surname));
      break;
    }

    case SortType.Age: {
      copyArray.sort((a, b) => b.age - a.age);
      break;
    }

    case SortType.Married: {
      copyArray.sort((a, b) => Number(b.married) - Number(a.married));
      break;
    }

    case SortType.AverageGrade: {
      const avgSort = (a: Student, b: Student):Student[] => {
        const avgA = a.grades
          .reduce((acc, grade) => acc + grade, 0) / a.grades.length;

        const avgB = b.grades
          .reduce((acc, grade) => acc + grade, 0) / b.grades.length;

        return order === 'asc' ? avgA - avgB : avgB - avgA;
      };

      copyArray.sort(avgSort);
      break;
    }

    default: {
      throw new Error(`Unexpected sortBy value: ${sortBy}`);
    }
  }

  return copyArray;
}

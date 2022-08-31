
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
  const studentsCopy: Student[] = JSON.parse(JSON.stringify(students));

  function countAverage(grades: number[]): number {
    return grades.reduce((grade1: number,
      grade2: number) => grade1 + grade2, 0) / grades.length;
  }

  switch (true) {
    case ((sortBy === SortType.Name || sortBy === SortType.Surname)
      && order === 'asc'): {
      studentsCopy.sort((student1: Student,
        student2: Student) => String(student1[sortBy])
        .localeCompare(String(student2[sortBy])));
      break;
    }

    case ((sortBy === SortType.Name || sortBy === SortType.Surname)
      && order === 'desc'): {
      studentsCopy.sort((student1: Student,
        student2: Student) => String(student2[sortBy])
        .localeCompare(String(student1[sortBy])));
      break;
    }

    case ((sortBy === SortType.Age || sortBy === SortType.Married)
      && order === 'asc'): {
      studentsCopy.sort((student1: Student,
        student2: Student) => +(student1[sortBy]) - +(student2[sortBy]));
      break;
    }

    case ((sortBy === SortType.Age || sortBy === SortType.Married)
      && order === 'desc'): {
      studentsCopy.sort((student1: Student,
        student2: Student) => +(student2[sortBy]) - +(student1[sortBy]));
      break;
    }

    case (sortBy === SortType.AverageGrade && order === 'asc'): {
      studentsCopy.sort((student1: Student,
        student2: Student) => countAverage(student1.grades)
        - countAverage(student2.grades));
      break;
    }

    default: studentsCopy.sort((student1: Student,
      student2: Student) => countAverage(student2.grades)
      - countAverage(student1.grades));
  }

  return studentsCopy;
}


export interface Student {
  // describe Student interface
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: Array<number>;
}

export enum SortType {
  // describe SortType enum
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'grades',
}

// create SortOrder type
// export type SortOrder = 'asc' | 'desc';
export enum SortOrder {
  asc = 'asc',
  desc = 'desc',
}

function averageGrades(grades: Array<number>): number {
  return grades.reduce((sum, grade) => sum + grade, 0) / grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const studentsCopy = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      studentsCopy.sort((stu1: Student, stu2: Student): number => {
        return order === SortOrder.asc
          ? stu1[sortBy].localeCompare(stu2[sortBy])
          : stu2[sortBy].localeCompare(stu1[sortBy]);
      });
      break;

    case SortType.Age:
    case SortType.Married:
      studentsCopy.sort((stu1: Student, stu2: Student): number => {
        return order === SortOrder.asc
          ? Number(stu1[sortBy]) - Number(stu2[sortBy])
          : Number(stu2[sortBy]) - Number(stu1[sortBy]);
      });
      break;

    case SortType.AverageGrade:
      studentsCopy.sort((stu1: Student, stu2: Student): number => {
        return order === SortOrder.asc
          ? averageGrades(stu1[sortBy]) - averageGrades(stu2[sortBy])
          : averageGrades(stu2[sortBy]) - averageGrades(stu1[sortBy]);
      });
      break;

    default:
      return studentsCopy;
  }

  return studentsCopy;
}

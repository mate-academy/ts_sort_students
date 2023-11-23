
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
export type SortOrder = 'asc' | 'desc';

function getAverage(student: Student): number {
  const total = student.grades.reduce((acc, curr) => acc + curr);

  return total / student.grades.length;
}

export function sortStudents(
  students: Array<Student>,
  sortBy: SortType,
  order: SortOrder,
): Array<Student> {
  const studentsCopy = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return studentsCopy
        .sort((student1, student2) => {
          return order === 'asc'
            ? student1[sortBy].localeCompare(student2[sortBy])
            : student2[sortBy].localeCompare(student1[sortBy]);
        });

    case SortType.Age:
    case SortType.Married:
      return studentsCopy
        .sort((student1, student2) => {
          return order === 'asc'
            ? Number(student1[sortBy]) - Number(student2[sortBy])
            : Number(student2[sortBy]) - Number(student1[sortBy]);
        });

    case SortType.AverageGrade:
      return studentsCopy
        .sort((student1, student2) => {
          const average1: number = getAverage(student1);
          const average2: number = getAverage(student2);

          return order === 'asc'
            ? average1 - average2
            : average2 - average1;
        });

    default:
      return studentsCopy;
  }
}

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
  AverageGrade = 'averageGrade'
}

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

function getAveregeGrade(student: Student): number {
  return student.grades
    .reduce((sum, grade) => sum + grade, 0) / student.grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copiedStudents: Student[] = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return (order === SortOrder.Asc)
        ? copiedStudents.sort((student1, student2) => {
          return student1[sortBy].localeCompare(student2[sortBy]);
        })
        : copiedStudents.sort((student1, student2) => {
          return student2[sortBy].localeCompare(student1[sortBy]);
        });

    case SortType.Age:
      return (order === SortOrder.Asc)
        ? copiedStudents.sort((student1, student2) => {
          return student1[sortBy] - student2[sortBy];
        })
        : copiedStudents.sort((student1, student2) => {
          return student2[sortBy] - student1[sortBy];
        });

    case SortType.Married:
      return (order === SortOrder.Asc)
        ? copiedStudents.sort((student1, student2) => {
          return +student1[sortBy] - +student2[sortBy];
        })
        : copiedStudents.sort((student1, student2) => {
          return +student2[sortBy] - +student1[sortBy];
        });

    case SortType.AverageGrade:
      return (order === SortOrder.Asc)
        ? copiedStudents.sort((student1, student2) => {
          return getAveregeGrade(student1) - getAveregeGrade(student2);
        })
        : copiedStudents.sort((student1, student2) => {
          return getAveregeGrade(student2) - getAveregeGrade(student1);
        });

    default:
      throw new Error('Enter valid sort type');
  }
}

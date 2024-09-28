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
  AverageGrade = 'averageGrade',
}

export enum SortOrder {
  asc = 'asc',
  desc = 'desc',
}

export function sortStudents(
  students: Student[], sortBy: SortType, order: SortOrder,
): Student[] {
  const sortedArray = [...students]
    .sort((student1, student2) => {
      if (sortBy === SortType.AverageGrade) {
        if (!student1.grades.length || !student2.grades.length) {
          throw new Error('There are no grades!');
        }

        const average1 = (student1.grades
          .reduce((sum, grade) => sum + grade, 0) / student1.grades.length);

        const average2 = (student2.grades
          .reduce((sum, grade) => sum + grade, 0) / student2.grades.length);

        if (order === SortOrder.desc) {
          return average2 - average1;
        }

        return average1 - average2;
      }

      if (order === SortOrder.desc) {
        return student1[sortBy] > student2[sortBy] ? -1 : 1;
      }

      return student1[sortBy] > student2[sortBy] ? 1 : -1;
    });

  return sortedArray;
}

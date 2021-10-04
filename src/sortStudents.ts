interface Student {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];
  average: number;
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'average',
}

type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const studentsCopy: Student[] = students
    .map((student) => {
      const average = student.grades
        .reduce((sum, grade) => sum + grade, 0) / student.grades.length;

      return {
        ...student,
        average,
      };
    });

  studentsCopy.sort((a:Student, b:Student): number => {
    if (sortBy === SortType.Age || sortBy === SortType.AverageGrade) {
      return order === 'asc'
        ? a[sortBy] - b[sortBy]
        : b[sortBy] - a[sortBy];
    }

    if (sortBy === SortType.Married) {
      return order === 'asc'
        ? Number(a[sortBy]) - Number(b[sortBy])
        : Number(b[sortBy]) - Number(a[sortBy]);
    }

    if (sortBy === SortType.Name || sortBy === SortType.Surname) {
      return order === 'asc'
        ? a[sortBy].localeCompare(b[sortBy])
        : b[sortBy].localeCompare(a[sortBy]);
    }

    return 0;
  });

  return studentsCopy;
}

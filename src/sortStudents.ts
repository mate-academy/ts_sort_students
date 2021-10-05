type Student = {
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[],
};

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'grades',
}

type SortOrder = 'asc' | 'desc';

function averageGrade(student: Student): number {
  const sumOfGrades = student.grades.reduce((sum, grade) => sum + grade, 0);

  return sumOfGrades / student.grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const studentsCopy = [...students];

  if (sortBy === SortType.Name || sortBy === SortType.Surname) {
    if (order === 'asc') {
      studentsCopy.sort((a, b) => a[sortBy].localeCompare(b[sortBy]));
    } else {
      studentsCopy.sort((a, b) => b[sortBy].localeCompare(a[sortBy]));
    }
  }

  if (sortBy === SortType.Age) {
    if (order === 'asc') {
      studentsCopy.sort((a, b) => a[sortBy] - (b[sortBy]));
    } else {
      studentsCopy.sort((a, b) => b[sortBy] - (a[sortBy]));
    }
  }

  if (sortBy === SortType.Married) {
    if (order === 'asc') {
      studentsCopy.sort((a, b) => +a[sortBy] - +(b[sortBy]));
    } else {
      studentsCopy.sort((a, b) => +b[sortBy] - +(a[sortBy]));
    }
  }

  if (sortBy === SortType.AverageGrade) {
    if (order === 'asc') {
      studentsCopy.sort((a, b) => averageGrade(a) - averageGrade(b));
    } else {
      studentsCopy.sort((a, b) => averageGrade(b) - averageGrade(a));
    }
  }

  return studentsCopy;
}

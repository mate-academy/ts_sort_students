
export interface Student {
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[],
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'grades',
}

export type SortOrder = 'asc' | 'desc';

export function averageGradeCalc(student: Student): number {
  return student.grades.reduce((acc, curr) => {
    return acc + curr;
  }, 0) / student.grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): string[] {
  const studentsCopy = [...students];

  if (sortBy === 'grades') {
    if (order === 'desc') {
      studentsCopy.sort((a, b) => {
        return averageGradeCalc(b) - averageGradeCalc(a);
      });
    } else {
      studentsCopy.sort((a, b) => {
        return averageGradeCalc(a) - averageGradeCalc(b);
      });
    }

    return studentsCopy.map((student) => {
      return `${student.name} ${student.surname} [${student.grades}]`;
    });
  }

  if (sortBy === 'married') {
    studentsCopy.sort((a: Student): number => {
      return a[sortBy] ? -1 : 1;
    });

    return studentsCopy.map((student) => {
      return `${student.name} ${student.surname}
      ${student.age}${student.married ? ' married' : ''}`;
    });
  }

  if (sortBy === 'age') {
    if (order === 'desc') {
      studentsCopy.sort((a, b) => {
        return b[sortBy] - a[sortBy];
      });
    } else {
      studentsCopy.sort((a, b) => {
        return a[sortBy] - b[sortBy];
      });
    }

    return studentsCopy.map((student) => {
      return `${student.name} ${student.surname} ${student.age}`;
    });
  }

  if (sortBy === 'name' || sortBy === 'surname') {
    if (order === 'desc') {
      studentsCopy.sort((a: Student, b: Student): number => {
        return b[sortBy].localeCompare(a[sortBy]);
      });
    } else {
      studentsCopy.sort((a: Student, b: Student): number => {
        return a[sortBy].localeCompare(b[sortBy]);
      });
    }

    return studentsCopy.map((student) => {
      return `${student.name} ${student.surname} ${student.age}`;
    });
  }

  return [''];
}

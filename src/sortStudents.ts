
export interface Student {
  // describe Student interface
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];
}

export enum SortType {
  // describe SortType enum
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'averageGrades'
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

function getAverage(student: Student): number {
  return student.grades.reduce((prev, current) => prev + current, 0)
    / student.grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const studentsArr = [...students];

  if (SortType.Name === sortBy || SortType.Surname === sortBy) {
    studentsArr.sort((prev: Student, current: Student) => {
      return order === 'asc'
        ? prev[sortBy].localeCompare(current[sortBy])
        : current[sortBy].localeCompare(prev[sortBy]);
    });
  }

  if (SortType.Age === sortBy) {
    studentsArr.sort((prev: Student, current: Student) => {
      return order === 'asc'
        ? prev.age - current.age
        : current.age - prev.age;
    });
  }

  if (SortType.Married === sortBy) {
    studentsArr.sort((prev: Student, current: Student) => {
      return order === 'asc'
        ? Number(prev.married) - Number(current.married)
        : Number(current.married) - Number(prev.married);
    });
  }

  if (SortType.AverageGrade === sortBy) {
    studentsArr.sort((prev: Student, current: Student): number => {
      const prevAvGrade = getAverage(prev);
      const currAvGrade = getAverage(current);

      return order === 'asc'
        ? prevAvGrade - currAvGrade
        : currAvGrade - prevAvGrade;
    });
  }

  return studentsArr;
}

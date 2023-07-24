
export interface Student {
  name: string;
  surname: string;
  age: number;
  married: boolean
  grades: number[];
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'averageGrade',
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

function getAvgGrades(student: Student): number {
  return student.grades.reduce((sum, grade) => (
    sum + grade
  ), 0) / student.grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const studentsClone = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      studentsClone.sort((studA: Student, studB: Student) => {
        return order === 'asc'
          ? studA[sortBy].localeCompare(studB[sortBy])
          : studB[sortBy].localeCompare(studA[sortBy]);
      });
      break;

    case SortType.Age:
      studentsClone.sort((studA: Student, studB: Student) => {
        return order === 'asc'
          ? studA[sortBy] - studB[sortBy]
          : studB[sortBy] - studA[sortBy];
      });
      break;

    case SortType.Married:
      studentsClone.sort((studA: Student, studB: Student) => {
        return order === 'asc'
          ? +studA[sortBy] - +studB[sortBy]
          : +studB[sortBy] - +studA[sortBy];
      });
      break;

    case SortType.AverageGrade:
      studentsClone.sort((studA: Student, studB: Student) => {
        return order === 'asc'
          ? getAvgGrades(studA) - getAvgGrades(studB)
          : getAvgGrades(studB) - getAvgGrades(studA);
      });
      break;

    default:
      throw new Error('error');
  }

  return studentsClone;
}

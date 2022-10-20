
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

function avarageGrades(grades: number[]): number {
  return grades.reduce((sum, grade) => sum + grade, 0) / grades.length;
}

export function sortStudents(
  students:Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const studentsCopy = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      studentsCopy.sort((stu1: Student, stu2: Student): number => {
        return order === 'asc'
          ? stu1[sortBy].localeCompare(stu2[sortBy])
          : stu2[sortBy].localeCompare(stu1[sortBy]);
      });
      break;
    case SortType.Age:
    case SortType.Married:
      studentsCopy.sort((stu1: Student, stu2: Student): number => {
        return order === 'asc'
          ? Number(stu1[sortBy]) - Number(stu2[sortBy])
          : Number(stu2[sortBy]) - Number(stu1[sortBy]);
      });
      break;
    case SortType.AverageGrade:
      studentsCopy.sort((stu1: Student, stu2: Student): number => {
        return order === 'asc'
          ? avarageGrades(stu1[sortBy]) - avarageGrades(stu2[sortBy])
          : avarageGrades(stu2[sortBy]) - avarageGrades(stu1[sortBy]);
      });
      break;
    default:
      return students;
  }

  return studentsCopy;
}

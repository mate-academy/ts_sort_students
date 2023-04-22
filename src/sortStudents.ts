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

export type SortOrder = 'asc' | 'desc';

export function sortStudents(students: Student[],
  sortBy: SortType,
  order: SortOrder): Student[] {
  function compareAvgGrades(firstStudent: Student,
    secondStudent: Student): number {
    const avgGradeA
    = firstStudent.grades.reduce((acc: number, val: number) => acc + val)
    / firstStudent.grades.length;
    const avgGradeB
    = secondStudent.grades.reduce((acc: number, val: number) => acc + val)
    / secondStudent.grades.length;

    return avgGradeA - avgGradeB;
  }

  const sortedStudents = [...students];

  sortedStudents.sort((firstStudent, secondStudent) => {
    let comparison = 0;

    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        comparison = firstStudent[sortBy].localeCompare(secondStudent[sortBy]);
        break;
      case SortType.Age:
        comparison = firstStudent.age - secondStudent.age;
        break;
      case SortType.Married:
        if (firstStudent.married === secondStudent.married) {
          comparison = 0;
        } else {
          comparison = firstStudent.married ? 1 : -1;
        }
        break;
      case SortType.AverageGrade:
        comparison = compareAvgGrades(firstStudent, secondStudent);
        break;
      default:
        throw new Error('Cannot sort by this property!');
    }

    return order === 'asc' ? comparison : -comparison;
  });

  return sortedStudents;
}


export interface Student {
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[],
}

export enum SortType {
  Name = 'name',
  Surname ='surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'averagegrades',
}

export type SortOrder = 'asc'|'desc';

function getAverageGrades(grades:number[]):number {
  return (grades
    .reduce((sum, grade:number) => sum + grade) / grades.length);
}

export function sortStudents(
  students: Student[],
  sortBy:SortType,
  order:SortOrder,
) :Student[] {
  const sortedStudents = [...students];

  sortedStudents.sort((student1: Student, student2: Student) => {
    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return order === 'asc'
          ? student1[sortBy].localeCompare(student2[sortBy])
          : student2[sortBy].localeCompare(student1[sortBy]);

      case SortType.Age:
      case SortType.Married:
        return order === 'asc'
          ? +student1[sortBy] - +student2[sortBy]
          : +student2[sortBy] - +student1[sortBy];

      case SortType.AverageGrade:
        return order === 'asc'
          ? getAverageGrades(student1.grades)
            - getAverageGrades(student2.grades)
          : getAverageGrades(student2.grades)
            - getAverageGrades(student1.grades);

      default:
        throw new Error('There is no such property');
    }
  });

  return sortedStudents;
}

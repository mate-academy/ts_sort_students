
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

// create SortOrder type
export type SortOrder = 'asc' | 'desk';

export function sortStudents(
  students :Student[],
  sortBy :SortType,
  order :SortOrder,
):Student[] {
  const sortedStudent = [...students];

  type CalcCallback = (n: number[]) => number;

  const claculateAverage:CalcCallback = (studentGrades) => {
    return studentGrades
      .reduce((previous:number, current:number) => previous + current)
      / studentGrades.length;
  };

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return sortedStudent.sort((student1:Student, student2:Student) => {
        return order === 'asc'
          ? student1[sortBy].localeCompare(student2[sortBy])
          : student2[sortBy].localeCompare(student1[sortBy]);
      });

    case SortType.Age:
    case SortType.Married:
      return sortedStudent.sort((student1:Student, student2:Student) => {
        return order === 'asc'
          ? +student1[sortBy] - +student2[sortBy]
          : +student2[sortBy] - +student1[sortBy];
      });

    case SortType.AverageGrade:
      return sortedStudent.sort((student1:Student, student2:Student) => {
        return order === 'asc'
          ? claculateAverage(student1[sortBy])
          - claculateAverage(student2[sortBy])
          : claculateAverage(student2[sortBy])
          - claculateAverage(student1[sortBy]);
      });

    default:
      throw new Error('Sort type undefined, use one of the SortType:'
       + 'Name, Surname, Age, Married, AverageGrade');
  }
}

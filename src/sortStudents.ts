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
  AverageGrade = 'averageGrade',
}

export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const averageHelperFunc = (array: number[]): number => {
    const sum: number = array.reduce((acc, value) => acc + value, 0);
    const lengthOfArray: number = array.length;

    return sum / lengthOfArray;
  };

  const sortedStudents = [...students]
    .sort((pv, cv) => {
      let studnet1 = pv;
      let student2 = cv;

      if (order === 'desc') {
        studnet1 = cv;
        student2 = pv;
      }

      if (sortBy === 'name' || sortBy === 'surname') {
        return studnet1[sortBy].localeCompare(student2[sortBy]);
      }

      if (sortBy === 'averageGrade') {
        const averageGradeStudent1 = averageHelperFunc(studnet1.grades);
        const averageGradeStudent2 = averageHelperFunc(student2.grades);

        return averageGradeStudent1 - averageGradeStudent2;
      }

      return Number(studnet1[sortBy]) - Number(student2[sortBy]);
    });

  return sortedStudents;
}

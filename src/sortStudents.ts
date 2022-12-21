
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

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const sortedStudents = [...students];

  if (sortBy === SortType.Age || sortBy === SortType.Married) {
    sortedStudents.sort((prevS, student) => {
      return order === 'desc'
        ? Number(student[sortBy]) - Number(prevS[sortBy])
        : Number(prevS[sortBy]) - Number(student[sortBy]);
    });
  }

  if (sortBy === SortType.Surname || sortBy === SortType.Name) {
    sortedStudents.sort((prevS, student) => {
      return order === 'desc'
        ? student[sortBy].localeCompare(prevS[sortBy])
        : prevS[sortBy].localeCompare(student[sortBy]);
    });
  }

  if (sortBy === SortType.AverageGrade) {
    sortedStudents
      .sort((prevS, student) => {
        const prevGrades = prevS.grades
          .reduce((acc, grade) => acc + grade) / prevS.grades.length;

        const currentGrades = student.grades
          .reduce((acc, grade) => acc + grade) / student.grades.length;

        return order === 'desc'
          ? currentGrades - prevGrades
          : prevGrades - currentGrades;
      });
  }

  return sortedStudents;
}

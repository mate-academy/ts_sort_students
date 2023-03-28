export interface Student {
  name: string;
  surname: string;
  age: number;
  married?: boolean;
  grades: number[];
}

export enum SortType {
  Name = "name",
  Surname = "surname",
  Age = "age",
  Married = "married",
  AverageGrade = "grades",
}

export type SortOrder = "asc" | "desc";

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder
): Student[] {
  let sortedStudents: Student[] = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      sortedStudents.sort((student1, student2) => {
        return order === "asc"
          ? student1[sortBy].localeCompare(student2[sortBy])
          : student2[sortBy].localeCompare(student1[sortBy]);
      });
      break;
    case SortType.Married:
    case SortType.Age:
      sortedStudents.sort((student1, student2) => {
        return order === "asc"
          ? Number(student1[sortBy]) - Number(student2[sortBy])
          : Number(student2[sortBy]) - Number(student1[sortBy]);
      });
      break;

    case SortType.AverageGrade:
      sortedStudents.sort((student1, student2) => {
        return order === "asc"
          ? getAverageGrade(student1[sortBy]) -
              getAverageGrade(student2[sortBy])
          : getAverageGrade(student2[sortBy]) -
              getAverageGrade(student1[sortBy]);
      });
      break;

    default:
      throw new Error(
        "Sorting is impossible, because you haven't selected a sort type or it doesn't exist"
      );
  }

  return sortedStudents;
}

function getAverageGrade(grades: number[]): number {
  return grades.reduce((a, b) => a + b, 0) / grades.length;
}

export interface Student {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];
}

export enum SortType {
  Name = "name",
  Surname = "surname",
  Age = "age",
  Married = "married",
  AverageGrade = "averageGrade",
}

export type SortOrder = "asc" | "desc";

type BasicStudentKey = "name" | "surname" | "age" | "married";

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const sortedStudents = [...students];

  sortedStudents.sort((a: Student, b: Student) => {
    let comparison = 0;

    switch (sortBy) {
      case SortType.Age:
      case SortType.Married:
        comparison =
          (a[sortBy as BasicStudentKey] as number) -
          (b[sortBy as BasicStudentKey] as number);
        break;
      case SortType.Name:
      case SortType.Surname:
        comparison = (a[sortBy as BasicStudentKey] as string).localeCompare(
          b[sortBy as BasicStudentKey] as string,
        );
        break;

      case SortType.AverageGrade: {
        const sumA = a.grades.reduce((total, grade) => total + grade, 0);
        const sumB = b.grades.reduce((total, grade) => total + grade, 0);

        const avgA = a.grades.length > 0 ? sumA / a.grades.length : 0;
        const avgB = b.grades.length > 0 ? sumB / b.grades.length : 0;

        comparison = avgA - avgB;
        break;
      }
      default:
        comparison = 0;
        break;
    }

    if (comparison === 0) {
      return 0;
    }

    switch (order) {
      case "asc":
        return comparison;
      case "desc":
        return comparison * -1;
      default:
        return comparison;
    }
  });

  return sortedStudents;
}

export interface Student {
  name: "string";
  surname: "string";
  age: number;
  married: boolean;
  grades: number[];
}

export enum SortType {
  Name = "name",
  Surname = "surname",
  Age = "age",
  Married = "married",
  AverageGrade = "grades",
}

// create SortOrder type
export type SortOrder = "asc" | "desc";

export function sortStudents(
  students: Student[],
  sortBy: string,
  order: SortOrder
): Student[] {
  const copyStudents = [...students];

  switch (sortBy) {
    case SortType.Name:
      copyStudents.sort((st1, st2) => st1.name.localeCompare(st2.name));
      break;

    case SortType.Surname:
      copyStudents.sort((st1, st2) => st1.surname.localeCompare(st2.surname));
      break;

    case SortType.Age:
      copyStudents.sort((age1, age2) => age1.age - age2.age);
      break;

    case SortType.AverageGrade:
      copyStudents.sort((gr1, gr2) => {
        const averageFirst =
          gr1.grades.reduce((acum, curr) => acum + curr, 0) / gr1.grades.length;
        const averageSecond =
          gr2.grades.reduce((acum, curr) => acum + curr, 0) / gr2.grades.length;

        return averageFirst - averageSecond;
      });
      break;

    case SortType.Married:
      copyStudents.sort();
  }

  if (order === "desc") {
    copyStudents.reverse();
  }

  return copyStudents;
}

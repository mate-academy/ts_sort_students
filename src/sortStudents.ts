
export interface Student {
  // describe Student interface
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];
}

export enum SortType {
  // describe SortType enum
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'grades',
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  // write your function
  const newStudents: Student[] = [...students];

  function avrGrades(arrayGrades: number[]): number {
    const sum = arrayGrades.reduce((num1, num2) => num1 + num2, 0);

    return sum / arrayGrades.length;
  }

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      newStudents.sort((
        person: Student,
        person1: Student,
      ) => {
        return order === 'asc'
          ? person[sortBy].localeCompare(person1[sortBy])
          : person1[sortBy].localeCompare(person[sortBy]);
      });
      break;

    case SortType.Age:
      newStudents.sort((
        person: Student,
        person1: Student,
      ) => {
        return order === 'asc'
          ? person[sortBy] - person1[sortBy]
          : person1[sortBy] - person[sortBy];
      });
      break;

    case SortType.Married:
      newStudents.sort((
        person: Student,
        person1: Student,
      ) => {
        return order === 'asc'
          ? (+person[sortBy]) - (+person1[sortBy])
          : (+person1[sortBy]) - (+person[sortBy]);
      });
      break;

    case SortType.AverageGrade:
      newStudents.sort((
        person: Student,
        person1: Student,
      ) => {
        return order === 'asc'
          ? (avrGrades(person.grades) - avrGrades(person1.grades))
          : (avrGrades(person1.grades) - avrGrades(person.grades));
      });
      break;

    default:
      return [];
  }

  return newStudents;
}

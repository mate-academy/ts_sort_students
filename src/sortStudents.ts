export interface Student {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];
}

export enum SortType {
  Name,
  Surname,
  Age,
  Married,
  AverageGrade,
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: string,
): Student[] {
  const copyStudents: Student[] = [...students];
  const sortOrder = order === 'asc' ? 1 : -1;

  type Sum = (sum: number, mark: number) => number;
  type Average = (grades: number[]) => number;

  const sumMarks: Sum = (sum, mark) => sum + mark;
  const getAverage: Average = (grades) => (
    grades.reduce(sumMarks, 0) / grades.length
  );

  switch (sortBy) {
    case SortType.Name:
      copyStudents.sort((
        { name: nameA },
        { name: nameB },
      ) => nameA.localeCompare(nameB) * sortOrder);
      break;

    case SortType.Surname:
      copyStudents.sort((
        { surname: surnameA },
        { surname: surnameB },
      ) => surnameA.localeCompare(surnameB) * sortOrder);
      break;

    case SortType.Age:
      copyStudents.sort((
        { age: ageA },
        { age: ageB },
      ) => (ageA - ageB) * sortOrder);
      break;

    case SortType.Married:
      copyStudents.sort((
        { married: marriedA },
        { married: marriedB },
      ) => (Number(marriedA) - Number(marriedB)) * sortOrder);
      break;

    case SortType.AverageGrade:
      copyStudents.sort((
        { grades: gradesA },
        { grades: gradesB },
      ) => (
        (getAverage(gradesA) - getAverage(gradesB)) * sortOrder
      ));
      break;

    default:
      throw new Error(`Invalid value: ${sortBy}`);
  }

  return copyStudents;
}

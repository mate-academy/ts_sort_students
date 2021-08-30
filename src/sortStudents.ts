interface Student {
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

export enum SortOrder {
  Ascending = 'asc',
  Descending = 'desc',
}

function getAverage(array: number[]): number {
  return (array.reduce(
    (sum: number, second: number) => sum + second, 0,
  ) / array.length);
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const studentsSort: Student[] = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      studentsSort.sort((studentOne: Student, studentTwo: Student) => (
        order === SortOrder.Ascending
          ? studentOne[sortBy].localeCompare(studentTwo[sortBy])
          : studentTwo[sortBy].localeCompare(studentOne[sortBy])
      ));
      break;

    case SortType.Age:
      studentsSort.sort((studentOne: Student, studentTwo: Student) => (
        order === SortOrder.Ascending
          ? studentOne.age - studentTwo.age
          : studentTwo.age - studentOne.age
      ));
      break;

    case SortType.Married:
      studentsSort.sort((studentOne: Student, studentTwo: Student) => {
        if (studentOne.married === studentTwo.married) {
          return 0;
        }

        if (order === SortOrder.Ascending) {
          return +studentOne.married || -1;
        }

        return studentOne.married ? -1 : 1;
      });
      break;

    case SortType.AverageGrade:
      studentsSort.sort((studentOne: Student, studentTwo: Student) => (
        order === SortOrder.Ascending
          ? getAverage(studentOne.grades) - getAverage(studentTwo.grades)
          : getAverage(studentTwo.grades) - getAverage(studentOne.grades)
      ));
      break;

    default:
      break;
  }

  return studentsSort;
}

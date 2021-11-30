export interface Student {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'grades',
}

export enum SortOrder {
  decrease = 'desc',
  increase = 'asc',
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copyOfStudents = [...students];
  const isAscending: boolean = order === SortOrder.increase;

  const averageGrade = (student: Student): number => {
    return student.grades.reduce(
      (sum: number, grade: number) => sum + grade,
    ) / student.grades.length;
  };

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      copyOfStudents.sort((prevStudent, nextStudent) => {
        return isAscending
          ? prevStudent[sortBy].localeCompare(nextStudent[sortBy])
          : nextStudent[sortBy].localeCompare(prevStudent[sortBy]);
      });
      break;

    case SortType.Age:
      copyOfStudents.sort((prevStudent, nextStudent) => {
        return isAscending
          ? prevStudent.age - nextStudent.age
          : nextStudent.age - prevStudent.age;
      });
      break;

    case SortType.Married:
      copyOfStudents.sort((prevStudent, nextStudent) => {
        return isAscending
          ? +prevStudent.married - +nextStudent.married
          : +nextStudent.married - +prevStudent.married;
      });
      break;

    case SortType.AverageGrade:
      copyOfStudents.sort((prevStudent, nextStudent) => {
        return isAscending
          ? averageGrade(prevStudent) - averageGrade(nextStudent)
          : averageGrade(nextStudent) - averageGrade(prevStudent);
      });
      break;

    default:
      throw new Error('Error! There is no key with that name!');
  }

  return copyOfStudents;
}

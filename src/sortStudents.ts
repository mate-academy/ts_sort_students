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

export enum SortOrder {
  decrease = 'desc',
  increase = 'asc'
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copyOfStudents = [...students];
  const isOrderedBy: boolean = order === SortOrder.increase;

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      copyOfStudents.sort((prevStudent, nextStudent) => {
        return isOrderedBy
          ? prevStudent[sortBy].localeCompare(nextStudent[sortBy])
          : nextStudent[sortBy].localeCompare(prevStudent[sortBy]);
      });
      break;

    case
      SortType.Age:
      copyOfStudents.sort((prevStudent, nextStudent) => {
        return isOrderedBy
          ? prevStudent.age - nextStudent.age
          : nextStudent.age - prevStudent.age;
      });
      break;

    case
      SortType.Married:
      copyOfStudents.sort((prevStudent, nextStudent) => {
        return isOrderedBy
          ? +prevStudent.married - +nextStudent.married
          : +nextStudent.married - +prevStudent.married;
      });
      break;

    case
      SortType.AverageGrade:
      copyOfStudents.sort((prevStudent, nextStudent) => {
        const averageGrade = (student: Student): number => {
          return student.grades.reduce(
            (sum: number, grade: number) => sum + grade,
          ) / student.grades.length;
        };

        return isOrderedBy
          ? averageGrade(prevStudent) - averageGrade(nextStudent)
          : averageGrade(nextStudent) - averageGrade(prevStudent);
      });
      break;

    default:
      throw new Error('Error!');
  }

  return copyOfStudents;
}

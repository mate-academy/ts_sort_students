type Student = {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];
};

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'grades',
}

type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const student = [...students];
  const sortOrder: number = order === 'asc' ? 1 : -1;

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      student.sort((first: Student, second: Student) => {
        return first[sortBy].localeCompare(second[sortBy]);
      });
      break;

    case SortType.Age:
      student.sort((first: Student, second: Student) => {
        return sortOrder * (first.age - second.age);
      });
      break;

    case SortType.Married:
      student.sort((first: Student, second: Student) => {
        return sortOrder * (+first[sortBy] - +second[sortBy]);
      });
      break;

    case SortType.AverageGrade:
      student.sort((first: Student, second: Student) => {
        return (sortOrder
          * ((first.grades.reduce((x, y) => x + y) / first.grades.length)
          - (second.grades.reduce((x, y) => x + y) / second.grades.length)));
      });
      break;

    default:
      break;
  }

  return student;
}

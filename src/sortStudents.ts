export interface Student {
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[],
}

interface StudentForSort extends Student {
  avarageGrade: number;
  marriedNumber: number;
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'marriedNumber',
  AverageGrade = 'avarageGrade',
}

export type SortOrder = 'asc' | 'desc';
type CountAvarageGradeCallback = (grades: number[]) => number;
type SortRuleCallback = (
  a: StudentForSort,
  b: StudentForSort
) => number;

export function sortStudents(students: Student[],
  sortBy: SortType,
  order: SortOrder): Student[] {
  const countAvarageGrade: CountAvarageGradeCallback
  = (grades) => (
    grades.reduce((sum, grade) => sum + grade, 0)
    / grades.length
  );

  const studentsToSort: StudentForSort[] = students
    .map((student) => (
      {
        ...student,
        avarageGrade: countAvarageGrade(student.grades),
        marriedNumber: Number(student.married),
      }
    ));

  let studentsSortRule: SortRuleCallback | undefined;

  const orderCoefficient = order === 'asc' ? 1 : -1;

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      studentsSortRule = (a, b): number => (
        orderCoefficient * a[sortBy].localeCompare(b[sortBy])
      );
      break;
    case SortType.Age:
    case SortType.Married:
    case SortType.AverageGrade:
      studentsSortRule = (a, b): number => (
        orderCoefficient * a[sortBy] - orderCoefficient * b[sortBy]
      );
      break;
    default:
      break;
  }

  return studentsToSort
    .sort(studentsSortRule)
    .map((
      { marriedNumber, avarageGrade, ...student },
    ) => (student));
}

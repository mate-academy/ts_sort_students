
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

export function sortStudents(students: Student[],
  sortBy: SortType,
  order: SortOrder): Student[] {
    type CountAvarageGradeCallback = (grades: number[]) => number;
    type SortRuleCallback = (
      a: StudentForSort,
      b: StudentForSort
    ) => number;

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

    // sort callback
    let studentsSortRule: SortRuleCallback | undefined;

    // to provide 'asc' or 'desc' for sorting callback
    const k = order === 'asc' ? 1 : -1;

    // choose callback for sort
    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        studentsSortRule = (a, b): number => (
          k * a[sortBy].localeCompare(b[sortBy])
        );
        break;
      case SortType.Age:
      case SortType.Married:
      case SortType.AverageGrade:
        studentsSortRule = (a, b): number => (
          k * a[sortBy] - k * b[sortBy]
        );
        break;
      default:
        break;
    }

    // sort and then get rid of auxiliary fields
    return studentsToSort
      .sort(studentsSortRule)
      .map((
        { marriedNumber, avarageGrade, ...student },
      ) => (student));
}

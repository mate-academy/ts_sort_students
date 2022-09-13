
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

export type SortOrder = 'asc' | 'desc';

const averageStudentGrade = (student: Student):number => {
  return student
    .grades.reduce((accum: number, grade: number): number => {
      return accum + grade;
    }, 0) / student.grades.length;
};

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const resArr: Student[] = [...students];
  const sortOrder: boolean = order === 'asc';

  switch (sortBy) {
    case SortType.Name:
      resArr.sort((firstStudent: Student, secondStudent: Student): number => {
        return sortOrder
          ? firstStudent.name.localeCompare(secondStudent.name)
          : secondStudent.name.localeCompare(firstStudent.name);
      });
      break;
    case SortType.Surname:
      resArr.sort((firstStudent: Student, secondStudent: Student): number => {
        return sortOrder
          ? firstStudent.surname.localeCompare(secondStudent.surname)
          : secondStudent.surname.localeCompare(firstStudent.surname);
      });
      break;
    case SortType.Age:
      resArr.sort((firstStudent: Student, secondStudent: Student): number => {
        let res = 0;

        if (firstStudent.age > secondStudent.age) {
          res = sortOrder ? 1 : -1;
        }

        if (firstStudent.age < secondStudent.age) {
          res = !sortOrder ? 1 : -1;
        }

        return res;
      });
      break;
    case SortType.Married:
      resArr.sort((firstStudent: Student, secondStudent: Student): number => {
        let res = 0;

        if (firstStudent.married && !secondStudent.married) {
          res = sortOrder ? 1 : -1;
        }

        if (!firstStudent.married && secondStudent.married) {
          res = !sortOrder ? 1 : -1;
        }

        return res;
      });
      break;
    case SortType.AverageGrade:
      resArr.sort((firstStudent: Student, secondStudent: Student): number => {
        let res = 0;

        if (averageStudentGrade(firstStudent)
          > averageStudentGrade(secondStudent)
        ) {
          res = sortOrder ? 1 : -1;
        }

        if (averageStudentGrade(firstStudent)
          < averageStudentGrade(secondStudent)
        ) {
          res = !sortOrder ? 1 : -1;
        }

        return res;
      });
      break;
    default:
      return resArr;
  }

  return resArr;
}

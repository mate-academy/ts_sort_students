
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
    case SortType.Surname:
      resArr.sort((firstStudent: Student, secondStudent: Student): number => {
        return sortOrder
          ? firstStudent[sortBy].localeCompare(secondStudent[sortBy])
          : secondStudent[sortBy].localeCompare(firstStudent[sortBy]);
      });
      break;
    case SortType.Age:
      resArr.sort((firstStudent: Student, secondStudent: Student): number => {
        return sortOrder
          ? firstStudent.age - secondStudent.age
          : secondStudent.age - firstStudent.age;
      });
      break;
    case SortType.Married:
      resArr.sort((firstStudent: Student, secondStudent: Student): number => {
        return sortOrder
          ? Number(firstStudent.married) - Number(secondStudent.married)
          : Number(secondStudent.married) - Number(firstStudent.married);
      });
      break;
    case SortType.AverageGrade:
      resArr.sort((firstStudent: Student, secondStudent: Student): number => {
        return sortOrder
          ? averageStudentGrade(firstStudent)
            - averageStudentGrade(secondStudent)
          : averageStudentGrade(secondStudent)
            - averageStudentGrade(firstStudent);
      });
      break;
    default:
      return resArr;
  }

  return resArr;
}

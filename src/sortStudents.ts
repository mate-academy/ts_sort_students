
export interface Student {
  name:string,
  surname:string,
  age:number,
  married:boolean,
  grades:number[],
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'grades',
}

export type SortOrder = 'asc' | 'desc';

function AverageGrades(grades:number[]):number {
  return grades.reduce((grade1, grade2) => grade1 + grade2, 0) / grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
):Student[] {
  const copyOfStudetns = [...students];

  copyOfStudetns.sort((firstStudent:Student, secondStudent:Student) => {
    switch (sortBy) {
      case SortType.Name:
        return firstStudent.name.localeCompare(secondStudent.name);

      case SortType.Surname:
        return firstStudent.surname.localeCompare(secondStudent.surname);

      case SortType.Age:
        if (order === 'desc') {
          return secondStudent.age - firstStudent.age;
        }

        return firstStudent.age - secondStudent.age;

      case SortType.Married:
        if (order === 'desc') {
          return Number(secondStudent.married) - Number(firstStudent.married);
        }

        return Number(firstStudent.married) - Number(secondStudent.married);

      case SortType.AverageGrade:
        if (order === 'desc') {
          return AverageGrades(secondStudent.grades)
          - AverageGrades(firstStudent.grades);
        }

        return AverageGrades(firstStudent.grades)
          - AverageGrades(secondStudent.grades);

      default:
        return 0;
    }
  });

  return copyOfStudetns;
}

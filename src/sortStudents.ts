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
  AverageGrade = 'grade',
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copyStudents: Student[] = [...students];

  function calcAvg(student: Student): number {
    const { grades } = student;

    return grades.reduce((sum, grade) => sum + grade, 0) / grades.length;
  }

  if (sortBy) {
    copyStudents.sort((stud1: Student, stud2: Student) => {
      switch (sortBy) {
        case SortType.Name:
          return order !== 'desc'
            ? stud1.name.localeCompare(stud2.name)
            : stud2.name.localeCompare(stud1.name);

        case SortType.Surname:
          return order !== 'desc'
            ? stud1.surname.localeCompare(stud2.surname)
            : stud2.surname.localeCompare(stud1.surname);

        case SortType.Age:
          return order !== 'desc'
            ? stud1.age - stud2.age
            : stud2.age - stud1.age;

        case SortType.Married:
          return order !== 'desc'
            ? Number(stud1.married) - Number(stud2.married)
            : Number(stud2.married) - Number(stud1.married);

        case SortType.AverageGrade:
          return order !== 'desc'
            ? calcAvg(stud1) - calcAvg(stud2)
            : calcAvg(stud2) - calcAvg(stud1);

        default:
          return 0;
      }
    });
  }

  return copyStudents;
}

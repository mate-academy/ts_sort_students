// describe Student type
type Student = {
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[],
};
// create and export SortType enum
export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'grades',
}
// create SortOrder type
type SortOrder = ('asc' | 'desc');

function calculateAverageGrade(student: Student): number {
  const marks: number = student.grades
    .reduce((x:number, y:number) => x + y) / student.grades.length;

  return marks;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copyStudents: Student[] = Array.from(students);

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      return order === 'asc'
        ? copyStudents
          .sort((stud1: Student, stud2: Student) => stud1[sortBy]
            .localeCompare(stud2[sortBy]))
        : copyStudents
          .sort((stud1: Student, stud2: Student) => stud2[sortBy]
            .localeCompare(stud1[sortBy]));

    case SortType.Age:
      return order === 'asc'
        ? copyStudents
          .sort((stud1: Student, stud2: Student) => stud1[sortBy]
          - (stud2[sortBy]))
        : copyStudents
          .sort((stud1: Student, stud2: Student) => stud2[sortBy]
          - (stud1[sortBy]));

    case SortType.Married:
      return order === 'asc'
        ? copyStudents
          .sort((stud1: Student, stud2: Student) => +stud1[sortBy]
          - +(stud2[sortBy]))
        : copyStudents
          .sort((stud1: Student, stud2: Student) => +stud2[sortBy]
          - +(stud1[sortBy]));

    case SortType.AverageGrade:
      return order === 'asc'
        ? copyStudents
          .sort((stud1: Student, stud2: Student) => calculateAverageGrade(stud1)
          - calculateAverageGrade(stud2))
        : copyStudents
          .sort((stud1: Student, stud2: Student) => calculateAverageGrade(stud2)
          - calculateAverageGrade(stud1));

    default:
      break;
  }

  return copyStudents;
}

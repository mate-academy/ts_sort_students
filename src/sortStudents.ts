// describe Student type
// create and export SortType enum
// create SortOrder type
type Student = {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number [];
};

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'grades',
}

  type SortOrder = 'asc' | 'desc';

function calcAverageMarks(student: Student): number {
  const sumOfMarks: number = student.grades
    .reduce((acum: number, grade: number) => acum + grade);

  return sumOfMarks / student.grades.length;
}

export function sortStudents(
  students: Student[],
  sortBy: SortType,
  order: SortOrder,
): Student[] {
  const copyStudents: Student[] = [...students];

  switch (sortBy) {
    case SortType.Name:
    case SortType.Surname:
      copyStudents.sort(
        (student1: Student, student2: Student) => {
          return order === 'asc'
            ? student1[sortBy].localeCompare(student2[sortBy])
            : student2[sortBy].localeCompare(student1[sortBy]);
        },
      );
      break;

    case SortType.Age:
      copyStudents.sort(
        (student1: Student, student2: Student) => {
          return order === 'asc'
            ? student1[sortBy] - student2[sortBy]
            : student2[sortBy] - student1[sortBy];
        },
      );
      break;

    case SortType.Married:
      copyStudents.sort(
        (student1: Student, student2: Student) => {
          return order === 'asc'
            ? +student1[sortBy] - +student2[sortBy]
            : +student2[sortBy] - +student1[sortBy];
        },
      );
      break;

    case SortType.AverageGrade:
      copyStudents.sort(
        (student1: Student, student2: Student) => {
          return order === 'asc'
            ? calcAverageMarks(student1) - calcAverageMarks(student2)
            : calcAverageMarks(student2) - calcAverageMarks(student1);
        },
      );
      break;

    default:
      break;
  }

  return copyStudents;
}

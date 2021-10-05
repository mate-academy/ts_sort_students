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

function AverageMark(student: Student): number {
  const studentsMarks: number = student.grades
    .reduce((sum: number, mark: number) => sum + mark) / student.grades.length;

  return studentsMarks;
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
      return order === 'asc'
        ? copyStudents
          .sort((student1: Student, student2: Student) => student1[sortBy]
            .localeCompare(student2[sortBy]))
        : copyStudents
          .sort((student1: Student, student2: Student) => student2[sortBy]
            .localeCompare(student1[sortBy]));

    case SortType.Age:
      return order === 'asc'
        ? copyStudents
          .sort((student1: Student, student2: Student) => student1[sortBy]
            - student2[sortBy])
        : copyStudents
          .sort((student1: Student, student2: Student) => student2[sortBy]
            - student1[sortBy]);

    case SortType.Married:
      return order === 'asc'
        ? copyStudents
          .sort((student1: Student, student2: Student) => +student1[sortBy]
            - +student2[sortBy])
        : copyStudents
          .sort((student1: Student, student2: Student) => +student2[sortBy]
            - +student1[sortBy]);

    case SortType.AverageGrade:
      return order === 'asc'
        ? copyStudents
          .sort((student1: Student, student2: Student) => AverageMark(student1)
            - AverageMark(student2))
        : copyStudents
          .sort((student1: Student, student2: Student) => AverageMark(student2)
            - AverageMark(student1));

    default:
      break;
  }

  return copyStudents;
}

// describe Student type
// create and export SortType enum
// create SortOrder type

interface Student {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'averageGrade',
}

type SortOrder = 'asc' | 'desc';

export function sortStudents(
  students: Student[],
  sortBy: string,
  order: SortOrder = 'asc',
): Student[] {
  const copy: Student[] = [...students];

  return copy.sort(
    (studentA: Student, studentB: Student) => {
      const avGradeA = studentA.grades
        .reduce((sum, nextGrade) => sum + nextGrade) / studentA.grades.length;
      const avGradeB = studentB.grades
        .reduce((sum, nextGrade) => sum + nextGrade) / studentB.grades.length;

      switch (sortBy) {
        case SortType.Name:
        case SortType.Surname:
          return (order === 'asc')
            ? studentA[sortBy].localeCompare(studentB[sortBy])
            : studentB[sortBy].localeCompare(studentA[sortBy]);

        case SortType.Age:
          return (order === 'asc')
            ? studentA[sortBy] - studentB[sortBy]
            : studentB[sortBy] - studentA[sortBy];

        case SortType.Married:
          return (order === 'asc')
            ? Number(studentA[sortBy]) - Number(studentB[sortBy])
            : Number(studentB[sortBy]) - Number(studentA[sortBy]);

        case SortType.AverageGrade:
          return (order === 'asc')
            ? avGradeA - avGradeB
            : avGradeB - avGradeA;

        default:
          return 0;
      }
    },
  );
}

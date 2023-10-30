export function sortStudents(
  students: Array<Student>,
  sortBy: SortType,
  order: SortOrder,
  reverseArray: boolean = false,
): Array<Student> {
  const studentsCopy = [...students];

  const compareFunction = (a: Student, b: Student): number => {
    const direction = reverseArray ? -1 : 1;

    switch (sortBy) {
      case SortType.Name:
        return a.name.localeCompare(b.name) * direction;
      case SortType.Surname:
        return a.surname.localeCompare(b.surname) * direction;
      case SortType.Age:
        return (a.age - b.age) * direction;
      case SortType.Married:
        if (a.married === b.married) {
          return 0;
        }
        return a.married ? 1 * direction : -1 * direction;
      case SortType.AverageGrade: {
        const averageGradeA = calcAverageGrade(a.grades);
        const averageGradeB = calcAverageGrade(b.grades);
        return (averageGradeA - averageGradeB) * direction;
      }
      default:
        return 0;
    }
  };

  const sortedStudents = studentsCopy.sort(compareFunction);

  if (reverseArray) {
    sortedStudents.reverse();
  }

  return sortedStudents;
}

import { CourseData } from "../interfaces/course-data";

export const getActiveCourse = (
  coursesData: CourseData[],
  publicKey: string,
): CourseData | undefined => {
  return coursesData.find((item: CourseData) => item.publickey === publicKey);
};

import { AxiosResponse } from "axios";
import { CourseData, CoursePostData } from "../interfaces/course-data";
import { httpClient } from "./http-client";

export const fetchCourses = async () => {
  return await httpClient.get<CourseData[]>("/");
};

export const updateCourseProgress = async (course: Partial<CoursePostData>) => {
  return await httpClient.post<
    Partial<CoursePostData>,
    AxiosResponse<CourseData>
  >("/", course);
};

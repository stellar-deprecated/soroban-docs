import { CourseData, CoursePostData } from "../interfaces/course-data";
import { httpClient } from "./http-client";

const MOCK_GET_RESPONSE: CourseData[] = [
  {
    publickey: "GA7IY6WC5GZUAYU4KMB5Z6QOW46ZNQ5PVRO5KAAD2T3M7JBY3YM4UJ63:0",
    course_data: {
      course_name: "Crowdfund Dapp Challenge",
      course_progress: 0,
      is_completed: false,
      start_date: "",
      completed_at: "",
      url: "",
      steps_amount: 3,
    },
  },
  {
    publickey: "GA7IY6WC5GZUAYU4KMB5Z6QOW46ZNQ5PVRO5KAAD2T3M7JBY3YM4UJ63:1",
    course_data: {
      course_name: "Payment Dapp Challenge",
      course_progress: 0,
      is_completed: false,
      start_date: "",
      completed_at: "",
      url: "",
      steps_amount: 3,
    },
  },
];

export const fetchCourses = () => {
  // return await httpClient.get<CourseData[]>("/");
  return MOCK_GET_RESPONSE;
};

export const updateCourseProgress = async (course: Partial<CoursePostData>) => {
  return await httpClient.post<Partial<CoursePostData>>("/", course);
};

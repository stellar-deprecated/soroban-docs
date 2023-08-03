export interface CourseData {
  publickey: string;
  course_data: {
    course_progress: number;
    url: string;
    completed_at: string;
  };
}

export interface CoursePostData {
  publickey: string;
  course_index: number;
  course_progress: number;
  url: string;
  completed_at: string;
}

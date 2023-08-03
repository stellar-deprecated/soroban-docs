export interface CourseData {
  publickey: string;
  course_data: {
    course_name: string;
    course_progress: number;
    url: string;
    start_date: number | string;
    completed_at: number | string;
    is_completed: boolean;
    steps_amount: number;
  };
}

export interface CoursePostData {
  publickey: string;
  course_id: number;
  course_progress: number;
  url: string;
  start_date: number | string;
  completed_at: number | string;
}

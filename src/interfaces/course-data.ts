export interface CourseData {
  userId: string;
  courseData: {
    courseId: string;
    courseName: string;
    courseProgress: string;
    url?: string;
    startDate: string;
    completedAt?: string;
    isCompleted: boolean;
    milestonesAmount: string;
  };
}

export interface CoursePostData {
  publickey: string;
  courseId: string;
  courseProgress: string;
  url?: string;
  startDate: string;
  completedAt?: string;
}

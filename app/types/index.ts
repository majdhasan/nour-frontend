export interface Course {
    id: string; // Replace with the actual type used for course IDs
    name: string;
    description: string;
    tutorId: string; // Replace with the actual type used for tutor IDs
    isPublic: boolean;
}

export type safeCourse = Omit<Course, "name"> & {
    name: string;
};
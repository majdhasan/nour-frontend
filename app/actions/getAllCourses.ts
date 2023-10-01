import axios from 'axios';

export default async function getAllCourses(params: any) {
    try {
        const { result } = params;

        let query: any = {};

        if (result) {
            query.name = {
                contains: result,
            };
        }

        // Replace 'API_URL' with the actual URL of your course API endpoint
        const response = await axios.get('http://localhost:8080/api/v1/course', {
            params: query, // Include the query parameters here
        });

        const courses = response.data;

        const safeCourse = courses.map((course: any) => ({
            ...course
        }));

        return safeCourse;
    } catch (error: any) {
        throw new Error(error);
    }
}

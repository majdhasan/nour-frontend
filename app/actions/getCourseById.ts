import axios from 'axios';

interface IParams {
    courseId?: string;
}

export default async function getCourseById(params: IParams) {
    try {
        const { courseId } = params;

        if (!courseId) {
            return null;
        }

        // Replace 'API_URL' with the actual URL of your course API endpoint
        const response = await axios.get(`http://localhost:8080/api/v1/course/${courseId}`, {
            // Add any additional configuration you need, e.g., headers or query parameters
        });

        return response.data;


    } catch (error: any) {
        throw new Error(error);
    }
}
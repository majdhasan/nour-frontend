import getCourseById from "@/app/actions/getCourseById"
import Induvidual from "../Induvidual";

interface IParams {
    courseId?:string
}

export default async function page({params}: {params:IParams}) {

    const course = await getCourseById(params);

  return (
    <Induvidual
    courseId={course?.id}
    name={course?.name}
    tutorId={course?.tutorId}
    description={course?.description}
    />
  )
}

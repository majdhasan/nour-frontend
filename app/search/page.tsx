import CourseComponent from "../(components)/CourseComponent";
import getAllCourses from "../actions/getAllCourses"

interface HomeProps {
    searchParams:string
}

export default async function page({searchParams}:HomeProps) {

    const courses = await getAllCourses(searchParams)

  return (
    <div>

            <div className="p-12 flex gap-2 flex-wrap">
                    {courses.map((item:any) => (
                        <CourseComponent
                        key={item.id}
                        data={item}
                        />
                    ))}
            </div>

    </div>
  )
}

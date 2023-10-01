'use client'


import { safeCourse } from "../types"
import { useRouter } from "next/navigation";

interface CourseComponent {
    data:safeCourse,
    key:string,
}

export default function CourseComponent({data,key}:CourseComponent) {

    const router = useRouter();

  return (
    <div className="pt-4" key={key} onClick={() => router.push(`/course/${data.id}`)}>
        <div className="flex flex-col w-[300px] p-2 relative">
            <div className=" cursor-pointer hover:opacity-80">

                <div className="p-1">
                    <h3 className="text-[16px]">{data.id}</h3>
                    <span className="text-gray-400 block text-[9px] font-normal">{data.tutorId}</span>
                    <span>$ {data.description}</span>
                </div>

            </div>
        </div>
    </div>
  )
}

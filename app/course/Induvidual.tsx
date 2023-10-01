'use client'

import Button from "../(components)/Button"
import Image from "next/image"

interface Props {
    tutorId?:string,
    name?:string,
    description?:string | null
    courseId:any,
}

export default function Induvidual({
    tutorId,
    name,
    courseId,
    description,
}:Props) {


  return (
    <div>
        <div className="h-[60vh] bg-zinc-900 flex justify-between text-white px-14 items-center">
            <div>
                <h1 className="text-[4rem]">{name}</h1>
                <p>{tutorId}</p>
                <p>{description}</p>
            </div>

            <div className="w-[400px] bg-white p-1 text-black">

                <div>
                    
                    <div className="flex flex-col gap-1 mt-4">
                        <Button  type='button' label="Buy now" outline/>
                        <p className="text-[12px] text-gray-700 text-center border-t-2 py-2">30 day money back guarantee</p>

                    </div>

                </div>

            </div>

        </div>
    </div>
  )
}

import React from 'react'
import { BsDot } from 'react-icons/bs'
import { AiOutlineArrowRight } from 'react-icons/ai'

export default function JobsCard({ job, posted }) {
    return (
        <div key={job._id} className='w-full cursor-pointer bg-white shadow-md rounded-lg p-6 mb-4'>
            <div className='flex items-center mb-4'>
                {/* <div className='rounded-full overflow-hidden'>
                    <img src={"https://xsgames.co/randomusers/avatar.php?g=male"} alt="User Avatar" className='w-16 h-16' />
                </div> */}
                <div className='ml-4'>
                    <h1 className='text-xl font-semibold'>{job?.user.name}</h1>
                    <p className='text-sm text-gray-700'>{job?.company}</p>
                </div>
            </div>
            <div className='mb-4'>
                <div className='flex items-center mb-2'>
                    <BsDot className='text-indigo-600 text-xl' />
                    <span className='ml-2 text-gray-800'>Salary:</span>
                    <span className='ml-1 font-semibold'>{job?.salary}$ / month</span>
                </div>
                <div className='flex items-center'>
                    <BsDot className='text-indigo-600 text-xl' />
                    <span className='ml-2 text-gray-800'>Deadline:</span>
                    <span className='ml-1 font-semibold'>{new Date(`${job?.job_deadline}`).toLocaleDateString('en-GB')}</span>
                </div>
            </div>
            <div className='flex justify-between items-center'>
                <div className='rounded-full bg-indigo-200 text-indigo-900 py-1 px-4'>
                    <p>{job?.title}</p>
                </div>
                {/* Replace the button with your routing logic */}
                {/* {posted ? (
                    <button onClick={() => router.push(`/frontend/detailPostedJob/${job?._id}`)} className='my-2 py-2 px-4  border border-indigo-600   rounded flex items-center justify-center transition-all duration-700 hover:bg-indigo-600 hover:text-white text-indigo-600 font-semibold'>View Applications <AiOutlineArrowRight className='mx-2 text-xl' /></button>
                ) : (
                    <button onClick={() => router.push(`/frontend/jobDetails/${job?._id}`)} className='my-2 py-2 px-4  border border-indigo-600   rounded flex items-center justify-center transition-all duration-700 hover:bg-indigo-600 hover:text-white text-indigo-600 font-semibold'>View Detail <AiOutlineArrowRight className='mx-2 text-xl' /></button>
                )} */}
            </div>
        </div>
    )
}

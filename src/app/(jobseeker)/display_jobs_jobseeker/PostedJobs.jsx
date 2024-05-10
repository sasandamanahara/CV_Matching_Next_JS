'use client';
import { get_all_posted_job, get_my_posted_job } from '../Services/job';
import { setMyJobs } from '../../(company)/Utils/JobSlice';
import JobsCard from '../_components/JobsCard';

import Cookies from 'js-cookie';
// import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { InfinitySpin } from 'react-loader-spinner';
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify';
import useSWR from 'swr'
import { Provider } from 'react-redux';
import { store } from '../../(company)/Store/store';

export default function AllJobs() {
    // const router = useRouter();
    const dispatch = useDispatch();
    const user = useSelector(state => state?.User?.userData)
    const myJobs = useSelector(state => state?.Job?.myJobs);
    const id = user?._id
    console.log(user);


    const { data, error, isLoading } = useSWR('/getAllJobs', () =>  get_all_posted_job())
    
    useEffect(() => {
        if(data) dispatch(setMyJobs(data?.data))
    }, [data , dispatch])

    if(error) toast.error(error)

    return (
        <Provider store={store}>
        
            {
                isLoading ? (

                    <div className='bg-gray w-full h-screen flex items-center flex-col justify-center'>
                        <InfinitySpin width='200' color="#4f46e5" />
                        <p className='text-xs uppercase'>Loading Resources Hold Tight...</p>
                    </div>
                ) : (
                    <>
                       
                        <div className='w-full  pt-20'>
                            
                            <div className='w-full h-full px-4 py-4 flex  overflow-y-auto  items-start justify-center flex-wrap'>
                                {
                                    myJobs?.map((job, index) => (
                                        <JobsCard key={index} job={job} />
                                    ))
                                }
                            </div>
                        </div>
                    </>
                )
            }
        </Provider>
    )
}

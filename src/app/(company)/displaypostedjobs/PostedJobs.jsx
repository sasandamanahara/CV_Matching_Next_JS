import { get_my_posted_job } from '../Services/job';
import { setMyJobs } from '../Utils/JobSlice';
import JobsCard from '../components_company/JobsCard';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';
import { InfinitySpin } from 'react-loader-spinner';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import useSWR from 'swr';


export default function PostedJobs() {
    const router = useRouter();
    const dispatch = useDispatch();
    const myJobs = useSelector(state => state?.Job?.myJobs);


    const token = Cookies.get("token");
    const tokenParts = token.split(".");
    const payload = JSON.parse(atob(tokenParts[1]));
    const userId = payload.id;
  
    var mongoose = require("mongoose");
    var id = new mongoose.Types.ObjectId(userId);



    // Always call useSWR at the top level
    const { data, error, isLoading: swrIsLoading } = useSWR(id ? '/getMyPostedJobs' : null, () => id ? get_my_posted_job(id) : null);
    
    useEffect(() => {
        if (data) dispatch(setMyJobs(data?.data))
    }, [data, dispatch])

    useEffect(() => {
        if (id === null) {
            console.log("returning");
            return;
        }
        if (!id) {
            router.push('/auth');
        }
    }, [ id, router])

    if (error) {
        toast.error(error);
    }

    return (
        <>
            
            {swrIsLoading ? (
                <div className='bg-gray w-full h-screen flex items-center flex-col justify-center'>
                    <InfinitySpin width='200' color="#4f46e5" />
                    <p className='text-xs uppercase'>Loading Resources Hold Tight...</p>
                </div>
            ) : (
                <div className='w-full pt-20'>
                    
                    <div className='w-full h-full px-4 py-4 flex overflow-y-auto items-start justify-center flex-wrap'>
                        {myJobs?.map((job, index) => (
                            <JobsCard key={index} job={job} posted={true}/>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
}

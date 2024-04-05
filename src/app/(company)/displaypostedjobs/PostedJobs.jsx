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
    const user = useSelector(state => state.User.userData);
    const myJobs = useSelector(state => state?.Job?.myJobs);
    const id =  user ? user._id : "";

    // Always call useSWR at the top level
    const { data, error, isLoading: swrIsLoading } = useSWR(user ? '/getMyPostedJobs' : null, () => user ? get_my_posted_job(id) : null);
    
    useEffect(() => {
        if (data) dispatch(setMyJobs(data?.data))
    }, [data, dispatch])

    useEffect(() => {
        if (user === null) {
            console.log("returning");
            return;
        }
        if (!id) {
            router.push('/auth');
        }
    }, [user, id, router])

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

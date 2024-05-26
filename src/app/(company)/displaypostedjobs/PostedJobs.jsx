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

    // Get token from cookies
    const token = Cookies.get("token");

    // Decode token and get user ID
    let userId = null;
    if (token) {
        const tokenParts = token.split(".");
        if (tokenParts.length === 3) {
            const payload = JSON.parse(atob(tokenParts[1]));
            userId = payload.id;
        } else {
            console.error("Invalid token format");
        }
    } else {
        console.error("Token not found in cookies");
    }

    // Always call useSWR at the top level
    const { data, error, isLoading: swrIsLoading } = useSWR(userId ? '/getMyPostedJobs' : null, () => userId ? get_my_posted_job(userId) : null);
    
    useEffect(() => {
        if (data) dispatch(setMyJobs(data?.data))
    }, [data, dispatch])

    useEffect(() => {
        if (userId === null) {
            console.log("User ID is null");
            return;
        }
        if (!userId) {
            router.push('/auth');
        }
    }, [userId, router])

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

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { InfinitySpin } from 'react-loader-spinner';
import { toast } from 'react-toastify';
import useSWR from 'swr';
import { get_all_posted_job } from '../Services/job';
import { setMyJobs } from '../../(company)/Utils/JobSlice';
import JobsCard from '../_components/JobsCard';
import { Provider } from 'react-redux';
import { store } from '../../(company)/Store/store';
import { FaSearch } from 'react-icons/fa'; // Import FontAwesome icon

export default function AllJobs() {
    const dispatch = useDispatch();
    const myJobs = useSelector(state => state?.Job?.myJobs);
    const [searchQuery, setSearchQuery] = useState('');

    const { data, error, isLoading } = useSWR('/getAllJobs', () => get_all_posted_job());

    useEffect(() => {
        if (data) dispatch(setMyJobs(data?.data));
    }, [data, dispatch]);

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    if (error) toast.error(error);

    // Filter jobs based on search query
    let filteredJobs = [];
    if (myJobs) {
        filteredJobs = myJobs.filter(job =>
            job.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }

    return (
        <Provider store={store}>
            <div className='bg-white rounded-lg shadow-md p-4'>
                <div className="relative">
                    <input
                        type='text'
                        placeholder='Search by title...'
                        className='border border-orange-300 rounded-md px-3 py-2 pr-10 mb-4 focus:outline-none'
                        value={searchQuery}
                        onChange={handleSearchChange}
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 text-orange-500 pointer-events-none">
                        <FaSearch /> {/* FontAwesome Search Icon */}
                    </div>
                </div>
                {isLoading ? (
                    <div className='bg-gray w-full h-screen flex items-center justify-center'>
                        <InfinitySpin width='200' color='orange' />
                        <p className='text-xs uppercase ml-2'>Loading...</p>
                    </div>
                ) : (
                    <div className='w-full flex flex-wrap justify-center'>
                        {filteredJobs.length === 0 ? (
                            <p className='text-gray-500'>No jobs found</p>
                        ) : (
                            filteredJobs.map((job, index) => (
                                <JobsCard key={index} job={job} />
                            ))
                        )}
                    </div>
                )}
            </div>
        </Provider>
    );
}


import Cookies from "js-cookie";

// post job api
//ok
export const post_job = async (formData) => {

    try {


        console.log("posting");
        console.log(formData);
        const res = await fetch(`http://localhost:3000/api/postajob`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${Cookies.get('token')}`
            },
            body: JSON.stringify(formData),
        })
        const data = res.json();
        console.log(data);
        return data;
    } catch (error) {
        console.log('error in post job (service) => ', error);
    }
}


// // get specified job api
// export const get_specified_job = async (id) => {
//     try {
      
//         const res = await fetch(`http://localhost:3000/api/getSpecifiedJob?id=${id}`, {
//             method: 'GET',
//             headers : {'Authorization': `Bearer ${Cookies.get('token')}`}
//         })
//         const data = res.json();
//         return data;
//     } catch (error) {
//         console.log('error in getting  specified job (service) => ', error);
//     }
// }

// get specified job applicants api
//ok
export const get_specified_job_applicants = async (id) => {
    try {
      
        const res = await fetch(`http://localhost:3000/api/getSpecifiedJobApplicants?id=${id}`, {
            method: 'GET',
            headers : {'Authorization': `Bearer ${Cookies.get('token')}`}
        })
        const data = res.json();
        return data;
    } catch (error) {
        console.log('error in getting  specified job (service) => ', error);
    }
}



// get all company jobs api

export const get_all_jobs_of_company = async (id) => {
    try {
      
        const res1 = await fetch(`http://localhost:3000/api/getAllJobsCompany?id=${id}`, {
            method: 'GET',
            headers : {'Authorization': `Bearer ${Cookies.get('token')}`}
        })

        const res2 = await fetch(`http://localhost:3000/api/getPostedJobs?id=${id}`, {
            method: 'GET',
            headers : {'Authorization': `Bearer ${Cookies.get('token')}`}
        })
        const data1 = await res1.json(); // Wait for JSON data to be available
        const data2 = await res2.json(); // Wait for JSON data to be available

        return { data1, data2 }; // Return both data1 and data2
    } catch (error) {
        console.log('error in getting  specified job (service) => ', error);
    }
}



// // apply  job api

// export const apply_job = async (formData) => {
//     try {
//         const res = await fetch(`http://localhost:3000/api/applyajob`, {
//             method: 'POST',
//             headers : {'Authorization': `Bearer ${Cookies.get('token')}`},
//             body: formData,
//         });
//         const data = await res.json();
//         return data;
//     } catch (error) {
//         console.log('error in apply job (service) => ', error);
//     }
// }


// // get my all applied job api
 
// export const get_my_applied_job = async (id) => {
//     try {
        
//         const res = await fetch(`http://localhost:3000/api/job/getAppliedJobs?id=${id}`, {
//             method: 'GET',
//             headers : {'Authorization': `Bearer ${Cookies.get('token')}`}
//         })
//         const data = res.json();
//         return data;
//     } catch (error) {
//         console.log('error in getting  getting my all job (service) => ', error);
//     }
// }

//ok
export const get_all_posted_job = async (id) => {

    try {

        console.log("done1");
        const res = await fetch("http://localhost:3000/api/getalljobs", {
            method: 'GET',
            headers : {'Authorization': `Bearer ${Cookies.get('token')}`}
        })
        const data = res.json();
        return data;
    } catch (error) {
        console.log('error in   getting all job (service) => ', error);
    }
}


// get my all posted job api 
//ok
export const get_my_posted_job = async (id) => {

    try {
        console.log("getting id "+id);
        const res = await fetch(`http://localhost:3000/api/getPostedJobs?id=${id}`, {
            method: 'GET',
            headers : {'Authorization': `Bearer ${Cookies.get('token')}`}
        })
        const data = res.json();
        return data;
    } catch (error) {
        console.log('error in   getting my all job (service) => ', error);
    }
}


// // get my all application of specified jobs api

// export const get_all_applications = async (id) => {
//     try {
//         const res = await fetch(`http://localhost:3000/api/job/getAllApplicationsOfSpecifiedJob?id=${id}`, {
//             method: 'GET',
//             headers : {'Authorization': `Bearer ${Cookies.get('token')}`}
//         })
//         const data = res.json();
//         return data;
//     } catch (error) {
//         console.log('error in   getting my all application of specified jobs (service) => ', error);
//     }
// }


// change application status api
//not done yet
export const change_application_status = async (formData) => {
    try {
        const res = await fetch(`http://localhost:3000/api/job/responseOfApplication`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${Cookies.get('token')}`
            },
            body: JSON.stringify(formData),
        })
        const data = res.json();
        return data;
    } catch (error) {
        console.log('error in   getting my all application of specified jobs (service) => ', error);
    }
}


export const get_application_details = async (id) => {
    try {
        const res = await fetch(`http://localhost:3000/api/job/getApplicationDetail?id=${id}`, {
            method: 'GET',
            headers : {'Authorization': `Bearer ${Cookies.get('token')}`}
        })
        const data = res.json();
        return data;
    } catch (error) {
        console.log('error in   getting my all application of specified jobs (service) => ', error);
    }
}


//ok
export const get_matched_score = async (cvText, jdText) => {
    const formData = {
        cv_text: cvText,
        jd_text: jdText
    };

    try {
        const res = await fetch(`http://localhost:5000/match-skills`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${Cookies.get('token')}`
            },
            body: JSON.stringify(formData)
        });

        if (!res.ok) {
            throw new Error('Failed to fetch');
        }

        const data = await res.json();
        return data;
    } catch (error) {
        console.log('error in get_matched_score (service) => ', error);
        return { error: error.message };
    }
}
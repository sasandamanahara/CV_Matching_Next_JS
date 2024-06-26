import Cookies from "js-cookie";
//ok
export const get_all_posted_job = async (id) => {

    try {

        console.log("done1");
        const res = await fetch("/api/getalljobs", {
            method: 'GET',
            headers : {'Authorization': `Bearer ${Cookies.get('token')}`}
        })
        const data = res.json();
        return data;
    } catch (error) {
        console.log('error in   getting all job (service) => ', error);
    }
}


// get specified job api
//ok
export const get_specified_job = async (id) => {
    try {
      
        const res = await fetch(`/api/getSpecifiedJob?id=${id}`, {
            method: 'GET',
            headers : {'Authorization': `Bearer ${Cookies.get('token')}`}
        })
        const data = res.json();
        return data;
    } catch (error) {
        console.log('error in getting  specified job (service) => ', error);
    }
}


// apply  job api
//ok
export const apply_job = async (formData) => {
    console.log("formdata");
    try {
        console.log(formData);
        const res = await fetch(`/api/applytojob`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });
        const data = await res.json();
        
        return data;
    } catch (error) {
        console.log('error in apply job (service) => ', error);
    }
}

// get my all applied job api

export const get_my_applied_job = async (id) => {
    try {
        const res = await fetch(`/api/getAppliedJobs?id=${id}`, {
            method: 'GET',
            headers : {'Authorization': `Bearer ${Cookies.get('token')}`}
        })
        const data = res.json();
        return data;
    } catch (error) {
        console.log('error in getting  getting my all job (service) => ', error);
    }
}


export const update_profile = async (formData) => {

    try {


        console.log("posting");
        console.log(formData);
        const res = await fetch(`/api/updateprofileJobSeeker`, {
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
        console.log('error in updating (service) => ', error);
    }
}


export const load_profile = async (userID) => {
    try {
        // console.log("getting resume");
        console.log(userID);
        const res = await fetch(`/api/loadProfileJobSeeker?id=${userID}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${Cookies.get('token')}`
            },
        });

        // Await the JSON parsing
        const data = await res.json();
        // console.log(data);
        return data;
    } catch (error) {
        console.log('error in loading => ', error);
    }
};


export const update_email = async (formData) => {
    try {
        console.log("formData");
        const res = await fetch("/api/updateEmailJobSeeker", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
        const data = await res.json();
        return data;
    } catch (error) {
        console.log('error in updating (service) => ', error);
    }
}


export const update_password = async (formData) => {
    try {
        console.log("formData");
        const res = await fetch("/api/updatePasswordJobSeeker", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
        const data = await res.json();
        return data;
    } catch (error) {
        console.log('error in updating (service) => ', error);
    }
}

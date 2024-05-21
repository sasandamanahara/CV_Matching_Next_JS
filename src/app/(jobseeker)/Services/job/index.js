import Cookies from "js-cookie";
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


// get specified job api
export const get_specified_job = async (id) => {
    try {
      
        const res = await fetch(`http://localhost:3000/api/getSpecifiedJob?id=${id}`, {
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

export const apply_job = async (formData) => {
    try {
        const res = await fetch(`/api/applyJob`, {
            method: 'POST',
            headers : {'Authorization': `Bearer ${Cookies.get('token')}`},
            body: formData,
        });
        const data = await res.json();
        return data;
    } catch (error) {
        console.log('error in apply job (service) => ', error);
    }
}

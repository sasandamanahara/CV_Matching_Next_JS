

export const register_me_jobseeker = async (formData) => {
    try {

        const res = await fetch(`/api/auth/registerJobSeeker`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
        const data = res.json();
        return data;
    } catch (error) {
        console.log('error in register (service) => ', error);
    }
}

export const login_me_jobseeker = async (formData) => {
    console.log("gettong");
    try {
        console.log("formData");
        const res = await fetch("/api/auth/loginJobSeeker", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
        const data = await res.json();
        return data;
    } catch (error) {
        console.log('error in login (service) => ', error);
    }
}



export const forget_password_jobseeker = async (formData) => {
    try {
        const res = await fetch(`/api/auth/forgetPasswordJobseeker`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
        const data = res.json();
        return data;
    } catch (error) {
        console.log('error in forget Password (service) => ', error);
    }
}


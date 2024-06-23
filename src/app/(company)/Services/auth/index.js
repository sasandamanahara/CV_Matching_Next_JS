

export const register_me_company = async (formData) => {
    try {
    console.log("regg");
        const res = await fetch(`/api/auth/registerCompany`, {
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

export const login_me_company = async (formData) => {
    try {
        const res = await fetch("/api/auth/loginCompany", {
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



export const forget_password_company = async (formData) => {
    try {
        const res = await fetch(`/api/auth/forgetPasswordCompany`, {
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


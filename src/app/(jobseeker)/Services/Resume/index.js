import Cookies from 'js-cookie';

export const post_resume = async (formData) => {
    try {
        console.log("posting");
        console.log(formData);
        const res = await fetch(`http://localhost:3000/api/postresume`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${Cookies.get('token')}`
            },
            body: JSON.stringify(formData),
        });

        // Await the JSON parsing
        const data = await res.json();
        console.log(data);
        return data;
    } catch (error) {
        console.log('error in post resume (service) => ', error);
    }
};

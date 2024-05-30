import axios from "axios";

const baseApiResponse = (data, isSuccess) => {
    return {
        success: isSuccess,
        data: data || null,
    };
};

export const userSignUp = async (formData) => {
    try {
        const response = await axios.post(
            `${import.meta.env.VITE_API_URL}/user/signup`,
            formData
        );
        console.log("RESPONSE FROM BACKEND");
        console.log(response.data);
        return baseApiResponse(response.data, true);
    } catch (error) {
        console.error(error);
        return baseApiResponse(null, false);
    }
};

export const userLogin = async (formData) => {
    try{
        const response = await axios.post(
            `${import.meta.env.VITE_API_URL}/user/login`,
            formData
        );
        console.log("RESPONSE FROM BACKEND");
        console.log(response.data);
        return baseApiResponse(response.data, true);
    } catch (error) {
        console.error(error);
        return baseApiResponse(null, false);
    }
}

export const getUserbyId = async (formData) => {
    try{
        const response = await axios.post(
            `${import.meta.env.VITE_API_URL}/user/getById`, formData
        )
    } catch (error) {
        console.error(error);
        return baseApiResponse(null, false);
    }
}



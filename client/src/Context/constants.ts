export const apiUrl =
    process.env.NODE_ENV !== "production"
        ? "http://localhost:4000/api"
        : "https://project-social-media-app-v1.herokuapp.com/api";

export const accessToken = typeof window !== 'undefined' ? localStorage.getItem("accessToken") : null;

export const config = () => {
    return {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    };
};


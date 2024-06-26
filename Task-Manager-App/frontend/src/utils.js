import { toast } from "react-toastify";

export const API_URL = 'https://task-manager-api-xi-seven.vercel.app';
export const notify = (message, type) => {
    toast[type](message);
}

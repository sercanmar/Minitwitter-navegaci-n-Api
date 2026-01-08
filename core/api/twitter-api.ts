
import axios from 'axios';

export const twitterApi = axios.create({
    baseURL: 'https://tw.navelsystems.com/api', 
});
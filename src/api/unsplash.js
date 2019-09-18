import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID aabecc2e5d6d21a375b256a6664cab4e2a3c78a569a49f813aa6d61b1bab1fb1'
    }
});
import axios from 'axios';

export default axios.create({
    baseUrl: 'https://api.unsplash.com/',
    headers: {
        Authorization: 'Client-ID nrhvy9n3WDfeYdcqEHbu5MVk5d0cMFAbjPtRMvKL-jA',
    }
})
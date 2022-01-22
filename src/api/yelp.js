import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: `Bearer FdXgHz8297ieHBDtnqcuLfhVWe8dNtOBN2M0YutBom2ZKUUfDBnDyBa8ZpHTYvNlRDQ35Sm7i5SVE1pQHjlfurQhjvHx-an2TnRrqjjVDrmQ7vufkRear_11_5LbYXYx`
    }
});
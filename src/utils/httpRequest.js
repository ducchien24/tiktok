import axios from 'axios';

console.log(process.env)
const httpRequest = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
});

const get = async (path, options = {}) => {
    const res = await httpRequest.get(path, options);
    return res.data;
};

const post = async (path,  body = {},options={}) => {
    const res = await httpRequest.post(path, body,options);
    console.log(res)
    return res.data;
}

export { get,post };

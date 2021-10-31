import axios from 'axios';

export default axios.create({
    baseURL: 'https://streamline-wiring-api.herokuapp.com/email/'
    // baseURL: 'http://localhost:3001/email/'
});

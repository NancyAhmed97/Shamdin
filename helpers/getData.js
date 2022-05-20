import axios from 'axios';

export default function getData(url, params = {}){ 

return axios.get(url, {
  headers: {
    'Authorization': 'Bearer '+ localStorage.getItem('accessToken'),
    "Accept": "application/json"
  },
  params: params
  })
      //.then(response => response.json())
     
  }

  
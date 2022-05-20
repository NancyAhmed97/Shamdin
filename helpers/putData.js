
import axios from 'axios';

export default function putData(url, obj){

  //obj.kToken = new Date().getDate()+''+new Date().getHours();

return axios.put(url, obj, {
  headers: {
    'Authorization': 'Bearer '+ localStorage.getItem('accessToken'),
    "Accept": "application/json"
  }
})
      //.then(response => response.json())
     
  }

  
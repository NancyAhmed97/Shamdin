
import axios from 'axios';

export default function postData(url, obj){
  //obj.kToken = new Date().getDate()+''+new Date().getHours();

return axios.post(url, obj,
  {
    headers: {
      'Authorization': 'Bearer '+ localStorage.getItem('accessToken'),
      "Accept": "application/json"
    }
  })
     
  }

  
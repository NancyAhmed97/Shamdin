import axios from 'axios';

export default function deleteData(url) {

  return axios.delete(url, {
    headers: {
      'Authorization': 'Bearer ' + localStorage.getItem('accessToken'),
      "Accept": "application/json"
    }
  }
  )

}


import axios from 'react-native-axios'

export default axios.create({
        baseURL: 'http://192.168.1.100:8080/api',
        headers: {
          //'Authorization': 'Bearer '+ localStorage.getItem('token')
          'Content-Type': 'application/json'
        }
      })

import http from "./api";


class resetpwd {
  postEmail(email) {
    return http.post("/forgot_password", {
email:email
      })
      .then((response) => {
    console.log(response.data);    
}).catch((error)=>{console.log(error)});
  }
  postRestPassword(token , password ){
    http.post('/reset_password', {
        token: token,
        password: password
      })

  }


}

export default new resetpwd();
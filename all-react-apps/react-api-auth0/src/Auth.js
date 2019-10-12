import auth0 from 'auth0-js';

const LOGIN_SUCCESS_PAGE = "/recipes";
const LOGIN_FAILURE_PAGE = "/loginFailed";

/* eslint no-restricted-globals: 0 */
export default class Auth{

    auth0 = new auth0.WebAuth({
        domain: "musibs.auth0.com",
        clientID: "Le06hTcIFWT27UYrBw4c8ByPnSNVcolq",
        redirectUri: "http://localhost:3000/callback",
        audience: "https://musibs.auth0.com/userinfo",
        responseType: "token id_token",
        scope: "openid profile"
    })

    constructor(){
       this.login = this.login.bind(this);
    }

    login(){
        this.auth0.authorize();
    }

    handleAuthentication(){
        this.auth0.parseHash((err, authResult) => {
            if(authResult && authResult.accessToken && authResult.idToken){
                console.log('Autenticated');
                let expiresAt = JSON.stringify((authResult.expiresIn) * 1000 +new Date().getTime());
                localStorage.setItem("access_token", authResult.accessToken);
                localStorage.setItem("id_token", authResult.idToken);
                localStorage.setItem("expires_at", expiresAt);
                location.hash = "";
                location.pathname = LOGIN_SUCCESS_PAGE;
            }
            else if(err){
                console.log(err);
                location.pathname = LOGIN_FAILURE_PAGE;
            }
        })
    }
}
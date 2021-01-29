$(function() {
    function getUserInfo() {

        axios.get('/my/userinfo').then(res => { console.log(res) })


    }
    getUserInfo()



})
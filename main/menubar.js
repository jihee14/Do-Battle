let logout = document.getElementById("logout");

logout.addEventListener("click", logoutConfirm);



function logoutConfirm(){
    if (confirm("정말 로그아웃 하시겠습니까?")){
        console.log("로그아웃");
        location.href= "/Users/yunmacbook/Desktop/Do-Battle/login/login.html";
    }
    else{
        console.log("취소된로그아웃");
    }
}
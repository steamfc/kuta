const button_1=document.getElementById("button1")
let clicks=0;
button_1.onclick=function(){
    clicks++;
    if (clicks%2!==0) {  button_1.style.background="white";
    button_1.style.color="black"
    button_1.textContent="Subscribed";
}
    else if(clicks%2==0){
        button_1.style.background="red";
        button_1.style.color="white"
        button_1.textContent="Subscribe";}
    console.log(clicks)
    }


class User{
    static user_count=0;
    constructor(username){
        User.user_count++;
        this.username=username
    }
}
user1=new User("Spongebob")
user2=new User("Spongebob")
user3=new User("Spongebob")

console.log(User.user_count);
let tokken="";

function logIn(){
    email=document.getElementById("logEmail").value;
     password=document.getElementById("logPassword").value;
     let bodyBluePrint={
        login_id:email,
        password:password
     }
     console.log(bodyBluePrint,JSON.stringify(bodyBluePrint))
    // fetch(`https://qa2.sunbasedata.com/sunbase/portal/api/assignment_auth.jsp`,{method:"POST",headers:{Authorization:"dGVzdEBzdW5iYXNlZGF0YS5jb206VGVzdEAxMjM="},body:JSON.stringify(bodyBluePrint)}).then((res)=>res.json()).then((data)=>console.log(data)).catch((err)=>console.log(err))
   
    // fetch(`https://qa2.sunbasedata.com/sunbase/portal/api/assignment_auth.jsp`,{method:"POST",Parameters:{cmd:"create"},headers:{Authorization:"dGVzdEBzdW5iYXNlZGF0YS5jb206VGVzdEAxMjM="},body:{
    //     "first_name": "Jane",
    //     "last_name": "Doe",
    //     "street": "Elvnu Street",
    //     "address": "H no 2 ",
    //     "city": "Delhi",
    //     "state": "Delhi",
    //     "email": "sam@gmail.com",
    //     "phone": "12345678"
    //     }
    //     }).then((res)=>res.json()).then((data)=>console.log(data)).catch((err)=>console.log(err))

    fetch('https://qa2.sunbasedata.com/sunbase/portal/api/assignment_auth.jsp', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ login_id: email, password: password })
    })
    .then(response => {
        if (response.ok) {
            return response.json();
        }
        throw new Error('Authentication failed');
    })
    .then(data => {
        const token = data.token; // assuming token is received
        document.getElementById("loginForm").style.display = 'none';
        console.log(data);
        // document.getElementById("customerActions").style.display = 'block';
        // Store token for further API calls
        // localStorage.setItem('token', token);
    })
    .catch(error => {
        console.error('Error:', error);
    });


}
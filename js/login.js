document.getElementById('login-btn').addEventListener('click', 
    function(event){
        event.preventDefault();
        const phoneNumber = document.getElementById("phone-number").value;
        const pinNumber = document.getElementById("pin-number").value;
        if (phoneNumber === '0123456789' && pinNumber=== '12345') {
            window.location.href = '/home.html';
        } else {
            alert('Wrong Phone number or Pin number');
        }
    }
)
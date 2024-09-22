//cash out form show
document.getElementById("cashOut-form-btn")
.addEventListener('click', 
    function(){
        document.getElementById("cashOut-form").classList.remove('hidden');
        document.getElementById("addMoney-form").classList.add('hidden');
    }
)
//add money form show
document.getElementById("addMoney-form-btn")
.addEventListener('click', 
    function(){
        document.getElementById("cashOut-form").classList.add('hidden');
        document.getElementById("addMoney-form").classList.remove('hidden');
    }
)
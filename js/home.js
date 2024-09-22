// add money to the main balance
document.getElementById("addMoney-btn")
    .addEventListener('click', 
        function (event){
            event.preventDefault();
            const addAmount = document.getElementById("addAmount-input").value;
            const addAmountNumber = parseFloat(addAmount);
            const inputPin = document.getElementById("pinNumber-input").value;
            if (inputPin === '12345') {
                const accountBalance = document.getElementById("account-balance").innerText;
                const balanceNumber = parseFloat(accountBalance);
                const newBalance = balanceNumber + addAmountNumber;
                document.getElementById("account-balance").innerText = newBalance;
            } else {
                alert('Failed to add money! Please try again.');
            }
        }
)

// cash out from the main balance
document.getElementById("cashOut-btn")
.addEventListener('click', 
    function (event){
        event.preventDefault();
        const cashOut = document.getElementById("cashOutAmount-input").value;
        const cashOutNumber = parseFloat(cashOut);
        const cashOutPin = document.getElementById("cashOutPinNumber-input").value;
        if (cashOutPin === '12345') {
            const accountBalance = document.getElementById("account-balance").innerText;
            const balanceNumber = parseFloat(accountBalance);
            const newBalance = balanceNumber - cashOutNumber;
            document.getElementById("account-balance").innerText = newBalance;
        } else {
            alert('Failed to cash out money! Please try again.');
        }
    }
)
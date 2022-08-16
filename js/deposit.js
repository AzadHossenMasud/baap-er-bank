const btnDeposit = document.getElementById('btn-deposit')
btnDeposit.addEventListener('click', function () {


    // deposit 

    let depositField = document.getElementById('deposite-field')
    let deposit = depositField.value


    let depositAmount = document.getElementById('deposit-amount')
    let depositAmountValue = depositAmount.innerText


    let totalDeposit = parseInt(depositAmountValue) + parseInt(deposit)

    depositAmount.innerText = totalDeposit


    depositField.value = ''

    // balance

    let balanceAmount = document.getElementById('balance-amount')
    let balance = balanceAmount.innerText

    totalBalance = parseInt(balance) + parseInt(deposit)
    balanceAmount.innerText = totalBalance



})
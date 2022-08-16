const btnWithdraw = document.getElementById('btn-withdraw')
btnWithdraw.addEventListener('click', function () {
    const withdrawField = document.getElementById('withdraw-field')
    const withdraw = withdrawField.value

    const withdrawAmount = document.getElementById('withdraw-amount')
    const withdrawAmountValue = withdrawAmount.innerText

    const totalWithdraw = parseInt(withdrawAmountValue) + parseInt(withdraw)
    withdrawAmount.innerText = totalWithdraw

    withdrawField.value = ''

    // balance

    let balanceAmount = document.getElementById('balance-amount')
    let balance = balanceAmount.innerText

    totalBalance = parseInt(balance) - parseInt(withdraw)
    balanceAmount.innerText = totalBalance
})
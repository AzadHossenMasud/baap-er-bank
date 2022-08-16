const btnWithdraw = document.getElementById('btn-withdraw')
btnWithdraw.addEventListener('click', function () {
    const withdrawField = document.getElementById('withdraw-field')
    const withdraw = withdrawField.value

    const withdrawAmount = document.getElementById('withdraw-amount')
    const withdrawAmountValue = withdrawAmount.innerText

    let balanceAmount = document.getElementById('balance-amount')
    let balance = balanceAmount.innerText

    withdrawField.value = ''

    // if (typeof (parseInt(withdraw)) === 'number') {
    //     alert('Please Type Valid Number');
    //     return;
    // }

    if (parseInt(withdraw) > parseInt(balance)) {
        alert('Insufficient Balance')
        return;
    }

    const totalWithdraw = parseInt(withdrawAmountValue) + parseInt(withdraw)
    withdrawAmount.innerText = totalWithdraw



    // balance



    totalBalance = parseInt(balance) - parseInt(withdraw)
    balanceAmount.innerText = totalBalance
})
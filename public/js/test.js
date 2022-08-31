fetch('/test/api')
.then(res => res.json())
.then(data => {
    document.getElementById('result').innerText += ' ' + data.amount + '  ' + data.result;
})
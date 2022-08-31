fetch('/test/api')
.then(res => res.json())
.then(data => {
    document.getElementById('result').innerText +=  '  ' + data.result;
})
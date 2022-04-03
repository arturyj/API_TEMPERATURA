var button = document.querySelector('.button');
var inputValue = document.querySelector('.inputValue');
var name = document.querySelector('.name');
var desc = document.querySelector('.desc');
var temp = document.querySelector('.temp');

button.addEventListener('click',function (){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=575ff76a08f2e0d6a4d98c0d6e4f0a85&units=metric')
        .then(response => response.json())
        .then(data => {
            console.log(data)
            var nameValue = data['name']
            var tempValue = data['main']['temp']
            var descValue = data['weather'][0]['description']
            name.innerHTML = nameValue;
            temp.innerHTML = tempValue;
            desc.innerHTML = descValue;
        })
    .catch(err => alert("Nenhum resultado encontrado."))
});
var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  fetch("https://api.openweathermap.org/data/2.5/forecast?q=Denver,CoL&appid=0cd1c241fa9f2ab743c401cd5274afbb&cnt=3&units=imperial", requestOptions)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        for (let index = 0; index < data.list.length; index++) {
            const element = data.list[index];
            console.log(element.weather[0].description)
        }
    })
    .catch(error => console.log('error', error));
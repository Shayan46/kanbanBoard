

async function fetchData(){
    let url = "http://api.weatherapi.com/v1/current.json?key=0b97ede323114d9186982449231711&q=London&aqi=no";
    let response = await fetch(url);
    console.log(response);
    let data = await response.json();
    console.log(data);

}
fetchData ();
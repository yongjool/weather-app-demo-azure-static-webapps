const cityInput = document.getElementById("input");
const dispalySection = document.getElementById("display");


const API_KEY = "a5b5f6f4ac2c4f9a96552213241311";

const handleClick = () => {
  let currentCity = cityInput.value;

  const getWeather = fetch(
    `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${
      currentCity || "London"
    }&aqi=no`
  )
    .then((res) => res.json())
    .then((data) => {
        dispalySection.innerHTML =
      ` <p>${data.location.name}'s temperature is ${data.current.temp_c}℃.</p>
        <p>It's ${data.current.condition.text}.</p>
        <img src="${data.current.condition.icon}" alt="icon"/>
      `;
    })
    .catch((err) => {
      console.log(err);
      dispalySection.innerText = `Please enter a vaild city.`;
    });
};

handleClick();

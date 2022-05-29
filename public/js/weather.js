const searchBtn = document.querySelector("#search_btn");
const temp = document.querySelector(".weat");
const input = document.querySelector(".city");
const cityname = document.querySelector(".loc");
const Day = document.querySelector(".day");
const date = document.querySelector(".date");
const tempStatus = document.querySelector(".tempStatus");
const weather_b = document.querySelector(".weather-template");

const Dates = () => {
  const d = new Date();

  const day_array = [];

  day_array[0] = "Mon";
  day_array[1] = "Tues";
  day_array[2] = "Wed";
  day_array[3] = "Thurs";
  day_array[4] = "Fri";
  day_array[5] = "Sat";
  day_array[6] = "Sun";

  const month_array = [];

  month_array[0] = "Jan";
  month_array[1] = "Feb";
  month_array[2] = "March";
  month_array[3] = "April";
  month_array[4] = "May";
  month_array[5] = "June";
  month_array[6] = "July";
  month_array[7] = "Aug";
  month_array[8] = "Sept";
  month_array[9] = "Oct";
  month_array[10] = "Nov";
  month_array[11] = "December";

  Day.innerHTML = day_array[d.getDay()];
  date.innerHTML = ` ${d.getDate()} ${month_array[d.getMonth()]}`;
};

// Date();

let Display_Weather = async () => {
  event.preventDefault();
  let val = input.value;
  if (val == "") cityname.innerHTML = "Please enter the correct city name !";
  else {
    const api = `https://api.openweathermap.org/data/2.5/weather?q=${val}&appid=179ece0c68a14006518df0b24d5c7ce7`;

    try {
      let data = await fetch(api);
      let realdata = await data.json();

      const array = [realdata];
      // console.log(array);

      weather_b.classList.remove("none");

      temp.innerHTML =
        Math.floor(array[0].main.temp - 273.15) + "<sup>o</sup>C";
      cityname.innerHTML = `${array[0].name} , ${array[0].sys.country}`;
      // tempStatus.innerHTML = array[0].weather[0].description;

      let sts = array[0].weather[0].main;

      if (sts == "Clear") {
        tempStatus.innerHTML =
          "<i class='fas fa-sun' style='color:white;'></i>";
      } else if (sts == "Clouds") {
        tempStatus.innerHTML =
          "<i class='fas fa-cloud' style='color:white;'></i>";
      } else if (sts == "Rain") {
        tempStatus.innerHTML =
          "<i class='fas fa-cloud-rain' style='color:white;'></i>";
      } else {
        tempStatus.innerHTML =
          "<i class='fas fa-sun' style='color:white;'></i>";
      }
    } catch (err) {
      cityname.innerHTML = "Please enter the correct city name !";
      weather_b.classList.add("none");
      console.log(err);
    }
  }
};

searchBtn.addEventListener("click", Display_Weather);
// DisplayWeather();
Dates();

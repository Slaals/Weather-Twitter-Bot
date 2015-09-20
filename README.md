

---

TwitBot gives the weather regarding the given city or the city catched thanks to geoloc. :

Request example : @TwitBot weather/Austin

Change @TwitBot to your bot name!

To get the weather the bot uses http://openweathermap.org/api :

---

```
{
    "base": "stations",
    "clouds": {
        "all": 68
    },
    "cod": 200,
    "coord": {
        "lat": 35,
        "lon": 139
    },
    "dt": 1433448132,
    "id": 1851632,
    "main": {
        "grnd_level": 1016.62,
        "humidity": 99,
        "pressure": 1016.62,
        "sea_level": 1024.57,
        "temp": 293.741,
        "temp_max": 293.741,
        "temp_min": 293.741
    },
    "name": "Shuzenji",
    "sys": {
        "country": "JP",
        "message": 0.0228,
        "sunrise": 1433359822,
        "sunset": 1433411653
    },
    "weather": [
        {
            "description": "broken clouds",
            "icon": "04n",
            "id": 803,
            "main": "Clouds"
        }
    ],
    "wind": {
        "deg": 54.5008,
        "speed": 1.76
    }
}

      :::::::::  ::::::::::     :::     :::::::::    :::   :::   :::::::::: 
     :+:    :+: :+:          :+: :+:   :+:    :+:  :+:+: :+:+:  :+:         
    +:+    +:+ +:+         +:+   +:+  +:+    +:+ +:+ +:+:+ +:+ +:+          
   +#++:++#:  +#++:++#   +#++:++#++: +#+    +:+ +#+  +:+  +#+ +#++:++#      
  +#+    +#+ +#+        +#+     +#+ +#+    +#+ +#+       +#+ +#+            
 #+#    #+# #+#        #+#     #+# #+#    #+# #+#       #+# #+#             
###    ### ########## ###     ### #########  ###       ### ##########       

---------------------------------------------------------------------------

TwitBot est un bot twitter qui récupère les Tweets et les analyse.

Il donne en réalité la météo selon la géolocalisation du tweet ou du paramètre indiqué :

Le tweeter du bot est @SlooTony.

Afin d'obtenir la météo faut tweet : @SleeTony meteo/Troyes

Si le tweet est géolocalisé : @SlooTony meteo


Pour traiter les données de la météo le bot fait appel à l'API http://openweathermap.org/api :

Voici un exemple de résultat :

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
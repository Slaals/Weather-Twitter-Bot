      :::::::::  ::::::::::     :::     :::::::::    :::   :::   :::::::::: 
     :+:    :+: :+:          :+: :+:   :+:    :+:  :+:+: :+:+:  :+:         
    +:+    +:+ +:+         +:+   +:+  +:+    +:+ +:+ +:+:+ +:+ +:+          
   +#++:++#:  +#++:++#   +#++:++#++: +#+    +:+ +#+  +:+  +#+ +#++:++#      
  +#+    +#+ +#+        +#+     +#+ +#+    +#+ +#+       +#+ +#+            
 #+#    #+# #+#        #+#     #+# #+#    #+# #+#       #+# #+#             
###    ### ########## ###     ### #########  ###       ### ##########       

---------------------------------------------------------------------------

TwitBot est un bot twitter qui r�cup�re les Tweets et les analyse.

Il donne en r�alit� la m�t�o selon la g�olocalisation du tweet ou du param�tre indiqu� :

Le tweeter du bot est @SlooTony.

Afin d'obtenir la m�t�o faut tweet : @SleeTony meteo/Troyes

Si le tweet est g�olocalis� : @SlooTony meteo


Pour traiter les donn�es de la m�t�o le bot fait appel � l'API http://openweathermap.org/api :

Voici un exemple de r�sultat :

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
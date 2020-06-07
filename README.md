# Ruculabot

Otro bot de twitter que surgió como side-project y cumple con lo que promete.

## Contenido

1. [Cómo nacio?](#Cómo-nacio?)
2. [Dónde levanta la data?](#Donde-levanta-la-data?)
3. [Dónde esta alojado?](#Dónde-esta-alojado?)
4. [Dandole vida](#Dandole-vida)
5. [Código abierto](#Código-abierto)
6. [Updates del Bot](#Updates-del-Bot)


## Cómo nacio?

Surgió por la necesidad, como cualquier ciudadano Argentino, de =monitorear el dolar en todas sus variantes=.
Con 0 conocimientos en JS, bots y uso de APIs. Aprendiendo (si se lo puede llamar asi) a medida que iba avanzando, googleando y mirando otros proyectos similares para utilizar de guia.
La idea siempre fue, recibir el ==tipo de cambio diario durante el horario bancario en Twitter.==
Es decir, como bien dice la bio, de 10:00 a 15:30, tirando al día de hoy, cotización de:


- Dolar Turista / Solidario
- Dolar Contado c/Liq
- Dolar MEP
- Dolar Blue
- Dolar Banco Nación

Por ultimo, como esto surgio en Julio/Agosto 2019(aprox), y el *Riesgo Pais* era tema de todos los días en ese momento, se agrego que luego del cierre bancario, se informara el RP junto con el tipo de cambio de otras 2 monedas: *Euro* y *Real*.


## Donde levanta la data?

El primer "problema" fue de donde levantaria la información. 
Hoy en día son pocos los portales que actualizan constatemente el Tipo de Cambio en nuestro pais.
Se paso por:
1. [DolarHoy](https://www.dolarhoy.com/) 
2. [La Nacion](https://www.lanacion.com.ar/)
3. [Ambito](https://www.ambito.com/)

Inicialmente como algunos Portales no permitian, de una manera amigable recolectar los datos que mostraban, se utilizo la herramienta [ParseHub](https://www.parsehub.com/).

![Imgur](https://i.imgur.com/q9mIbKa.png)
### Que hace este harramienta? 
Basicamente es una herramienta que permite hacer web scrapping en cualquier pagina sin muchos conocimientos (justo para mi).
Sabia y se que existe una forma de hacer scrap mediante JS, pero necesitaba la informacion y esta herramienta se presento.
El proceso de uso es muy sencillo y encima gratuito si el uso que se le va a dar es basico (como lo que necesitaba yo):

1. Registrarse en la web
2. Bajar software 
3. Desde el software se ingresa a la web deseada (funciona como cualquier explorador)
4. Se selecciona los datos a "recolectar"
5. Se descarga/obtiene los datos ya sea JSON, Excel o API.

Con la API se generaba un "Proyecto" que simula un ingreso a la web, recolecta la informacion y luego por otro metodo retorna la data obtenida.  
![Imgur](https://i.imgur.com/nwQ4kgr.png)  
Hoy en día, toda la información se obtiene de [ElCronista](https://www.cronista.com/) que actualiza con una frecuencia mayor y permite cumplir con el objetivo principal del Bot.


## Dónde esta alojado?

El segundo problema era donde iba a estar alojado el bot para su ejecución diaria.  
Bastó con una busqueda en google para encontrarme con [Glitch](https://glitch.com/).

![Imgur](https://i.imgur.com/bqsh92o.png)

**Qué es Glitch?**  
Es una plataforma que permite de manera gratuita hostear web-apps.
Además esta formada por una gran comunidad y puedo decir, con conocimiento de causa, que el soporte que tienen, es muy bueno.  
Asi lo define el CEO:
> - A community where you can find cool apps and websites you can’t find anywhere else. 
> - The most innovative, powerful collaborative platform for creating, remixing and hosting apps.
> - An effort to make the web into a creative medium where everybody expresses themselves and owns their work. 

Con esto definido, quedo averiguar como hacer un bot de twitter.  
Por fortuna, en la misma plataforma, existen una gran libreria de bots generados por la misma comunidad para usar de plantilla/base y poder iniciarse siguiendo un simple "paso a paso" que paso a detallar.


## Dandole vida

La creacion con todos los datos mencionados anteriormente es "practicamente" sencilla:  

1. Se [creo](https://developer.twitter.com/en/apps) una nueva **cuenta de Twitter** (la cuenta del bot) y una nueva **Twitter App**.
2. Se tomo los valores generados por Twitter obtenidos para dicha "app".
3. Se genero el proyecto en **Glitch**.
4. Se genero el código necesario para obtener la data y ser presentada de manera amigable en cada tweet (al final dejo el Código en Github)
5. Con todo el código generado y con el objetivo inicial que se muestren tweets durante el horario bancario, se definio que cada media hora el bot emita un tweet mostrando la info.

**Cómo manda un tweet cada media hora?**  
Yo use [cron-job](https://cron-job.org/en/), pero existen otras alternativas.
Una vez registrado, resto parametrizar en que momentos debia mandar un HTTP request al URL parametrizado, que utilizando glitch seria algo como:
https://YOUR_PROJECT_NAME.glitch.me/BOT_ENDPOINT 


Hecho todo esto, tenemos el Bot funcionando hoy en día con normalidad.

![Imgur](https://i.imgur.com/xAFxHGP.png)  
>Sinceramente nunca le di importancia a los números, pero es algo que me sorprende día a día, ya que esto se genero como "hobbie" y para "aprender".

## Código abierto
![Imgur](https://i.imgur.com/CRLjbwP.png)

Como dije desde el principio, tengo 0 conocimientos de JS y con la ayuda de un conocido (que si sabe), logramos armar el código.
Por esto, no veo lo malo en compartir y tener el código abierto en Github:

[Github](https://github.com/facutopa/ruculabot)

El mismo se va actualizando con los retoques o cambios que surjan y se implementen en Glitch. Afortunadamente la plataforma tiene una herramienta que hace más sencillo el export a Github.

## Updates del Bot
>(en desarrollo)  

Se ira detallando los cambios/mejoras que se hagan.

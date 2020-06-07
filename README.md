# Ruculabot

Otro bot de twitter que surgió como side-project y cumple con lo que promete.

## Contenido

1. [Cómo nacio?](#Cómo-nacio?)
2. [Dónde levanta la data?](#Donde-levanta-la-data?)
3. [Dónde esta alojado?](#Dónde-esta-alojado?)
4. [Updates del Bot](#Updates-del-Bot)


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
 
![Imgur](https://i.imgur.com/nwQ4kgr.png)  
Hoy en día, toda la información se obtiene de [ElCronista](https://www.cronista.com/) que actualiza con una frecuencia mayor y permite cumplir con el objetivo principal del Bot.


## Dónde esta alojado?

El segundo problema era donde iba a estar alojado el bot para su ejecución diaria.  
Bastó con una busqueda en google para encontrarme con [Glitch](https://glitch.com/).

![Imgur](https://i.imgur.com/bqsh92o.png)

**Cómo manda un tweet cada media hora?**  
Yo use [cron-job](https://cron-job.org/en/), pero existen otras alternativas.
Una vez registrado, resto parametrizar en que momentos debia mandar un HTTP request al URL parametrizado, que utilizando glitch seria algo como:
https://YOUR_PROJECT_NAME.glitch.me/BOT_ENDPOINT 

Hecho todo esto, tenemos el Bot funcionando hoy en día con normalidad.

![Imgur](https://i.imgur.com/xAFxHGP.png)  
>Sinceramente nunca le di importancia a los números, pero es algo que me sorprende día a día, ya que esto se genero como "hobbie" y para "aprender".

El mismo se va actualizando con los retoques o cambios que surjan y se implementen en Glitch. Afortunadamente la plataforma tiene una herramienta que hace más sencillo el export a Github.

## Updates del Bot
>(en desarrollo)  

Se ira detallando los cambios/mejoras que se hagan.

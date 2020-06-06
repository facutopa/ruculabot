
# Otro bot de Twitter - [@Ruculabot](https://twitter.com/ruculabot)

Otro bot de twitter que surgió como side-project y cumple con lo que promete.

## Contenido

1. [Cómo nacio?]
2. [Donde levanta la data?]
3. 

## Cómo nacio?

Surgió por la necesidad, como cualquier ciudadano Argentino, de =monitorear el dolar en todas sus variantes=.
Con 0 conocimientos en JS, bots y uso de APIs. Aprendiendo (si se lo puede llamar asi) a medida que iba avanzando, googleando y mirando otros proyectos similares para utilizar de guia.
La idea siempre fue, recibir el ==tipo de cambio diario durante el horario bancario en Twitter.==
Es decir, como bien dice la bio, de 10 a 15.30, tirando al día de hoy, cotización de:


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

**Que hace este harramienta?**
Basicamente es una herramienta que permite hacer web scrapping en cualquier pagina sin muchos conocimientos (justo para mi).
Sabia y se que existe una forma de hacer scrap mediante JS, pero necesitaba la informacion y esta herramienta se presento.
El proceso de uso es muy sencillo y encima gratuito si el uso que se le va a dar es basico (como lo que necesitaba yo):

1. Registrarse en la web
2. Bajar software 
3. Desde el software se ingresa a la web deseada (funciona como cualquier explorador)
4. Se selecciona los datos a "recolectar"
5. Se descarga/obtiene los datos ya sea JSON, Excel o API.

Con la API se generaba un "Proyecto" que simula un ingreso a la web, recolecta la informacion y luego por otro metodo retorna la data obtenida.

Hoy en día, toda la información se obtiene de [ElCronista](https://www.cronista.com/) que actualiza con una frecuencia mayor y permite cumplir con el objetivo principal del Bot.




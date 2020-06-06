process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

/* Setting things up. */
var path = require('path'),
    express = require('express'),
    app = express(),   
    Twit = require('twit'),
    request = require('request'),
    config = {
    /* Be sure to update the .env file with your API keys. See how to get them: https://botwiki.org/tutorials/how-to-create-a-twitter-app */      
      twitter: {
        consumer_key: process.env.CONSUMER_KEY,
        consumer_secret: process.env.CONSUMER_SECRET,
        access_token: process.env.ACCESS_TOKEN,
        access_token_secret: process.env.ACCESS_TOKEN_SECRET
      }
    },
    T = new Twit(config.twitter);

app.use(express.static('public'));

function getCCL(callback){
  request({url: "https://www.cronista.com/MercadosOnline/json/getValoresCalculadora.html",
          gzip:true}, function(err, response, body){
         if (err)
        {
          console.log("Error getting information from ElCronista CCL", err);
          return
        }
        console.log(`response ${response.statusCode}`);
        console.log(`body ${body.trim()}`);
        var cotizacionesCCL = JSON.parse(body);
        callback(cotizacionesCCL.filter(cotizacion => cotizacion.Id === 5)[0]);
//[{"Id":1,"Nombre":"DÓLAR B. NACIÓN","VariacionPorcentual":5.45454,"Compra":53,"Venta":58,"UltimaActualizacion":"2019-08-13T14:11:58.540Z","Orden":1}
//en test.js es lo que estaba probando para extraer la data del json    
        
  });
}

function getBlueCronista(callback){
  request({url: "https://www.cronista.com/MercadosOnline/json/getValoresCalculadora.html",
          gzip:true}, function(err, response, body){
         if (err)
        {
          console.log("Error getting information from ElCronista BLUE", err);
          return
        }
        console.log(`response ${response.statusCode}`);
        console.log(`body ${body.trim()}`);
        var cotizacionesBlueCron = JSON.parse(body);
        callback(cotizacionesBlueCron.filter(cotizacion => cotizacion.Id === 2)[0]);
//[{"Id":1,"Nombre":"DÓLAR B. NACIÓN","VariacionPorcentual":5.45454,"Compra":53,"Venta":58,"UltimaActualizacion":"2019-08-13T14:11:58.540Z","Orden":1}
//en test.js es lo que estaba probando para extraer la data del json    
        
  });
}

function getDolarBNA(callback){
  request({url: "https://www.cronista.com/MercadosOnline/json/getValoresCalculadora.html",
          gzip:true}, function(err, response, body){
         if (err)
        {
          console.log("Error getting information from ElCronista BNA", err);
          return
        }
        console.log(`response ${response.statusCode}`);
        console.log(`body ${body.trim()}`);
        var cotizacionesBlueCron = JSON.parse(body);
        callback(cotizacionesBlueCron.filter(cotizacion => cotizacion.Id === 1)[0]);
//[{"Id":1,"Nombre":"DÓLAR B. NACIÓN","VariacionPorcentual":5.45454,"Compra":53,"Venta":58,"UltimaActualizacion":"2019-08-13T14:11:58.540Z","Orden":1}
//en test.js es lo que estaba probando para extraer la data del json    
        
  });
}

function getDolarMEP(callback){
  request({url: "https://www.cronista.com/MercadosOnline/json/getDolarMep.html",
          gzip:true}, function(err, response, body){
         if (err)
        {
          console.log("Error getting information from ElCronista MEP", err);
          return
        }
        console.log(`response ${response.statusCode}`);
        console.log(`body ${body.trim()}`);
        var cotizacionesMEP = JSON.parse(body);
        callback(cotizacionesMEP.monedas);
//[{"Id":1,"Nombre":"DÓLAR B. NACIÓN","VariacionPorcentual":5.45454,"Compra":53,"Venta":58,"UltimaActualizacion":"2019-08-13T14:11:58.540Z","Orden":1}
//en test.js es lo que estaba probando para extraer la data del json    
        
  });
}

function getDate()
{
  var today = new Date();
  var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
  var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  var dateTime = date+' '+time;
  return dateTime;
}


/* You can use cron-job.org, uptimerobot.com, or a similar site to hit your /BOT_ENDPOINT to wake up your app and make your Twitter bot tweet. */

app.all(`/${process.env.INFORMADOLAR}`, function(req, res)
{
    var today = new Date();
    var date = (today.getUTCDate()<10?'0':'') + today.getUTCDate()+'/'+ (today.getUTCMonth()<10?'0':'') + (today.getUTCMonth()+1);
    var time = (today.getUTCHours()-3) + ":" + (today.getMinutes()<10?'0':'') + today.getMinutes();
    var dateTime = date+' '+time;
  getDolarBNA((dolarBNA) => getCCL((dolarccl) => getBlueCronista((blueCron) => getDolarMEP((mep) => 
  {
    
    var status = 
`📅`+dateTime +`

💸Solidario:
Venta: $ ${((dolarBNA.Venta) + ((dolarBNA.Venta) * 0.3)).toFixed(2)}

📈Contado c/Liq: 
Compra: $ ${dolarccl.Compra.toFixed(2)} | Venta: $ ${dolarccl.Venta.toFixed(2)}

💰MEP: 
Compra: $ ${mep.Compra.toFixed(2)} | Venta: $ ${mep.Venta.toFixed(2)}

🌳Blue
Compra: $ ${blueCron.Compra.toFixed(2)} | Venta: $ ${blueCron.Venta.toFixed(2)}
 
🏦BNA: 
Compra: $ ${dolarBNA.Compra.toFixed(2)} | Venta: $ ${dolarBNA.Venta.toFixed(2)}`;
    
    T.post('statuses/update', { status:  status }, 
           function(err, data, response) {
      if (err)
      {
        console.log('error pushing tweet', err);
        res.sendStatus(500);
      }
      else
      {
        res.sendStatus(200);
      }

    })
  }))))
});



function getEURO(callback){
  request({url: "https://www.cronista.com/MercadosOnline/json/getValoresCalculadora.html",
          gzip:true}, function(err, response, body){
         if (err)
        {
          console.log("Error getting information from ElCronista", err);
          return
        }
        console.log(`response ${response.statusCode}`);
        console.log(`body ${body.trim()}`);
        var cotizacionesEU = JSON.parse(body);
        callback(cotizacionesEU.filter(cotizacion => cotizacion.Id === 8)[0]);
//[{"Id":1,"Nombre":"DÓLAR B. NACIÓN","VariacionPorcentual":5.45454,"Compra":53,"Venta":58,"UltimaActualizacion":"2019-08-13T14:11:58.540Z","Orden":1}
//en test.js es lo que estaba probando para extraer la data del json    
        
  });
}

function getREAL(callback){
  request({url: "https://www.cronista.com/MercadosOnline/json/getValoresCalculadora.html",
          gzip:true}, function(err, response, body){
         if (err)
        {
          console.log("Error getting information from ElCronista", err);
          return
        }
        console.log(`response ${response.statusCode}`);
        console.log(`body ${body.trim()}`);
        var cotizacionesBRL = JSON.parse(body);
        callback(cotizacionesBRL.filter(cotizacion => cotizacion.Id === 165)[0]);
//[{"Id":1,"Nombre":"DÓLAR B. NACIÓN","VariacionPorcentual":5.45454,"Compra":53,"Venta":58,"UltimaActualizacion":"2019-08-13T14:11:58.540Z","Orden":1}
//en test.js es lo que estaba probando para extraer la data del json    
        
  });
}


function generarProyectoRP(callback)
{
  request({
    uri: 'https://www.parsehub.com/api/v2/projects/toNqTaeeeA1D/run',
    method: 'POST',
    form: {
      api_key: "tSe5qCkb__Kb",
      start_url: "https://www.rava.com/empresas/perfil.php?e=RIESGO%20PAIS",
      start_template: "main_template"
    }
  }, function(err, resp, body) {
    if(err)
      {
        console.log("Error generating the information from Dolarhoy", err);
        return
      }
      var generarRP;
      callback(generarRP);
  });
}

function getRP(callback)
{
  request({
    uri: 'https://www.parsehub.com/api/v2/projects/toNqTaeeeA1D/last_ready_run/data',
    method: 'GET',
    gzip: true,
    qs: {
      api_key: "tSe5qCkb__Kb",
      format: "json"
    }
  }, function(err, resp, body) {
    if(err)
      {
        console.log("Error generating the information from Dolarhoy", err);
        return
      }
      var mostrarRP = JSON.parse(body);;
      callback(mostrarRP);
  });
}


app.all(`/${process.env.ACTUALIZARRP}`, function(req, res){
  
  generarProyectoRP((generarRP) => {
      generarRP,
      res.sendStatus(200), 
      function(err, data, response) {
      if (err)
      {
        console.log('error pushing tweet', err);
        res.sendStatus(500);
      }
      else
      {
        res.sendStatus(200);
      }

    }
  })
});

//$${(parseFloat(drdolar.compraDrDolar) + (parseFloat(drdolar.compraDrDolar) * 0.3)).toFixed(2)}         
app.all(`/${process.env.MUESTRARIESGO}`, function(req, res){
  
  getRP((riesgoP) => getEURO((euro) => getREAL((real)  => {
    
    var status = `🗓️ ${riesgoP.fechaRP}
🇦🇷Valor Riesgo Pais: ${riesgoP.riesgoPais}
    
🇪🇺Euro: 
Compra: $${euro.Compra.toFixed(2)} | Venta: $${euro.Venta.toFixed(2)} | 
Venta✌️: $ ${(parseFloat(euro.Venta)+(parseFloat(euro.Venta) * 0.3)).toFixed(2)}

🇧🇷Real: 
Compra: $${real.Compra.toFixed(2)} | Venta: $${real.Venta.toFixed(2)} | 
Venta✌️: $ ${(parseFloat(real.Venta)+(parseFloat(real.Venta) * 0.3)).toFixed(2)}`;

    T.post('statuses/update', { status:  status }, 
           function(err, data, response) {
      if (err)
      {
        console.log('error pushing tweet', err);
        res.sendStatus(500);
      }
      else
      {
        res.sendStatus(200);
      }

    })
  })))
});

var listener = app.listen(process.env.PORT, function()
{
  console.log('Your bot is running on port ' + listener.address().port);
});
//Url cotizacion https://mercados.ambito.com/dolar/oficial/variacion
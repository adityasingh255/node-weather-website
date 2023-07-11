const request =require('request') 


const forecast = (latitude,longitude,callback)=>{
   const url ='http://api.weatherstack.com/current?access_key=56294c4f823d27e13320e521b62359d9&query=' +latitude +',' +longitude + '&units=f'  

   request({url,json:true},(error,{body}) => {
    if(error){
         callback('unable to connect with weather service', undefined)
    }else if(body.error){
        // console.log("-----",response.body)
         callback('unable to find location ', undefined)
    }
    else{
     console.log(body.current.weather_descriptions[0])
           callback(undefined,body.current.weather_descriptions[0] +".It is current " + body.current.temperature + ' degree out. It feels like ' + body.current.feelslike + ' degree out.')
    }

   })
}
module.exports=forecast
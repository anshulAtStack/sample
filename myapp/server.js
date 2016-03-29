// Program to filter csv data and create JSON files to be eaten by D3.js.

//required modules
var fs = require('fs');             // file stream for reading files.

var Converter = require("csvtojson").Converter;
var converter = new Converter({});
var converter1 = new Converter({});
var stateAndRegion ={};
var statesArray =[];


converter.fromFile("resources/Production.csv",function(err,result){

// We can write the result to a json file.
//  fs.writeFile('final1.json',JSON.stringify(result));
  var foodgrains = [],
      commercial = [],
      oilseeds = [],
      riceYield =[],
      oilseedsArray = [
        "Agricultural Production Oilseeds",
        "Agricultural Production Oilseeds Kharif",
        "Agricultural Production Oilseeds Rabi",
        "Agricultural Production Oilseeds Groundnut",
        "Agricultural Production Oilseeds Groundnut Kharif",
        "Agricultural Production Oilseeds Groundnut Rabi",
        "Agricultural Production Oilseeds Castorseed Kharif",
        "Agricultural Production Oilseeds Sesamun Kharif",
        "Agricultural Production Oilseeds Nigerseed Kharif",
        "Agricultural Production Oilseeds Rapeseed and Mustard Rabi",
        "Agricultural Production Oilseeds Linseed Rabi",
        "Agricultural Production Oilseeds Safflower Rabi",
        "Agricultural Production Oilseeds Sunflower",
        "Agricultural Production Oilseeds Sunflower Kharif",
        "Agricultural Production Oilseeds Sunflower Rabi",
        "Agricultural Production Oilseeds Soyabean Kharif",
      ],

      commercialArray =[
        "Agricultural Production Commercial Crops Cotton",
        "Agricultural Production Commercial Crops Jute",
        "Agricultural Production Commercial Crops Mesta",
        "Agricultural Production Commercial Crops Jute and Mesta",
        "Agricultural Production Commercial Crops Sugarcane"
      ],

      foodgrainsArray = [
        "Agricultural Production Foodgrains",
        "Agricultural Production Foodgrains Kharif",
        "Agricultural Production Foodgrains Rabi",
        "Agricultural Production Foodgrains Rice",
        "Agricultural Production Foodgrains Rice Kharif",
        "Agricultural Production Foodgrains Rice Rabi",
        "Agricultural Production Foodgrains Wheat Rabi",
        "Agricultural Production Foodgrains Jowar",
        "Agricultural Production Foodgrains Jowar Kharif",
        "Agricultural Production Foodgrains Jowar Rabi",
        "Agricultural Production Foodgrains Bajra Kharif",
        "Agricultural Production Foodgrains Maize",
        "Agricultural Production Foodgrains Maize Kharif",
        "Agricultural Production Foodgrains Maize Rabi",
        "Agricultural Production Foodgrains Ragi Kharif",
        "Agricultural Production Foodgrains Small Millets Kharif",
        "Agricultural Production Foodgrains Barley Rabi",
        "Agricultural Production Foodgrains Coarse Cereals",
        "Agricultural Production Foodgrains Coarse Cereals Kharif",
        "Agricultural Production Foodgrains Coarse Cereals Rabi",
        "Agricultural Production Foodgrains Cereals",
        "Agricultural Production Foodgrains Cereals Kharif",
        "Agricultural Production Foodgrains Cereals Rabi",
        "Agricultural Production Foodgrains Tur Kharif",
        "Agricultural Production Foodgrains Other Kharif Pulses Kharif",
        "Agricultural Production Foodgrains Gram Rabi",
        "Agricultural Production Foodgrains Other Kharif Pulses Rabi",
        "Agricultural Production Foodgrains Pulses",
        "Agricultural Production Foodgrains Pulses Kharif",
        "Agricultural Production Foodgrains Pulses Rabi"
      ],

      riceYieldArray = [
        "Agricultural Production Foodgrains Rice Yield Andhra Pradesh",
        "Agricultural Production Foodgrains Rice Yield Assam",
        "Agricultural Production Foodgrains Rice Yield Bihar",
        "Agricultural Production Foodgrains Rice Yield Chhattisgarh",
        "Agricultural Production Foodgrains Rice Yield Gujarat",
        "Agricultural Production Foodgrains Rice Yield Haryana",
        "Agricultural Production Foodgrains Rice Yield Jharkland",
        "Agricultural Production Foodgrains Rice Yield Karnataka",
        "Agricultural Production Foodgrains Rice Yield Kerala",
        "Agricultural Production Foodgrains Rice Yield Madhya Pradesh",
        "Agricultural Production Foodgrains Rice Yield Maharashtra",
        "Agricultural Production Foodgrains Rice Yield Orissa",
        "Agricultural Production Foodgrains Rice Yield Punjab",
        "Agricultural Production Foodgrains Rice Yield Tamil Nadu",
        "Agricultural Production Foodgrains Rice Yield Uttar Pradesh",
        "Agricultural Production Foodgrains Rice Yield West Bengal"
      ],


      holder;

  for(var j of result){
    holder = j.Particulars;
    if(foodgrainsArray.indexOf(holder)>-1)
      {
        foodgrains.push(j);
        continue;

      }
    if(oilseedsArray.indexOf(holder)>-1)
        {
          oilseeds.push(j);
          continue;
        }
    if(commercialArray.indexOf(holder)>-1)
    {
       commercial.push(j);

       continue;
    }
    if(riceYieldArray.indexOf(holder)>-1)
    {

       riceYield.push(j);
    }
  }

  fs.writeFile('resources/oilseeds.json',JSON.stringify(oilseeds));
  fs.writeFile('resources/foodgrains.json',JSON.stringify(foodgrains));
  fs.writeFile('resources/commercial.json',JSON.stringify(commercial));
  fs.writeFile('resources/riceYield.json',JSON.stringify(riceYield));
});

var sAndR = {"state":"", "region":""};
var statesArray = [];
converter1.fromFile("resources/states.csv",function(err,result1){
    if(err)
      console.error(err);
    else {
      result1.forEach(function(j){

          j.State = j.State.toUpperCase();

      })

      fs.writeFile("resources/states1.json",JSON.stringify(result1));
    }
  });

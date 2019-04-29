//jshint esversion:6

const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/fruitsDB",{ useNewUrlParser: true });

const fruitSchema = new mongoose.Schema({
  name: {
    type : String,
    required :  [true, "no name assign"]
  },
  // name: String,
  rating: {
    type: Number,
    min: 1,
    max: 10
  },
  review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const licchi = new Fruit({
  name: "licchi",
  rating: 9,
  review: "licchi is here!."
});

// licchi.save();

const personSchema = new mongoose.Schema({
  name : String,
  age : Number,
  favFruit : fruitSchema
});

const Person = mongoose.model("Person", personSchema);

const person = new Person({
  name : "Bihari",
  age: 14,
  favFruit : licchi
});

person.save();

const pineapple = new Fruit({
  name : "Pineapple",
  score : 9,
  review: "Great Fruit"
});

// pineapple.save();


// Fruit.updateOne({_id : "5cc6936c01d83220d0c4a119"}, {name : "Peech"}, function(err){
//   if (err){
//     console.log(err);
    
//   }else{
//     console.log("update success");
//   }
// });

// Fruit.deleteMany({name : "Pineapple" }, function(err){
//   if(err){
//     console.log(err);
//   }else{
//     console.log("deleted all apple fruits");
//   }
// });

// const kiwi = new Fruit({
//   name : "kiwi",
//   score: 10,
//   review: "i never try"
// });

// const orange = new Fruit({
//   name : "orange",
//   score: 5,
//   review: "i try"
// });
// const banana = new Fruit({
//   name : "banana",
//   score: 20,
//   review: "the best"
// });

// Fruit.insertMany([kiwi, orange, banana], function(err){
//   if (err){
//     console.log(err);
//   }else{
//     console.log("Successful");
//   }
// });

Fruit.find(function(err, fruits){
  if (err){
    console.log(err);
  }else{

    mongoose.connection.close();

    fruits.forEach(fruit => {
    console.log(fruit.name);
    });
  }
});
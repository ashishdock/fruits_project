const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/fruitsDB');

//const Cat = mongoose.model('Cat', { name: String });

const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    min: 1,
    max: 10
  },
  review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

// const fruit = new Fruit({
//   name: "Peach",
//   rating: 10,
//   review: "Peaches are yummy."
// });

const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favouriteFruit: fruitSchema
});

const Person = mongoose.model("Person", personSchema);

// const person = new Person({
//   name: "John",
//   age: 37
// });

// const pineapple = new Fruit({
//   name: "Pineapple",
//   rating: 9,
//   review: "Great fruit!"
// });
//
// const person = new Person({
//   name: "Amy",
//   age: 12,
//   favouriteFruit: pineapple
// });

// person.save().then(() => console.log("Poeple are added to people."));
// pineapple.save();

const melon = new Fruit({
  name: "Melon",
  rating: 7,
  review: "Not much sweet."
});



Person.updateOne({name: "John"}, {favouriteFruit: melon}, function(err){
  if(err){
    console.log(err);
  } else {
    console.log("Updated favourite fruit of John");
  }
});


// const kiwi = new Fruit ({
//   name: "Kiwi",
//   rating: 10,
//   review: "The best fruit!"
// });
//
// const banana = new Fruit({
//   name: "Banana",
//   rating: 3,
//   review: "Weird texture"
// });
//
// const orange = new Fruit({
//   name: "Orange",
//   rating: 4,
//   review: "Too sour for me"
// });
//
// Fruit.insertMany([kiwi, orange, banana], function(err){
//   if(err) {
//     console.log(err);
//   } else {
//     console.log("Successfully saved all the fruits to fruitsDB.");
//   }
// });

// Fruit.updateOne({id: "6279fa09d10dfbce36e6e2fe"}, {rating: 9}, function(err){
//   if(err){
//     console.log(err);
//   } else {
//     console.log("Successfully updated the document.")
//   }
// });

// Fruit.deleteOne({name: "Peaches"}, function(err){
//   if(err){
//     console.log(err);
//   } else {
//     console.log("Successfully deleted the document.")
//   }
// });

// Person.deleteMany({name: /John/}, function(err){
//   if(err){
//     console.log(err);
//   } else {
//     console.log("Successfully deleted the documents.")
//   }
// });



// fruit.save();
// console.log("Fruity...");
//const kitty = new Cat({ name: 'Zildjian' });
//kitty.save().then(() => console.log('meow'));


// ****************** READING FROM DATABASE
Fruit.find(function(err, fruits){
  if(err){
    console.log(err);
  } else {
    fruits.forEach(function(fruit){
    console.log(fruit.name, fruit.rating);
    // mongoose.connection.close();
    })

  }
});

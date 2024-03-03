
import { model, connect } from 'mongoose';

const mongoose = require('mongoose');
const { Schema } = mongoose;


// 1. Create an interface representing a document in MongoDB.
interface Cat {
  name: string;
  owner: string;
  age: number;
  breed: string;
  image?: string;
}

interface Owner {
  name: string;
  age: number;
  email: string;
  cats: string,
  image?: string;
}

// 2. Create a Schema corresponding to the document interface.
const catSchema = Schema({
  name: { type: String, required: true },
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "Owner" },
  age: { type: Number, required: true },
  breed: { type: String, required: true },
  image: String
});

const ownerSchema = Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  email: { type: String, required: true },
  image: String
});

// 3. Create a Model.
const Cat = mongoose.model('Cat', catSchema);
const Owner = mongoose.model('Owner', ownerSchema);

run().catch(err => console.log(err));

async function run() {
  // 4. Connect to MongoDB
  await connect('mongodb://127.0.0.1:27017/test');

  //------------------------------CREATE------------------------------
  const owner1 = new Owner({
    name: "Aran",
    age: 21,
    email: "aran.huarte@estudiantat.upc.edu",
  });
  await owner1.save();

  const cat1 = new Cat({
    name: "Mittens",
    owner: owner1._id,
    age: 4,
    breed: "Sphinx",
    image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Ffloppapedia-revamped.fandom.com%2Fwiki%2FBingus&psig=AOvVaw2TzNPM5s5pvEif4awnmoQa&ust=1709573071986000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCNDng4_O2IQDFQAAAAAdAAAAABAE"
  });
  await cat1.save();

  const owner2 = new Owner({
    name: "Pepe",
    age: 22,
    email: "pepe.ejemplo@estudiantat.upc.edu",
  });
  await owner2.save();
  
  const cat2 = new Cat({
    name: "Pants",
    owner: owner2._id,
    age: 6,
    breed: "Mountain lion",
    image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Ffloppapedia-revamped.fandom.com%2Fwiki%2FBingus&psig=AOvVaw2TzNPM5s5pvEif4awnmoQa&ust=1709573071986000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCNDng4_O2IQDFQAAAAAdAAAAABAE"
  });
  await cat2.save();

  const cat3 = new Cat({
    name: "Fern",
    owner: owner2._id,
    age: 2,
    breed: "Snow leopard",
    image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Ffloppapedia-revamped.fandom.com%2Fwiki%2FBingus&psig=AOvVaw2TzNPM5s5pvEif4awnmoQa&ust=1709573071986000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCNDng4_O2IQDFQAAAAAdAAAAABAE"
  });
  await cat3.save();

  //------------------------------FIND & POPULATE------------------------------
  const cats = await Cat.
    find().
    populate('owner').
    exec();
  cats.forEach(element => {
    console.log("%s's owner is: %s", element.name, element.owner.name)
  });

  //------------------------------DELETE------------------------------
  const deleteCat = await Cat.deleteOne({name: "Pants"});

  //------------------------------UPDATE------------------------------
  const updateCat = await Cat.findOneAndUpdate({name: "Fern"}, {
    owner: owner1._id,
  }, {new: true});
  const popCats = await Cat.
    find().
    populate('owner').
    exec();
  popCats.forEach(element => {
    console.log("%s's owner is: %s", element.name, element.owner.name)
  });

}
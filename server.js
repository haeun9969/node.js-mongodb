const express = require("express");

const app = express();

const port = 9000;

const bodyParser = require("body-parser");
const mongoose = require("mongoose");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const dbAddress = "mongodb+srv://my_atlas_user:capstone@cluster0.gmpwc.mongodb.net/capstone";

mongoose
  .connect(dbAddress, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

var Schema = mongoose.Schema;

var politicsSchema = new Schema(
    {
        _id: String,
        title: String,
        url: String, 
        reporter: String, 
        date: String, 
        img: String, 
        publisher: String, 
        contents: String,
    }
)

var datas = mongoose.model('politics', politicsSchema, '정치');
//https://eu-ne.tistory.com/entry/Mongodb-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0

datas.find(function(error, politics){
  if(error){
    console.log("error:"+error);
  } else{
    politics.forEach(function(capd){
      console.log("title:"+capd.title);
      console.log("url:"+capd.url);
      console.log("reporter:"+capd.reporter);
      console.log("date:"+capd.date);
      console.log("img:"+capd.img);
      console.log("publisher:"+capd.publisher);
      console.log("contents:"+capd.contents);
    });
  }
})

app.get("/", (req, res) => res.send("capstone2"));

app.listen(port, () => console.log(`listening on port ${port}`));
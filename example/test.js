var nodeID3 = require('../index.js');

//tags.image is the path to the image (only png/jpeg files allowed)
var tags = {
  title: "Soshite Bokura",
  artist: "Ray",
  album: "Nagi no Asukara",
  composer: "Nakazawa Tomoyuki"
  //image: "./example/image.jpeg"
}

nodeID3.write(tags, "./example/music.mp3", function (err){
  console.log("as")
  if(err) {
    console.log("Error " + err);
    return;
  }
  console.log("Read Done");

  //No image support atm
  var read = nodeID3.read("./example/music.mp3");
  console.log(read);
});	//Pass tags and filepath

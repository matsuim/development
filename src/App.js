import React, { Component } from 'react';
import './App.css';
import FilteredList from './FilteredList';
/*
This list of data is a list of javascript objects where {key: value}.
*/
const dogs = [
  {name: "Molly", type: "Portugese Water Dog", size: "Medium", age: 1, img: "https://i.pinimg.com/736x/ae/78/71/ae7871b677a386b40e69b7009b6254d3--portuguese-water-dog-jewels.jpg"},
  {name: "Lucky", type: "Bernese Mountain Dog", size: "Small", age: 1, img: "https://i.pinimg.com/originals/ee/42/18/ee4218962b5252eaf5ae2e6260063d47.jpg"},
  {name: "Kenzie", type: "Golden Doodle", size: "Medium", age: 1, img: "https://i.imgur.com/5JKOG0q.jpg?1"},
  {name: "Max", type: "Norfolk Terrier", size: "Small", age: 2, img: "http://kot-pes.com/wp-content/uploads/2015/07/Norfolk_terrier_14.jpg"},
  {name: "Winston", type: "Corgi", size: "Medium", age: 3, img: "https://yt3.ggpht.com/-S73Vbxcm0Uc/AAAAAAAAAAI/AAAAAAAAAAA/eehilo75Z5w/s900-c-k-no-mo-rj-c0xffffff/photo.jpg"},
  {name: "Benji", type: "Shiba Inu", size: "Medium", age: 4, img: "https://t1.ea.ltmcdn.com/en/images/1/6/9/img_how_to_stop_my_shiba_inu_from_biting_me_961_600.jpg"},
  {name: "Jake", type: "Golden Doodle", size: "Large", age: 5, img: "https://i.imgur.com/ZP9oZQT.jpg?1"},
  {name: "Yuki", type: "Golden Retriever", size: "Large", age: 5, img: "https://i.imgur.com/XebBSn3.jpg?1"},
  {name: "Baxter", type: "Corgi", size: "Medium", age: 6, img: "https://yt3.ggpht.com/-rqnKgPzC2HU/AAAAAAAAAAI/AAAAAAAAAAA/XatSadwdrVE/s900-c-k-no-mo-rj-c0xffffff/photo.jpg"},
  {name: "Stella", type: "Bernese Mountain Dog", size: "Large", age: 6, img: "https://pbs.twimg.com/media/DLu_ZBYXUAAyIeM.jpg"},
  {name: "Sadie", type: "Golden Doodle", size: "Large", age: 7, img: "https://i.imgur.com/2cgqXuK.jpg?1"},
  {name: "Haruki", type: "Shiba Inu", size: "Medium", age: 7, img: "https://i.imgur.com/kwbsZ31.jpg?1"},
  {name: "Cocoa", type: "Chesapeake Bay Retriever", size: "Large", age: 8, img: "https://i.barkpost.com/wp-content/uploads/2016/02/8-4.jpg?q=70&fit=crop&crop=entropy&w=808&h=808"},
  {name: "Sarah", type: "Golden Retriever", size: "Large", age: 8, img: "https://gbgrr.org/wp-content/uploads/Home-page-donate.jpg"},
  {name: "Lance", type: "Bernese Mountain Dog", size: "Large", age: 9, img: "https://i.imgur.com/ZUm0CsO.jpg?1"},
  {name: "Ollie", type: "Chinook", size: "Medium", age: 10, img: "http://www.petpaw.com.au/wp-content/uploads/2014/10/Chinook-Posing-at-the-Beach.jpg"},
  {name: "Penelope", type: "German Shepherd", size: "Large", age: 10, img: "http://moderndogmagazine.com/sites/default/files/images/articles/top_images/Untitled%20design%20%2840%29.jpg"},
  {name: "Chester", type: "German Shepherd", size: "Large", age: 11, img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Female_German_Shepherd.jpg/330px-Female_German_Shepherd.jpg"}
];


class App extends Component {
  render() {
    return (
      <div className="App">
        {/*
          The list of dogs will be passed into the FilteredList
          component the items property.
        */}
        <FilteredList items={dogs} />
      </div>
    );
  }
}

export default App;

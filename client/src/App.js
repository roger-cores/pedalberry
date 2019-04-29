
// /client/App.js
import React, { Component } from "react";
import axios from "axios";
import Raphael from "raphael";
import Flexboxgrid from "flexboxgrid";

class App extends Component {
  // initialize our state
  state = {
    data: [],
    id: 0,
    message: null,
    intervalIsSet: false,
    idToDelete: null,
    idToUpdate: null,
    objectToUpdate: null,
    result: '***'
  };

  // when component mounts, first thing it does is fetch all existing data in our db
  // then we incorporate a polling logic so that we can easily see if our db has
  // changed and implement those changes into our UI
  componentDidMount() {
    this.sampleLoad();
    // Creates canvas 320 × 200 at 10, 50
    var paper = Raphael("canvas", 320, 200);
    paper.circle(320, 240, 60).animate({fill: "#223fa3", stroke: "#000", "stroke-width": 80, "stroke-opacity": 0.5}, 2000);

    // Creates circle at x = 50, y = 40, with radius 10
    var circle = paper.circle(50, 40, 10);
    // Sets the fill attribute of the circle to red (#f00)
    circle.attr("fill", "#f00");

    // Sets the stroke attribute of the circle to white
    circle.attr("stroke", "#fff");
    // if (!this.state.intervalIsSet) {
    //   let interval = setInterval(this.sampleLoad, 1000);
    //   this.setState({ intervalIsSet: interval });
    // }
  }

  // never let a process live forever
  // always kill a process everytime we are done using it
  componentWillUnmount() {
    // if (this.state.intervalIsSet) {
    //   clearInterval(this.state.intervalIsSet);
    //   this.setState({ intervalIsSet: null });
    // }
  }

  // just a note, here, in the front end, we use the id key of our data object
  // in order to identify which we want to Update or delete.
  // for our back end, we use the object id assigned by MongoDB to modify
  // data base entries

  // our first get method that uses our backend api to
  // fetch data from our data base
  sampleLoad = () => {
    fetch("http://localhost:3001/route/sample")
      .then(data => data.json())
      .then(res => {
        this.setState({ data: res.data })
        this.getUpdatedResult(res.data)
      });
  };

  getUpdatedResult = (input) => {
    let ref = this
    axios.post("http://localhost:3001/route/", {
      input: input
    }).then(function(response){
      ref.setState({result: response.data.data})
    })
    .catch(function(err){
      console.log(err)
    })
  }

  updateInput = (input) => {
    this.setState({data: input})
    this.getUpdatedResult(input)
  }


  // here is our UI
  // it is easy to understand their functions when you
  // see them render into our screen
  render() {
    const { data } = this.state;
    return (
      <div>
        <div class="row">
          <div class="col-sm-3 col-xs-12 col-lg-3 col-md-3">
            <textarea
              rows="30"
              cols="30"
              defaultValue={data}
              onChange={e => this.updateInput(e.target.value)}>
            </textarea>
          </div>
          <div class="col-sm-9 col-xs-12 col-lg-9 col-md-9" id="canvas" style={{background:"black"}}></div>
        </div>
        <br></br>
        <br></br>
        <p>{this.state.result}</p>
      </div>
    );
  }
}

export default App;

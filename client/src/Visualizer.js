import React, { Component } from "react";

// View Components
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Chip from '@material-ui/core/Chip';
import Typography from '@material-ui/core/Typography';

//Shapes
import Rect from './shapes/Rect';


//APIs
import axios from "axios";
// import {Path, Rectangle, Point} from "paper";
import PaperJS from "paper";

class Visualizer extends Component {

  gridTileStyle= {
      position: 'relative',
      float: 'left',
      width: '100%',
      minHeight: '400px',
      minWidth: '664px',
      overflow: 'hidden',
      height: '100% !important'
  }

  styles = {
    paper: {
      padding: 15
    },
    chip: {
      margin: 5,
      fontWeight: "bold",
      fontSize: 18
    }
  }

  state = {
    data: '',
    message: null,
    grounded: '',
    helperText: '',
    atoms: {},
    rects: [],
  };

  draw() {

    // var rectangle = new Rectangle(new Point(50, 50), new Point(150, 100));
    // var path = new Path.Rectangle(rectangle);
    // path.fillColor = '#e9e9ff';
    // path.selected = true;
  }

  handleLoad() {
    PaperJS.setup('canvas');

  }

  componentDidMount() {
    this.sampleLoad();
    window.addEventListener('load', this.handleLoad);
  }

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
      if(response.data.data === '') {
        ref.setState({helperText: 'Invalid ASP'})
      } else {
        ref.setState({grounded: response.data.data, helperText: '', atoms: response.data.atoms})
        console.log(ref.state.atoms)

        if(ref.state.atoms['intersection']) {
          let rects = [];
          let initial = {
            x: 10,
            y: 10,
            width: 100,
            height: 100,
            spacing: 10,
            nperrow: 5
          }
          let i=0
          let j=0
          PaperJS.setup('canvas')
          for(let k in ref.state.atoms['intersection']) {
            rects.push(<Rect
              key = {ref.state.atoms['intersection'][k]['args'][0]}
              label = {ref.state.atoms['intersection'][k]['args'][0]}
              x = {initial.x + (initial.width + initial.spacing) * i}
              y = {initial.y + (initial.height + initial.spacing) * j}
              width = {initial.width}
              height = {initial.height} />
            )
            i+=1
            if(i%5 == 0) {
              j+=1
              i=0
            }
          }
          ref.setState({rects: []})
          ref.setState({rects})
        }
      }
    })
    .catch(function(err){
      console.log(err)
    })
  }

  updateInput = (input) => {
    this.setState({data: input})
    this.getUpdatedResult(input)
  }

  render() {
    return (
      <div className="root">
        <Grid container spacing={24}>
          <Grid item xs={12} sm={4} md={4}>
            <Paper className="paper"  style={this.styles.paper}>
              <TextField
                id="standard-full-width"
                label="Write ASP here:"
                multiline
                rowsMax="15"
                rows="10"
                style={{ margin: 8 }}
                fullWidth
                margin="normal"
                helperText={this.state.helperText}
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={e => this.updateInput(e.target.value)}
                value={this.state.data}
              />
            </Paper>
          </Grid>
          <Grid item xs={12} sm={8} md={8}>
            <Paper className="paper" style={this.gridTileStyle}>
              <canvas id="canvas" style={this.gridTileStyle}>
                {this.state.rects}
              </canvas>
            </Paper>
          </Grid>

          {Object.keys(this.state.atoms).map(key =>
            <Grid item key={key}>
              <Paper className="paper" style={this.styles.paper}>
                <Typography color="textPrimary">
                  {key.toUpperCase()}:
                </Typography>
                {Object.keys(this.state.atoms[key]).map(childKey =>
                  <Chip key={childKey} label={this.state.atoms[key][childKey].args.join(' ').trim().replace(' ', ', ').toUpperCase()} style={this.styles.chip} />
                )}
              </Paper>
            </Grid>
          )}
        </Grid>
      </div>
    );
  }
}

export default Visualizer;

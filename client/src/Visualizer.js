import React, { Component } from "react";

// View Components
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Chip from '@material-ui/core/Chip';
import Typography from '@material-ui/core/Typography';


//APIs
import axios from "axios";

class Visualizer extends Component {

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
    atoms: {}
  };

  componentDidMount() {
    this.sampleLoad();
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
            <Paper className="paper" style={this.styles.paper}>visualizer</Paper>
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

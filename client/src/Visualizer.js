import React, { Component } from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import axios from "axios";



class Visualizer extends Component {

  styles = {
    paper: {
      padding: 15
    }
  }

  state = {
    data: '',
    message: null,
    grounded: '***'
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
      ref.setState({grounded: response.data.data})
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
          <Grid item xs={12} sm={12} md={4}>
            <Paper className="paper"  style={this.styles.paper}>
              <TextField
                id="standard-full-width"
                label="Write ASP here:"
                multiline
                rowsMax="15"
                rows="10"
                style={{ margin: 8 }}
                helperText={this.state.grounded}
                fullWidth
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={e => this.updateInput(e.target.value)}
                value={this.state.data}
              />
            </Paper>
          </Grid>
          <Grid item xs={12} sm={12} md={8}>
            <Paper className="paper" style={this.styles.paper}>visualizer</Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className="paper" style={this.styles.paper}>logs</Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Visualizer;
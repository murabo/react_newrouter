import React, { Component } from 'react'
import logo from '../logo.svg'
import '../App.css'
import {Dialog, FlatButton, MenuItem, SelectField, TextField} from 'material-ui'
import * as inputActions from '../actions/input'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(inputActions, dispatch)
  }
};

class App extends Component {
  render() {
    const {category, count, text, is_saved} = this.props.input
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div style={{textAlign:"center"}}>
          <SelectField
            style={{float: 'rigth'}}
            // id="contents_scale_level"
            floatingLabelText="カテゴリー"
            value={category}
            onChange={this.props.actions.setCategory}
            // errorText={scale_level_error}
          >
            <MenuItem value={1} primaryText="カテゴリA"/>
            <MenuItem value={2} primaryText="カテゴリB"/>
            <MenuItem value={3} primaryText="カテゴリC"/>
          </SelectField>
        <p className="input_area">
          <TextField
            style={
              {
                border: "1px solid #ccc",
                borderRadius: "20px",
                backgroundColor: "#fff",
                fontFamily: "Arial",
                color: "#999",
                width: "100%",
                height: "100px",
                fontSize: "24px",
                padding: "10px",
                resize: "none",
                overflow: "auto",

              }
            }
            id="text"
            fullWidth={true}
            hintText="140文字以内で入力してください。"
            multiLine={true}
            // errorText={risk_contents_error}
            onChange={this.props.actions.setText}
            value={text}
          />
        </p>
        </div>
        <div style={{
          textAlign: "right",
          width: "800px",
          margin: "auto"
        }}>
          {count>0?count:<div style={{color:"red"}}>{count}</div>}
        <FlatButton
          label="save"
          primary={true}
          style={{
            color: 'rgb(255,255,255)',
            backgroundColor: 'rgb(255,64,129)'
          }}
          onClick={() => this.props.actions.saveText(text, category)}
        />
          <Dialog
            title="保存しました。"
            modal={false}
            open={is_saved}
            onRequestClose={this.props.actions.dialogClose}
          >
          </Dialog>
        </div>
        <Link to={'/list'}>登録一覧</Link>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
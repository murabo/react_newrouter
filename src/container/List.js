import React, { Component } from 'react'
import logo from '../logo.svg'
import '../App.css'
import * as listActions from '../actions/list'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(listActions, dispatch)
  }
};

class List extends Component {
  render() {
    const {list} = this.props
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        {/*<SelectField*/}
          {/*style={{float: 'rigth'}}*/}
          {/*// id="contents_scale_level"*/}
          {/*// floatingLabelText="規模の影響度"*/}
          {/*value={category}*/}
          {/*onChange={this.props.actions.setListCategory}*/}
          {/*// errorText={scale_level_error}*/}
        {/*>*/}
          {/*<MenuItem value={1} primaryText="カテゴリA"/>*/}
          {/*<MenuItem value={2} primaryText="カテゴリB"/>*/}
          {/*<MenuItem value={3} primaryText="カテゴリC"/>*/}
        {/*</SelectField>*/}
        <div style={{textAlign:"center"}}>
          {Object.keys(list).map(key => (<div>{key}:{list[key]}</div>))}
        </div>
        <Link to={'/'}> > 登録画面</Link>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(List);
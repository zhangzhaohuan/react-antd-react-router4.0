/**
 * Created by 叶子 on 2017/7/31.
 */
import React, { Component } from 'react';

class AsyncComponent extends React.Component {
  state = {
    _: null
  }
  async componentDidMount() {
    const { default: _ } = await this.props.loader;
    this.setState({
      _: <_ {...this.props} />
    });
  }
  render() {
    return this.state._;
  }
}
export default AsyncComponent;
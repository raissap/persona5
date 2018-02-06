import React, { Component } from 'react';

export class Row extends Component {
  createCells() {
    return this.props.values.map((value, index) => (
      React.createElement(
        this.props.isHeader ? 'th' : 'td',
        { key: index, className: value.className },
        value.text
      )
    ))

  }

  render() {
    return (
      <tr className={this.props.className}>
        {this.createCells()}
      </tr>
    );
  }
}

export class Table extends Component {
  getBody() {
    return this.props.src.body && this.props.src.body.map((values, index) => (
      <Row key={index} values={values} />
    ));
  }

  render() {
    var header = this.props.src.header &&
      <Row isHeader={true} values={this.props.src.header} />;
    var body = this.getBody();

    return (
      <table className={this.props.className}>
        <thead>
          {header}
        </thead>
        <tbody>
          {body}
        </tbody>
      </table>
    );
  }
}

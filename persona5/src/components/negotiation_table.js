import React, { Component } from 'react';
import { Badge, OverlayTrigger, ToggleButton, ToggleButtonGroup, Tooltip } from 'react-bootstrap';

import { PERSONALITIES, responseGuide } from '../data/negotiation_guide';
import { Row, Table } from './table';

class PersonalityToggle extends Component {
  render() {
    const buttons = Object.keys(PERSONALITIES).map(key => (
      <ToggleButton key={key} value={key}>{PERSONALITIES[key].name}</ToggleButton>
    ))

    return (
      <ToggleButtonGroup type="radio" name="personality" onChange={this.props.onChange}>
        {buttons}
      </ToggleButtonGroup>
    );
  }
}

class NegotiationRow extends Row {
  createCells() {
    return this.props.values.map(function(value, index) {
      var personality = PERSONALITIES[this.props.personality];
      var className = '';
      var notesBadge = value.notes && (
        <OverlayTrigger placement="top" overlay={<Tooltip id={index}>{value.notes}</Tooltip>}>
          <Badge>...</Badge>
        </OverlayTrigger>
      );

      if (personality && value.response) {
        if (personality.likes.indexOf(value.response) >= 0) {
          className = 'likes';
        } else if (personality.dislikes.indexOf(value.response) >= 0) {
          className = 'dislikes';
        } else if (personality.neutral.indexOf(value.response) >= 0) {
          className = 'neutral';
        }
      }

      return (
        <td key={index} className={className}>
          {value.text}
          {notesBadge}
        </td>
      );
    }.bind(this));
  }
}

class NegotiationTable extends Table {
  getBody() {
    return this.props.src.body && this.props.src.body.map((values, index) => (
      <NegotiationRow key={index} values={values} personality={this.props.personality} />
    ));
  }
}

export class NegotiationTableWrapper extends Component {
  constructor(props) {
    super(props);

    this.state = {
      personality: null
    };

    this.changePersonality = this.changePersonality.bind(this);
  }

  changePersonality(personality) {
    this.setState({
      personality: personality
    });
  }

  render() {
    return (
      <div>
        <PersonalityToggle onChange={this.changePersonality} />
        <NegotiationTable src={responseGuide} personality={this.state.personality} />
      </div>
    )
  }
}

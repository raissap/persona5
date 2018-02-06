import React, { Component } from 'react';
import { Badge, OverlayTrigger, ToggleButton, ToggleButtonGroup, Tooltip } from 'react-bootstrap';

import { PERSONALITIES, negotiationGuide, responseGuide } from '../data/negotiation_guide';
import { Row, Table } from './table';

class NegotiationGuideTable extends Table {
  getBody() {
    return Object.keys(PERSONALITIES).map((key, index) => {
      var values = [
        { text: PERSONALITIES[key].name },
        { text: PERSONALITIES[key].likes.join(', '), className: 'likes' },
        { text: PERSONALITIES[key].dislikes.join(', '), className: 'dislikes' },
        { text: PERSONALITIES[key].neutral.join(', '), className: 'neutral' }
      ];

      return (
        <Row
          key={index}
          values={values}
          className={this.props.personality === key ? 'active' : ''}
        />
      );
    });
  }
}

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
        <NegotiationGuideTable src={negotiationGuide} personality={this.state.personality} />
        <PersonalityToggle onChange={this.changePersonality} />
        <NegotiationTable
          src={responseGuide}
          className={this.state.personality ? 'active' : ''}
          personality={this.state.personality}
        />
      </div>
    )
  }
}

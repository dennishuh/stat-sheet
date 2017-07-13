import React from 'react';
import Team from './Team';
import PropTypes from 'prop-types';

export default class TeamList extends React.Component {


  render() {
    return (
      <div>
        <Team team={this.props.team} />
      </div>
    )
  }
}

TeamList.propTypes = {
  team: PropTypes.object.isRequired
}
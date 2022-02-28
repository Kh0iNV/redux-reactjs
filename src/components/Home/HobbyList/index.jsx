import React from "react";
import PropTypes from "prop-types";
import './style.scss';

HobbyList.propTypes = {
  hobbyList: PropTypes.array,
  activeId: PropTypes.string,
  onHobbyClick: PropTypes.func,
}

HobbyList.defaultProps = {
  hobbyList: [],
  activeId: null,
  onHobbyClick: null,
}

function HobbyList(props) {
  const { hobbyList, activeId, onHobbyClick } = props;

  return (
    <ul className="hobby-list">
      {hobbyList.map(hobby => (
        <li
          key={hobby.id}
          className={hobby.id === activeId ? 'active' : ''}
          onClick={() => onHobbyClick && onHobbyClick(hobby)}
        >
          {hobby.title}
        </li>
      ))}
    </ul>
  )
}

export default HobbyList;

import React from "react";
import PropTypes from "prop-types";
import s from "./Filter.module.css";

const Filter = ({value, onChange}) => (

  <label className={s.label_filter}>
          Find contacts by name<input type="text" value={value} onChange={e=>onChange(e.target.value)}></input>
        </label>
 
);


Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;

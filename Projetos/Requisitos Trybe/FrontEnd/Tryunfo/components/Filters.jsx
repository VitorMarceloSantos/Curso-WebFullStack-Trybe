import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Filters extends Component {
  render() {
    const {
      filterValue,
      handleChangeFilter,
      rareValue,
      trunfoValue,
      trunfoisDisable } = this.props;
    return (
      <section className="filtros">
        <div>
          <label htmlFor="name-filter">
            Filtro Nome:
            <input
              disabled={ trunfoisDisable }
              type="text"
              data-testid="name-filter"
              name="filterValue"
              id="name-filter"
              value={ filterValue }
              onChange={ handleChangeFilter }
            />
          </label>
        </div>
        <div>
          <label htmlFor="rare-filter">
            <select
              disabled={ trunfoisDisable }
              name="rareValue"
              data-testid="rare-filter"
              type="select"
              placeholder="Placeholder"
              value={ rareValue }
              onChange={ handleChangeFilter }
            >
              <option value="todas" selected>Todas</option>
              <option value="normal">Normal</option>
              <option value="raro">Raro</option>
              <option value="muito raro">Muito Raro</option>
            </select>
          </label>
        </div>
        <div>
          <label htmlFor="trunfoValue">
            <input
              type="checkbox"
              data-testid="trunfo-filter"
              name="trunfoValue"
              id="trunfoValue"
              checked={ trunfoValue }
              onChange={ handleChangeFilter }
            />
            Super Trybe Trunfo
          </label>
        </div>
      </section>
    );
  }
}

Filters.propTypes = {
  handleChangeFilter: PropTypes.func.isRequired,
  filterValue: PropTypes.string.isRequired,
  rareValue: PropTypes.string.isRequired,
  trunfoValue: PropTypes.bool.isRequired,
  trunfoisDisable: PropTypes.bool.isRequired,
};

export default Filters;

import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

class Aim extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {amount, description} = this.props;
    return (<div className="card aim-container" data-state="not empty" id="aim">
      <div>
        <div className="aim-container__curr-cont">
          <h2>{Number(amount).toFixed(2)}</h2>
          <div className="aim-container__cur-controls">
            <div className="aim-container__controls_cur">BYN</div>
          </div>
        </div>
        <div className="aim-container__aim-descr">{description}</div>
      </div>
    </div>);
  }
}

Aim.propTypes = {
  amount: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
};

export default Aim;

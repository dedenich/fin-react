import React, {PureComponent} from "react";
import PropTypes from 'prop-types';

const withDependentContent = (Component) => {
  class WithDependentContent extends PureComponent {

    constructor(props) {
      super(props);
      this.state = {
        isContentShown: true,
      };
      this.handleVisibilityChange = this.handleVisibilityChange.bind(this);
    }

    handleVisibilityChange() {
      this.setState((prevState) => ({isContentShown: !prevState.isContentShown}));
    }

    render() {
      const {isContentShown} = this.state;
      const {isAdmissionsCard} = this.props;
      return (
        <Component
          {...this.props}
          isContentShown={isContentShown}
          isAdmissionsCard={isAdmissionsCard}
          onContentShow={this.handleVisibilityChange}
        />
      );
    }
  }

  WithDependentContent.propTypes = {
    isAdmissionsCard: PropTypes.bool,
  };

  return WithDependentContent;
};

export default withDependentContent;

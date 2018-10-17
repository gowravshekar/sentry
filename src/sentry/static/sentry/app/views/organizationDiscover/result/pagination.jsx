import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import {Flex} from 'grid-emotion';

import Button from 'app/components/button';

export default class Result extends React.Component {
  static propTypes = {
    onFetchPage: PropTypes.func.isRequired,
    previous: PropTypes.object,
    next: PropTypes.object,
  };

  getNextPage() {
    this.props.onFetchPage('next');
  }

  getPreviousPage() {
    this.props.onFetchPage('previous');
  }

  render() {
    const {previous, next} = this.props;

    return (
      <PaginationButtons className="btn-group">
        <Button
          className="btn"
          disabled={previous && !previous.results}
          size="xsmall"
          icon="icon-chevron-left"
          onClick={() => this.getPreviousPage()}
        />
        <Button
          className="btn"
          disabled={next && !next.results}
          size="xsmall"
          icon="icon-chevron-right"
          onClick={() => this.getNextPage()}
        />
      </PaginationButtons>
    );
  }
}

const PaginationButtons = styled(Flex)`
  justify-content: flex-end;
`;

// Copyright (c) Microsoft. All rights reserved.

import React, { Component } from 'react';

import { Btn, ComponentArray, ContextMenu, PageContent } from 'components/shared';
import { svgs } from 'utilities';
import { ExampleFlyoutContainer } from './flyouts/exampleFlyout';

import './pageWithFlyout.scss';

const closedFlyoutState = { openFlyoutName: undefined };

export class PageWithFlyout extends Component {
  constructor(props) {
    super(props);
    this.state = closedFlyoutState;
  }

  closeFlyout = () => this.setState(closedFlyoutState);

  openFlyout = (name, data) => () => this.setState({ openFlyoutName: name, flyoutData: data });

  render() {
    const { t } = this.props;
    const { openFlyoutName, flyoutData } = this.state;

    const isExampleFlyoutOpen = openFlyoutName === 'example';

    return (
      <ComponentArray>
        <ContextMenu>
          <Btn svg={svgs.reconfigure} onClick={this.openFlyout('example')}>{t('walkthrough.pageWithFlyout.open')}</Btn>
        </ContextMenu>
        <PageContent className="page-with-flyout-container">
          {t('walkthrough.pageWithFlyout.pageBody')}

          <div>
            <Btn svg={svgs.reconfigure} onClick={this.openFlyout('example', { name: 'Bob', age: '41' })}>Open Bob</Btn>
            <Btn svg={svgs.copy} onClick={this.openFlyout('example', { name: 'John', age: '42' })}>Open John</Btn>
          </div>

          {isExampleFlyoutOpen && <ExampleFlyoutContainer data={flyoutData} onClose={this.closeFlyout} />}
        </PageContent>
      </ComponentArray>
    );
  }
}

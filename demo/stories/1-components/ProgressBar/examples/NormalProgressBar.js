// @flow

import React, { Component } from 'react'
import { View } from 'react-native'
import { action } from '@storybook/addon-actions'
import { ProgressBar } from '@morpheus-ui/core'

export default class NormalProgressBarExample extends Component<{}> {
  render() {
    return (
      <View>
        <ProgressBar length={2} />
      </View>
    )
  }
}

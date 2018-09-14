/**
 * @flow
 */
import React from 'react'
import { View } from 'react-native-web'
import { action } from '@storybook/addon-actions'
import { Button } from '@morpheus-ui/core'

class OutlinedButtonExample extends React.Component {
  render() {
    return (
      <View>
        <Button
          onPress={action('clicked')}
          title="outlined button"
          outlineStyle={true}
        />
      </View>
    )
  }
}

export default OutlinedButtonExample

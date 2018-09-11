import React, { PureComponent } from 'react'
import { View } from 'react-native'

import { FCCarDetailContainer } from 'App/containers'

import { AppStyles } from 'App/theme'

export class DetailView extends PureComponent {
  render() {
    return (
      <View style={AppStyles.mainContainer}>
        <FCCarDetailContainer />
      </View>
    )
  }
}

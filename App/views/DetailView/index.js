import React, { PureComponent } from 'react'
import { SafeAreaView } from 'react-native'

import { FCCarDetailContainer } from 'App/containers'

import { AppStyles } from 'App/theme'

export class DetailView extends PureComponent {
  render() {
    return (
      <SafeAreaView style={AppStyles.mainContainer}>
        <FCCarDetailContainer />
      </SafeAreaView>
    )
  }
}

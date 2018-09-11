import React, { PureComponent } from 'react'
import { View } from 'react-native'

import { FCCarListContainer } from 'App/containers'
import { DetailView } from 'App/views/DetailView'

import { AppStyles } from 'App/theme'

export class ListView extends PureComponent {
  _viewDetails = () => {
    const nextRoute = {
      component: DetailView,
      title: 'Details',
    }
    this.props.navigator.push(nextRoute)
  }

  render() {
    return (
      <View style={AppStyles.mainContainer}>
        <FCCarListContainer navigator={this._viewDetails} />
      </View>
    )
  }
}

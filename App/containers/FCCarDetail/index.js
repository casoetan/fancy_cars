import React, { PureComponent } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux'

import { FCDetail } from 'App/components'

import { AppStyles } from 'App/theme'

class FCCarDetail extends PureComponent {
  render() {
    return (
      <View style={AppStyles.container}>
        <FCDetail car={this.props.car} />
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  car: state.selectedCar
})

export const FCCarDetailContainer = connect(mapStateToProps)(FCCarDetail)

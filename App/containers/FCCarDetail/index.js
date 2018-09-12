import React, { PureComponent } from 'react'
import { Alert, View } from 'react-native'
import { connect } from 'react-redux'

import { FCDetail } from 'App/components'
import { AppStyles } from 'App/theme'

class FCCarDetail extends PureComponent {
  _buyCar = () => {
    const { online, selectedCar } = this.props.state
    if (online) {
      Alert.alert(
        selectedCar.name,
        `Ready to Buy ${selectedCar.name}?`,
        [
          {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
          {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ],
        { cancelable: false }
      )
    }
  }

  render() {
    return (
      <View style={AppStyles.container}>
        <FCDetail car={this.props.state.selectedCar} onBuyCar={this._buyCar} />
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  state,
})

export const FCCarDetailContainer = connect(mapStateToProps)(FCCarDetail)

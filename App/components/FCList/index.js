import React, { PureComponent } from 'react'
import { FlatList, View, Text } from 'react-native'

import { FCListItem } from 'App/components/FCListItem'

import { AppStyles } from 'App/theme'

export class FCList extends PureComponent {
  _keyExtractor = car => `car-${car.id}`

  _onEndReached = () => {
    if (!this.canAction) return;
    this.props.getMoreCars()
  };

  _renderCar = car => (
    <FCListItem
      id={car.id}
      onCarSelect={this.props.onCarSelect}
      car={car} />
  )

  render() {
    const { cars } = this.props
    return (
      <View style={AppStyles.container}>
      {
        cars.length > 0 ? (
          <FlatList
            data={cars}
            keyExtractor={this._keyExtractor}
            onEndReachedThreshold={0.2}
            renderItem={this._renderCar}
            onEndReached={this._onEndReached}
            onScrollBeginDrag={() => this.canAction = true}
            onScrollEndDrag={() => this.canAction = false}
            onMomentumScrollBegin={() => this.canAction = true}
            onMomentumScrollEnd={() => this.canAction = false}
          />
        )
        : (
          <View style={AppStyles.loadingContainer}>
            <Text>No Cars Available</Text>
          </View>
        )
      }
      </View>
    )
  }
}

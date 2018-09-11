import React, { PureComponent } from 'react'
import {
  Image,
  Text,
  TouchableOpacity,
  View
} from 'react-native'

import { AppColors, AppStyles } from 'App/theme'

export class FCListItem extends PureComponent {
  _onPress = () => {
    const { car: { item }, onCarSelect } = this.props
    onCarSelect(item.id)
  }

  render() {
    const { car: { item } } = this.props
    return (
      <TouchableOpacity onPress={this._onPress}>
        <View style={[
          AppStyles.list.item,
          { backgroundColor: item.availability ? AppColors.snow : AppColors.frost }
        ]}>
          <Image style={AppStyles.list.itemImage} source={{ uri: item.img }}  />
          <View style={AppStyles.list.itemContent}>
            <Text style={AppStyles.list.title}>
              {item.name} ({item.year})
            </Text>
            <Text style={AppStyles.list.meta}>
              {item.make} {item.model} | {item.available}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  }
}

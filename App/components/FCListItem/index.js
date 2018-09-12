import React, { PureComponent } from 'react'
import {
  Image,
  Text,
  TouchableOpacity,
  View
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

import { AppColors, AppStyles } from 'App/theme'
import { AppFontSize } from 'App/theme/fonts'

export class FCListItem extends PureComponent {
  _onPress = () => {
    const { car: { item }, onCarSelect } = this.props
    onCarSelect(item.id)
  }

  _renderIcon = (iconName) => (
    <Icon
      color={AppColors.coal}
      name={`ios-${iconName}`}
      size={AppFontSize.medium}
      style={AppStyles.itemIcon} />
  )

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
              {item.name.toUpperCase()}
              {' '}
              <Text style={{fontSize: AppFontSize.small}}>({item.available})</Text>
            </Text>
            <View style={AppStyles.list.metaContainer}>
              <Text style={AppStyles.list.meta}>
                {this._renderIcon('car')}
                {' '}
                {item.model}
              </Text>
              <Text style={AppStyles.list.meta}>
                {this._renderIcon('build')}
                {' '}
                {item.make}
              </Text>
              <Text style={AppStyles.list.meta}>
                {this._renderIcon('calendar')}
                {' '}
                {item.year}
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    )
  }
}

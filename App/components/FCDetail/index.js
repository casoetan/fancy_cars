import React from 'react'
import { Alert, Button, Image, Text, View } from 'react-native'

import { AppColors, AppFontStyle, AppStyles, AppType } from 'App/theme'

const _onBuy = car => (
  Alert.alert(
    car.name,
    'Ready to Buy?',
    [
      {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
      {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ],
    { cancelable: false }
  )
)

export const FCDetail = ({ car }) => (
  <View style={{flex: 1}}>
    <View style={AppStyles.detail.imageContainer}>
      <Image
        style={AppStyles.detail.image}
        source={{ uri: car.img }} />
      <View style={AppStyles.detail.imageOverlay}>
        <View style={[
          AppStyles.detail.headerContainer,
          {backgroundColor: AppColors.cloud},
          {marginBottom: 4}
        ]}>
          <Text style={AppFontStyle.h1}>{car.name.toUpperCase()}</Text>
        </View>
        <View style={[
          AppStyles.detail.headerContainer,
          car.availability ? {backgroundColor: 'green'} : {backgroundColor: 'darkred'}
        ]}>
          <Text style={[AppFontStyle.description, { color: AppColors.steel }]}>
            {car.available}
          </Text>
        </View>
      </View>
    </View>
    <View style={AppStyles.detail.metaContainer}>
      <Text style={AppStyles.detail.meta}>
        Make: <Text style={{fontFamily: AppType.bold}}>{car.make.toUpperCase()}</Text>
      </Text>
      <Text style={AppStyles.detail.meta}>
        Model: <Text style={{fontFamily: AppType.bold}}>{car.model.toUpperCase()}</Text>
      </Text>
      <Text style={AppStyles.detail.meta}>
        Year: <Text style={{fontFamily: AppType.bold}}>{car.year}</Text>
      </Text>
    </View>
    {car.availability && (
      <View style={AppStyles.detail.buyButton}>
        <Button
          onPress={_onBuy}
          title="Buy Now"
          color={AppColors.success} />
      </View>
    )}
  </View>
)

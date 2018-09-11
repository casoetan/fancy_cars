import React from 'react'
import { Alert, Button, Image, Text, View } from 'react-native'

import { AppStyles, AppColors, AppFontStyle } from 'App/theme'

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
          AppFontStyle.descriptionContainer,
          {backgroundColor: AppColors.cloud},
          {marginBottom: 4}
        ]}>
          <Text style={AppFontStyle.h1}>{car.name.toUpperCase()}</Text>
        </View>
        <View style={[
          AppFontStyle.descriptionContainer,
          car.availability ? {backgroundColor: 'green'} : {backgroundColor: 'darkred'}
        ]}>
          <Text style={[AppFontStyle.description, {color: AppColors.steel}]}>{car.available}</Text>
        </View>
      </View>
    </View>
    <View style={{ flex: 1, backgroundColor: AppColors.frost, padding: 20 }}>
      <Text style={[AppFontStyle.normal, {color: AppColors.coal, paddingBottom: 10}]}>Make: {car.make}</Text>
      <Text style={[AppFontStyle.normal, {color: AppColors.coal, paddingBottom: 10}]}>Model: {car.model}</Text>
      <Text style={[AppFontStyle.normal, {color: AppColors.coal, paddingBottom: 10}]}>Year: {car.year}</Text>
    </View>
    {car.availability && (
      <View style={{ flex: 1, backgroundColor: AppColors.silver }}>
        <Button
          onPress={_onBuy}
          title="Buy Now"
          color="#841584" />
      </View>
    )}
  </View>
)

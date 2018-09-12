import React from 'react'
import { Button, Image, Text, View } from 'react-native'

import { AppColors, AppFontStyle, AppStyles, AppType } from 'App/theme'

export const FCDetail = ({ car, onBuyCar }) => (
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
          onPress={onBuyCar}
          title="Buy Now"
          color={AppColors.success} />
      </View>
    )}
  </View>
)

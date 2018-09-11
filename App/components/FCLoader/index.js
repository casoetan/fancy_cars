import React from 'react'
import { ActivityIndicator, View } from 'react-native'

import { AppStyles } from 'App/theme'

export const FCLoader = () => (
  <View style={AppStyles.loadingContainer}>
    <ActivityIndicator size="large" />
  </View>
)

import { Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')

export const AppMetrics = {
  marginHorizontal: 10,
  marginVertical: 10,
  section: 25,
  baseMargin: 10,
  doubleBaseMargin: 20,
  navbarIconMargin: 30,
  smallMargin: 5,
  tinyMargin: 3,
  horizontalLineHeight: 1,
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
  navBarHeight: 42,
  buttonRadius: 4,
  listImageSize: 64,
  icons: {
    tiny: 15,
    small: 20,
    medium: 30,
    large: 45,
    xl: 60
  },
  images: {
    small: 20,
    medium: 40,
    large: 60,
    logo: 300
  }
}

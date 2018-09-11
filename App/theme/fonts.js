export const AppType = {
  base: 'HelveticaNeue',
  bold: 'HelveticaNeue-Bold',
  emphasis: 'HelveticaNeue-Italic'
}

export const AppFontSize = {
  h1: 38,
  h2: 34,
  h3: 30,
  h4: 26,
  h5: 20,
  h6: 18,
  input: 18,
  regular: 17,
  medium: 14,
  small: 12,
  tiny: 8.5
}

export const AppFontStyle = {
  h1: {
    fontFamily: AppType.base,
    fontSize: AppFontSize.h1
  },
  h2: {
    fontWeight: 'bold',
    fontSize: AppFontSize.h2
  },
  h3: {
    fontFamily: AppType.emphasis,
    fontSize: AppFontSize.h3
  },
  h4: {
    fontFamily: AppType.base,
    fontSize: AppFontSize.h4
  },
  h5: {
    fontFamily: AppType.base,
    fontSize: AppFontSize.h5
  },
  h6: {
    fontFamily: AppType.emphasis,
    fontSize: AppFontSize.h6
  },
  normal: {
    fontFamily: AppType.base,
    fontSize: AppFontSize.regular
  },
  description: {
    fontFamily: AppType.base,
    fontSize: AppFontSize.medium,
  },
  descriptionContainer: {
    padding: 4,
    borderRadius: 5,
  }
}

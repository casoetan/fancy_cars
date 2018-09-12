import { AppFontSize, AppFontStyle } from './fonts'
import { AppMetrics } from './metrics'
import { AppColors } from './colors'

export const AppStyles = {
  mainContainer: {
    flex: 1,
    backgroundColor: AppColors.transparent,
  },
  container: {
    flex: 1,
  },
  loadingContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0.2,
    backgroundColor: 'black',
  },
  list: {
    item: {
      flex: 1,
      flexDirection: 'row',
      borderBottomColor: AppColors.steel,
      borderBottomWidth: AppMetrics.horizontalLineHeight,
    },
    itemImage: {
      width: AppMetrics.listImageSize,
      height: AppMetrics.listImageSize,
      paddingRight: AppMetrics.smallMargin,
    },
    itemContent: {
      flex: 1,
      flexDirection: 'column',
      padding: AppMetrics.baseMargin,
    },
    itemIcon: {
      marginRight: AppMetrics.tinyMargin,
    },
    title: {
      fontSize: AppFontSize.h6,
      color: AppColors.darkBlue,
      marginBottom: AppMetrics.smallMargin,
    },
    metaContainer: {
      flex: 1,
      flexDirection: 'row',
    },
    meta: {
      fontSize: AppFontSize.small,
      color: AppColors.charcoal,
      paddingRight: AppMetrics.baseMargin,
    }
  },
  detail: {
    container: {
      flex: 1
    },
    imageContainer: {
      flex: 4,
      backgroundColor: 'white'
    },
    image: {
      flex: 1,
      resizeMode: 'cover'
    },
    imageOverlay: {
      position: 'absolute',
      bottom: 0,
      paddingLeft: 20,
      paddingBottom: 20
    },
    headerContainer: {
      borderRadius: 5,
      marginBottom: 4,
      padding: 4,
    },
    metaContainer: {
      flex: 1,
      justifyContent: 'space-around',
      backgroundColor: AppColors.frost,
      padding: 20,
    },
    meta: {
      ...AppFontStyle.normal,
      color: AppColors.coal,
      paddingBottom: 10,
    },
    buyButton: {
      backgroundColor: AppColors.silver,
      flex: 1,
      justifyContent: 'center',
    }
  },
}

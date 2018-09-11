import {
  AppFontSize,
  AppFontStyle,
  AppType,
} from './fonts'
import { AppMetrics } from './metrics'
import { AppColors } from './colors'

export const AppStyles = {
  mainContainer: {
    flex: 1,
    marginTop: AppMetrics.doubleBaseMargin,
    backgroundColor: AppColors.transparent,
  },
  container: {
    flex: 1,
    marginTop: AppMetrics.navBarHeight,
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
      justifyContent: 'center',
      padding: AppMetrics.smallMargin,
    },
    title: {
      fontSize: AppFontSize.h6,
      color: AppColors.darkBlue,
      marginBottom: AppMetrics.tinyMargin,
    },
    meta: {
      fontSize: AppFontSize.medium,
      color: AppColors.charcoal,
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
  },
  section: {
    margin: AppMetrics.section,
    padding: AppMetrics.baseMargin,
    borderTopColor: AppColors.frost,
    borderTopWidth: 0.5,
    borderBottomColor: AppColors.frost,
    borderBottomWidth: 1
  },
  darkLabelContainer: {
    backgroundColor: AppColors.cloud,
    padding: AppMetrics.smallMargin
  },
  darkLabel: {
    fontFamily: AppType.bold,
    color: AppColors.snow
  },
  groupContainer: {
    margin: AppMetrics.smallMargin,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  sectionTitle: {
    ...AppFontStyle.h4,
    color: AppColors.coal,
    backgroundColor: AppColors.ricePaper,
    padding: AppMetrics.smallMargin,
    marginTop: AppMetrics.smallMargin,
    marginHorizontal: AppMetrics.baseMargin,
    borderWidth: 1,
    borderColor: AppColors.charcoal,
    alignItems: 'center',
    textAlign: 'center'
  }
}

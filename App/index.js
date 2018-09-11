import React, { PureComponent } from 'react'
import { ActionSheetIOS, NavigatorIOS } from 'react-native'
import { Provider } from 'react-redux'

import store from 'App/store'
import { sortCars } from 'App/store/actionCreators'
import { ListView } from 'App/views'

class App extends PureComponent {
  _handleCarSorting = () => {
    ActionSheetIOS.showActionSheetWithOptions({
      options: ['Cancel', 'Sort by Name', 'Sort by Availability', 'Reset'],
      destructiveButtonIndex: 3,
      cancelButtonIndex: 0,
    },
      buttonIndex => store.dispatch(sortCars(buttonIndex))
    )
  }

  render() {
    return (
      <Provider store={store}>
        <NavigatorIOS
          style={{ flex: 1 }}
          initialRoute={{
            component: ListView,
            title: 'Fancy Car',
            rightButtonTitle: 'Sort',
            onRightButtonPress: () => this._handleCarSorting(),
          }}/>
      </Provider>
    )
  }
}

export default App

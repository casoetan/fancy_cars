import React, { Fragment, PureComponent } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import {
  getCars,
  saveReduxStateOffline,
  selectCar,
} from 'App/store/actionCreators'
import { FCList, FCLoader } from 'App/components'

class FCCarList extends PureComponent {
  _onCarSelect = id => {
    this.props.actions.selectCar(id)
    this.props.navigator()
  }

  _getNextCars = () => {
    const { actions, state } = this.props
    if (!state.loading && state.online) {
      actions.getCars(state.resultPage)
    }
  }

  componentDidUpdate(prevProps) {
    const { actions, state } = this.props
    if (state.cars !== prevProps.state.cars && state.online) {
      actions.saveReduxStateOffline(state.cars)
    }
  }

  componentDidMount() {
    const { actions, state } = this.props
    if (state.resultPage === 1) {
      actions.getCars(state.resultPage)
    }
  }

  render() {
    const { state } = this.props
    return (
      <Fragment>
        <FCList
          cars={state.cars}
          getMoreCars={this._getNextCars}
          onCarSelect={this._onCarSelect} />
        {state.loading && <FCLoader />}
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => ({
  state
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    getCars,
    saveReduxStateOffline,
    selectCar,
  }, dispatch)
})

export const FCCarListContainer = connect(mapStateToProps, mapDispatchToProps)(FCCarList)

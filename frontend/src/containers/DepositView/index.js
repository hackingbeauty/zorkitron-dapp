import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as transactionActionCreators  from 'core/actions/actions-transaction'
import * as uiActionCreators  from 'core/actions/actions-ui'
import DepositViewForm from './components/DepositViewForm'
import { styles } from './styles.scss'

class DepositView extends Component {
  render() {
    const { actions } = this.props
    const { transaction } = actions

    return (
      <div className={styles}>
        <div className="container">
          <DepositViewForm onClick={transaction.depositLiquidity}/>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    provider: state.provider,
    transaction: state.transaction
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      transaction: bindActionCreators(transactionActionCreators, dispatch),
      ui: bindActionCreators(uiActionCreators, dispatch)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DepositView)
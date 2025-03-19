import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as transactionActionCreators  from 'core/actions/actions-transaction'
import * as uiActionCreators  from 'core/actions/actions-ui'
import DepositViewForm from './components/DepositViewForm'
import { MenuItem } from '@material-ui/core'
import ethToken from 'assets/icons/tokens/eth.png'
import { styles } from './styles.scss'

class DepositView extends Component {
  constructor(props) {
    super(props)
    const defaultTokenHTML = (
      <div>
        <img width="20" src={ethToken} />
        <span>ETH</span>
      </div>
    );
    this.state = { selectedTokenHTML: defaultTokenHTML }
  }
  
  onSelect= (selectedToken) => {
    const selectedTokenHTML = selectedToken.outerHTML;
    alert('on select');
    debugger;
    this.setState({ selectedTokenHTML });
  }

  submitForm= () => {
    alert('submit form');
    const { actions } = this.props;
    const { transaction } = actions;
    transaction.addLiquidity();
  }

  render() {
    const { actions } = this.props
    const { selectedTokenHTML } = this.state;
    const { transaction } = actions

    return (
      <div className={styles}>
        <div className="container">
          <DepositViewForm onSelect={this.onSelect} onSubmit={this.submitForm}>
            <MenuItem selected={true}>
              {selectedTokenHTML}
            </MenuItem>
          </DepositViewForm>
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
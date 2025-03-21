import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as transactionActionCreators  from 'core/actions/actions-transaction'
import * as uiActionCreators  from 'core/actions/actions-ui'
import Button from 'components/Button'
import TokenMenu from 'components/TokenMenu'
import ethToken from 'assets/icons/tokens/eth.png'
import { styles } from './styles.scss'

class DepositView extends Component {
  constructor(props) {
    super(props)
    const defaultFirstTokenHTML = (
      <div>
        <img width="20" src={ethToken} />
        <span>ETH</span>
      </div>
    );
    const defaultSecondTokenHTML = (
      <div>
        <span>Select token</span>
      </div>
    );
    this.state = { 
      selectedFirstTokenHTML: defaultFirstTokenHTML,
      selectedSecondTokenHTML: defaultSecondTokenHTML
    }
  }
  
  onFirstTokenChange= (selectedToken, selectedTokenElem) => {
    const { actions } = this.props
    const selectedTokenHTML = selectedTokenElem.innerHTML
    const html = (
      <div dangerouslySetInnerHTML={{ __html: selectedTokenHTML }}>
      </div>
    )
    this.setState({ selectedFirstTokenHTML: html })
    actions.transaction.selectToken({ firstToken: selectedToken })
  }

  onSecondTokenChange= (selectedToken, selectedTokenElem) => {
    const { actions } = this.props
    const selectedTokenHTML = selectedTokenElem.innerHTML
    const html = (
      <div dangerouslySetInnerHTML={{ __html: selectedTokenHTML }}>
      </div>
    )
    this.setState({ selectedSecondTokenHTML: html })
    actions.transaction.selectToken({ secondToken: selectedToken })
  }

  submitForm= (event) => {
    const { actions } = this.props
    const { transaction } = actions
    transaction.addLiquidity()
    event.preventDefault()
  }

  render() {
    const { 
      selectedFirstTokenHTML,
      selectedSecondTokenHTML
    } = this.state;

    return (
      <div className={styles}>
        <div className="container">
          <form onSubmit={this.submitForm}>
            <div className="section">
              <div id="deposit-liquidity-form-container" className="box">
                <h3>Deposit Liquidity</h3>
                <form id="deposit-liquidity-form">
                  <div className="section">
                    <TokenMenu onClose={this.onFirstTokenChange}>
                      <div className="menu-item">
                        {selectedFirstTokenHTML}
                      </div>
                    </TokenMenu>
                  </div>
                  <div className="section">
                    <TokenMenu onClose={this.onSecondTokenChange}>
                      <div className="menu-item">
                        {selectedSecondTokenHTML}
                      </div>
                    </TokenMenu>
                  </div>
                  <div className="section">
                    <Button
                      color="primary"
                      variant="text"
                      type="submit"
                    >
                      Deposit
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </form>
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
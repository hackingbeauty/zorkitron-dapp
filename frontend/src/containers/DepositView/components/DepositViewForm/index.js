import React, { useState } from 'react'
import Button from 'components/Button'
import Menu from 'components/Menu'
import { styles } from './styles.scss'

function DepositViewForm(props) {
    const { children } = props;

    return(
      <div className={styles}>
        <form onSubmit={props.onSubmit}>
          <div className="section">
            <div id="pools-form-container" className="box">
              <h3>Deposit Liquidity</h3>
              <form id="pools-form">
                <div className="section">
                  <ul className="drop-down-list">
                    <Menu onSelect={props.onSelect}>
                      {children}
                    </Menu>
                  </ul>
                  <Menu>
                    <span>Select token</span>
                  </Menu>
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
    )
}
export default DepositViewForm

import React, { useState } from 'react'
import TextInput from 'components/TextInput'
import Button from 'components/Button'
import NumberFormatter from 'components/NumberFormatter'
import Menu from 'components/Menu'
import { styles } from './styles.scss'

function DepositViewForm(props) {
    return(
      <div className={styles}>
        <form>
          <div className="section">
            <div id="pools-form-container" className="box">
              <h3>Deposit Liquidity</h3>
              <form id="pools-form">
                <div className="section">
                  Select pair
                  <Menu />
                  <Menu />

                </div>
                <div className="section">
                <Button
                  color="primary"
                  onClick={props.onClick}
                  variant="text"
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

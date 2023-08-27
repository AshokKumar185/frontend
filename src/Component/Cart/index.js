import {Component} from 'react'
import {BiCircle} from 'react-icons/bi'
import {FaRegDotCircle} from 'react-icons/fa'
import {AiOutlineCopyrightCircle} from 'react-icons/ai'
import './index.css'

class Cart extends Component {
  render() {
    return (
      <div className="bg-container">
        <div className="main-card-container">
          <div className="top-heading-container">
            <div className="l">
              <hr />
            </div>
            <p className="top-desc">Bundle & Save</p>
            <div className="r">
              <hr />{' '}
            </div>
          </div>
          <div className="first-card-container">
            <BiCircle />
            <div className="pair-container">
              <div>
                <p className="pair">1 Pair</p>
                <p className="dkk">DKK 195.00</p>
              </div>
              <p>50% OFF</p>
            </div>
          </div>
          <div className="second-card-container">
            <div className="selected-container">
              <FaRegDotCircle className="red-dot" />
              <div className="pair-container">
                <div>
                  <p className="pair">2 Pair</p>
                  <p className="dkk">DKK 345.00</p>
                </div>
                <p className="Offer">DKK 195.00</p>
                <div>
                  <p className="pair">Most Popular</p>
                  <p className="dkk">40% OFF</p>
                </div>
              </div>
            </div>
            <div className="size-color-container">
              <div>
                <p className="size">Size</p>
                <label htmlFor="2">#1</label>{' '}
                <select className="select">
                  <option>S</option>
                </select>
              </div>
              <div>
                <p className="color">Color</p>
                <select className="select">
                  <option>Color</option>
                </select>
              </div>
            </div>
            <div className="size-color-container2">
              <div>
                <label htmlFor="2">#2</label>{' '}
                <select className="select">
                  <option>S</option>
                </select>
              </div>
              <div>
                <select className="select">
                  <option>Color</option>
                </select>
              </div>
            </div>
          </div>
          <div className="first-card-container">
            <BiCircle />
            <div className="pair-container">
              <div>
                <p className="pair">3 Pair</p>
                <p className="dkk">DKK 528.00</p>
              </div>
              <p>60% OFF</p>
            </div>
          </div>
          <div className="amount">
            <p className="shipping">Free 2 day Shipping</p>
            <p className="total">Total: DKK 360.00</p>
          </div>
          <button type="button" className="cart-btn">
            {' '}
            + Add to Cart
          </button>
          <p className="final">
            <AiOutlineCopyrightCircle />{' '}
            <span className="span">Powered by pumper</span>
          </p>
        </div>
      </div>
    )
  }
}

export default Cart

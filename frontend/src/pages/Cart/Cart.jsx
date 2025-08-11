import React, { useContext } from "react"
import "./Cart.css"
import StoreContext from "../../context/StoreContext"

const Cart = () => {
	const { cartItems, food_list, removeFromCart, getTotalCart } =
		useContext(StoreContext)
	return (
		<div className='cart'>
			<div className='cart-items'>
				<div className='cart-item-title'>
					<p>Items</p>
					<p>Title</p>
					<p>Price</p>
					<p>Quantity</p>
					<p>Total</p>
					<p>Remove</p>
				</div>
				<br />
				<hr />
				{food_list.map((item) => {
					if (cartItems[item._id] > 0) {
						return (
							<div>
								<div className='cart-item-title cart-items-item'>
									<img
										src={item.image}
										alt=''
									/>
									<p>{item.name}</p>
									<p>${item.price}</p>
									<p>{cartItems[item._id]}</p>
									<p>${item.price * cartItems[item._id]}</p>
									<p
										className='cross'
										onClick={() => removeFromCart(item._id)}
									>
										x
									</p>
								</div>
								<hr />
							</div>
						)
					}
				})}
			</div>
			<div className='cart-bottom'>
				<div className='cart-total'>
					<h2>Cart Totals</h2>
					<div>
						<div className='cart-total-details'>
							<p>Subtotal</p>
							<p>${getTotalCart()}</p>
						</div>
						<hr />
						<div className='cart-total-details'>
							<p>Delivery Fee</p>
							<p>${2}</p>
						</div>
						<hr />
						<div className='cart-total-details'>
							<b>Total</b>
							<b>${getTotalCart() + 2}</b>
						</div>
					</div>
					<button>PROCEED TO CHECKOUT</button>
				</div>
				<div className='cart-promocode'>
					<div>
						<p>If you have promo code, Enter it here</p>
						<div className='cart-promocode-input'>
							<input
								type='text'
								placeholder='promo code'
							/>
							<button>Submit</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Cart

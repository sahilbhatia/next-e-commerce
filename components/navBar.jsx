import CartIcon from './cartIcon'

const NavBar = () => {
  return (
    <nav className="relative select-none bg-purple-400 flex items-stretch w-full">
      <div className="flex h-12">
        <a
          href="/products"
          className="py-2 px-4 leading-normal text-white flex items-center"
        >
          Products
        </a>
        <a
          href="/cart"
          className="py-2 px-4 leading-normal text-white flex items-center"
        >
          Cart Summary
        </a>
      </div>
      <div className="flex justify-end items-center w-full ml-auto px-4 py-2">
        <a
          href="#"
          className="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center hover:bg-grey-dark"
        >
          Logout
        </a>
        <div className="h-6 w-6">
          <CartIcon />
        </div>
      </div>
    </nav>
  )
}

export default NavBar

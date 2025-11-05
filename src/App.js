import { useState } from 'react';
import { Search, ShoppingCart, Star, Menu, X } from 'lucide-react';

export default function App() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const featuredBooks = [
    { id: 1, title: "The Midnight Library", author: "Matt Haig", price: "$24.99", rating: 4.8, img: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400" },
    { id: 2, title: "Atomic Habits", author: "James Clear", price: "$18.99", rating: 4.9, img: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400" },
    { id: 3, title: "Project Hail Mary", author: "Andy Weir", price: "$28.99", rating: 4.7, img: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=400" },
  ];

  const categories = ["Fiction", "Mystery", "Romance", "Sci-Fi", "Biography", "Self-Help"];

  return (
    <>
      {/* Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-3xl font-bold text-indigo-600">BookHaven</h1>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-700 hover:text-indigo-600 font-medium">Home</a>
              <a href="#" className="text-gray-700 hover:text-indigo-600 font-medium">Shop</a>
              <a href="#" className="text-gray-700 hover:text-indigo-600 font-medium">Categories</a>
              <a href="#" className="text-gray-700 hover:text-indigo-600 font-medium">About</a>
            </div>

            <div className="flex items-center space-x-4">
              <button className="p-2"><Search className="w-6 h-6 text-gray-700" /></button>
              <button className="p-2 relative">
                <ShoppingCart className="w-6 h-6 text-gray-700" />
                <span className="absolute -top-1 -right-1 bg-indigo-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">3</span>
              </button>
              <button onClick={() => setMobileMenu(!mobileMenu)} className="md:hidden">
                {mobileMenu ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenu && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {["Home", "Shop", "Categories", "About"].map(item => (
                <a key={item} href="#" className="block px-3 py-2 text-gray-700 hover:bg-indigo-50 rounded-md">{item}</a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6">
            Discover Your Next Great Read
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Over 50,000 books in fiction, non-fiction, and everything in between.
          </p>

          <div className="max-w-2xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                placeholder="Search by title, author, or genre..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-4 rounded-lg text-gray-800 text-lg focus:outline-none focus:ring-4 focus:ring-indigo-300"
              />
              <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold px-8 py-4 rounded-lg flex items-center justify-center gap-2 transition">
                <Search className="w-5 h-5" /> Search
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-10">Shop by Category</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map(cat => (
              <div key={cat} className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1 cursor-pointer text-center">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 mx-auto mb-3" />
                <p className="font-semibold text-gray-800">{cat}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Books */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-10">Featured Books</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredBooks.map(book => (
              <div key={book.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition group">
                <div className="h-64 overflow-hidden">
                  <img src={book.img} alt={book.title} className="w-full h-full object-cover group-hover:scale-110 transition duration-300" />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-800 mb-1">{book.title}</h4>
                  <p className="text-gray-600 mb-3">by {book.author}</p>
                  <div className="flex items-center mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-5 h-5 ${i < Math.floor(book.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                    ))}
                    <span className="ml-2 text-sm text-gray-600">({book.rating})</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-indigo-600">{book.price}</span>
                    <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-lg font-medium transition">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-indigo-600 py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h3 className="text-4xl font-bold text-white mb-4">Stay Updated</h3>
          <p className="text-indigo-100 mb-8 text-lg">
            Get exclusive deals, new arrivals, and book recommendations!
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-6 py-4 rounded-lg text-gray-800 flex-1 focus:outline-none focus:ring-4 focus:ring-yellow-400"
            />
            <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold px-8 py-4 rounded-lg transition">
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h4 className="text-2xl font-bold mb-4">BookHaven</h4>
            <p className="text-gray-400">Your trusted bookstore since 2020.</p>
          </div>
          <div>
            <h5 className="font-semibold mb-3">Quick Links</h5>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">About Us</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
              <li><a href="#" className="hover:text-white">Shipping</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold mb-3">Customer Care</h5>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">Returns</a></li>
              <li><a href="#" className="hover:text-white">FAQs</a></li>
              <li><a href="#" className="hover:text-white">Track Order</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold mb-3">Follow Us</h5>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-gray-700 rounded-full"></div>
              <div className="w-10 h-10 bg-gray-700 rounded-full"></div>
              <div className="w-10 h-10 bg-gray-700 rounded-full"></div>
            </div>
          </div>
        </div>
        <div className="text-center text-gray-500 mt-10 text-sm">
          © 2025 BookHaven. All rights reserved.
        </div>
      </footer>
    </>
  );
}
import { useEffect, useMemo, useState } from 'react'
import './App.css'

const PRODUCTS_PER_PAGE = 4
const EMPTY_PRODUCT = { title: '', price: '', category: '', brand: '' }

function App() {
  const [products, setProducts] = useState([])
  const [search, setSearch] = useState('')
  const [page, setPage] = useState(1)
  const [form, setForm] = useState(EMPTY_PRODUCT)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products?limit=100')
        if (!response.ok) throw new Error('Could not load products.')
        const result = await response.json()
        setProducts(result.products)
      } catch (fetchError) {
        setError(fetchError.message)
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  const filteredProducts = useMemo(() => {
    const searchText = search.toLowerCase()
    return products.filter((product) =>
      [product.title, product.category, product.brand]
        .join(' ')
        .toLowerCase()
        .includes(searchText),
    )
  }, [products, search])

  const pageCount = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE)
  const visibleProducts = filteredProducts.slice(
    (page - 1) * PRODUCTS_PER_PAGE,
    page * PRODUCTS_PER_PAGE,
  )

  const handleSearch = (event) => {
    setSearch(event.target.value)
    setPage(1)
  }

  const handleFormChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value })
  }

  const addProduct = (event) => {
    event.preventDefault()
    if (!form.title || !form.price) return

    setProducts([
      {
        id: `custom-${Date.now()}`,
        ...form,
        price: Number(form.price),
        description: 'A product added by you.',
        thumbnail: 'https://placehold.co/600x400/e9eadf/20241f?text=New+Product',
      },
      ...products,
    ])
    setForm(EMPTY_PRODUCT)
    setSearch('')
    setPage(1)
  }

  return (
    <main className="app">
      <header className="page-header">
        <p className="eyebrow">Simple product catalogue</p>
        <h1>Products</h1>
        <p>Browse products from the API, or add your own product below.</p>
      </header>

      <section className="toolbar">
        <label htmlFor="search">Search products</label>
        <input
          id="search"
          type="search"
          value={search}
          onChange={handleSearch}
          placeholder="Search by name, category, or brand"
        />
      </section>

      <section className="add-product">
        <h2>Add a product</h2>
        <form onSubmit={addProduct}>
          <input name="title" value={form.title} onChange={handleFormChange} placeholder="Product name" required />
          <input name="price" value={form.price} onChange={handleFormChange} placeholder="Price" type="number" min="0" required />
          <input name="category" value={form.category} onChange={handleFormChange} placeholder="Category" />
          <input name="brand" value={form.brand} onChange={handleFormChange} placeholder="Brand" />
          <button type="submit">Add product</button>
        </form>
      </section>

      {loading && <p className="message">Loading products...</p>}
      {error && <p className="message error">{error}</p>}
      {!loading && !error && (
        <>
          <p className="result-count">{filteredProducts.length} products found</p>
          <section className="product-grid">
            {visibleProducts.map((product) => (
              <article className="product-card" key={product.id}>
                <div className="product-card-media">
                  <img src={product.thumbnail} alt={product.title} />
                </div>
                <div className="product-card-content">
                  <p className="product-card-category">{product.category || 'Product'}</p>
                  <h2>{product.title}</h2>
                  <p className="product-card-description">{product.description}</p>
                  <div className="product-card-details">
                    <span>{product.brand || 'Custom'}</span>
                    <strong>${product.price}</strong>
                  </div>
                </div>
              </article>
            ))}
          </section>
          {visibleProducts.length === 0 && <p className="message">No products match your search.</p>}
          {pageCount > 1 && (
            <nav className="pagination" aria-label="Product pages">
              <button disabled={page === 1} onClick={() => setPage(page - 1)}>Previous</button>
              <span>Page {page} of {pageCount}</span>
              <button disabled={page === pageCount} onClick={() => setPage(page + 1)}>Next</button>
            </nav>
          )}
        </>
      )}
    </main>
  )
}

export default App

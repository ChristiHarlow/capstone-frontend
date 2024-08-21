import React from 'react'
import Favorites from './Favorites'
import Footer from './Footer'
import Header from './Header'

function Home () {
  // Define the host URL for local deployment
  const apiUrl = 'https://api.christisfavoritethings.com/api'

  return (
    <div className="container">
      <Header />
      <Favorites host={apiUrl} />
      <Footer />
    </div>
  )
}

export default Home

import Header from './components/Header.js'
import Footer from './components/Footer.js'
import Keywords from './components/Keywords.js'
import SearchBar from './components/SearchBar.js'

export default function Home() {
  return (
    <div>
      <Header />
      <Keywords />
      <SearchBar />
      <Footer />
    </div>
  )
}

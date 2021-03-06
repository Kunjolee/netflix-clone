import { Banner, Navbar, Row, Footer } from '../'
import { requests } from '../../api/'

const HomeScreen = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Row 
        title='NETFLIX ORIGINALS'                
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow        
      />
      <Row 
        title='Trending Now'                
        fetchUrl={requests.fetchTrending}
        isLargeRow        
      />
      <Row 
        title='Top Rated'
        fetchUrl={requests.fetchTopRated}        
      />            
      <Row 
        title='Action Movies'
        fetchUrl={requests.fetchActionMovies}        
      />      
      <Row 
        title='Comedy Movies'
        fetchUrl={requests.fetchComedyMovies}        
      />      
      <Row 
        title='Horror Movies'
        fetchUrl={requests.fetchHorrorMovies}        
      />      
      <Row 
        title='Romance Movies'
        fetchUrl={requests.fetchRomanceMovies}        
      />      
      <Row 
        title='Documentaries'
        fetchUrl={requests.fetchDocumentaries}        
      />     
      <Footer />
    </>
  )
}
export default HomeScreen
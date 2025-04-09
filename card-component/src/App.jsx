import ProfileCard from './ProfileCard.jsx';
import TeamCard from './TeamCard.jsx';
import ProductCard from './ProductCard.jsx';
import QuoteCard from './QuoteCard.jsx';

function App() {
return (<>
  <div className ="App">
  <h1>Card Component</h1>
    <div className="card-container">
      <ProfileCard />
      <TeamCard />
      <ProductCard />
      <QuoteCard /> 
  </div>
  </div>
  </>
  );
}
export default App
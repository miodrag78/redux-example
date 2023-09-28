import { useSelector } from 'react-redux';
import { selectCounterValue } from '../store/counter/selectors'
import Counter from '../components/Counter';


function Home() {
  const count =
   useSelector(selectCounterValue);
  
  return(
	 <div>
  <Counter/>

    <p>Counter value is = {count}</p>

   </div>
);}
export default Home;
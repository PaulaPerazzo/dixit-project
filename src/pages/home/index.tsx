
import CardList from '@/components/CardList';
import Navbar from '@/components/Navbar';

function Home() {

  const handleClick = () => {
    console.log('button clicked!');
  };

  return (
    <>
      <Navbar />
      <CardList />
    </>
  )
}

export default Home;

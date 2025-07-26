import { useEffect, useState } from 'react';
import axios from 'axios';

import Navbar from '../components/Navbar';
import RateLimitedUI from '../components/RateLimitedUI';

const HomePage = () => {
  const [isRateLimited, setIsRateLimited] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [note, setNote] = useState([]);

  useEffect(() => {
    const fetchingData = async () => {
      try {
        const res = await axios.get('http://localhost:5001/api/notes');
        console.log(res.data);
      } catch (error) {
      } finally {
      }
    };
    fetchingData();
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      {isRateLimited && <RateLimitedUI />}
    </div>
  );
};

export default HomePage;

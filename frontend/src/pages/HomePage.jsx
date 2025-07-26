import { useEffect, useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

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
        console.log('Error on data fetching', error);
        if (error.response?.status === 429) {
          setIsRateLimited(true);
          console.log(isRateLimited);
        } else {
          toast.error('Failed to load note');
        }
      } finally {
        setIsLoading(false);
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

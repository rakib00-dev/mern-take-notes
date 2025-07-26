import { useEffect, useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

import Navbar from '../components/Navbar';
import RateLimitedUI from '../components/RateLimitedUI';
import NoteCard from '../components/NoteCard';

const HomePage = () => {
  const [isRateLimited, setIsRateLimited] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const fetchingData = async () => {
      try {
        const res = await axios.get('http://localhost:5001/api/notes');
        setNotes(res.data);
      } catch (error) {
        console.log('Error on data fetching', error);
        if (error.response.status === 429) {
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
      <div className="grid grid-cols-1 mx-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-10">
        {isLoading && (
          <div className="text-center text-primary">Notes are loading...</div>
        )}
        {notes.length > 0 &&
          !isRateLimited &&
          notes.map((note) => <NoteCard key={note._id} note={note} />)}
      </div>
    </div>
  );
};

export default HomePage;

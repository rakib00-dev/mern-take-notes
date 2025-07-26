import React from 'react';
import { PlusIcon } from 'lucide-react';
import { Link } from 'react-router';

const Navbar = () => {
  return (
    <header className="bg-base-300 border-b border-b-base-content/10 ">
      <div className="mx-auto p-4 max-w-6xl  flex items-center justify-between">
        <h1 className="font-mono text-primary font-bold tracking-tight text-3xl">
          TakeNotes
        </h1>
        <div>
          <Link className="btn btn-primary" to={'/create'}>
            <PlusIcon className="size-5" />
            New Note
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

import React from 'react';
import { PlusIcon } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="bg-base-300 border-b border-b-base-content/10 ">
      <div className="mx-auto p-4 max-w-6xl  flex items-center justify-between">
        <h1 className="font-mono text-primary font-bold tracking-tight text-3xl">
          TakeNotes
        </h1>
        <div>
          <button className="btn btn-primary">
            <PlusIcon className="size-5" />
            Create
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

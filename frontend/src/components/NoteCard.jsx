import { PenSquareIcon, Trash2Icon } from 'lucide-react';
import { Link } from 'react-router';

const NoteCard = ({ note }) => {
  const handleDelete = (e) => {
    e.stopPropagation();
    e.preventDefault();
    // Add your delete logic here, e.g., call API or update state
    console.log('Delete note:', note._id);
  };

  return (
    <Link
      to={`/note/${note._id}`}
      className="card bg-base-100 hover:shadow-lg transition-all duration-200 border-t-4 border-solid border-[#00FF9D]"
    >
      <div className="card-body">
        <h3 className="card-title text-base-content">{note.title}</h3>
        <p className="text-base-content/70 line-clamp-3">{note.content}</p>
        <div className="card-actions justify-between items-center mt-4">
          <span className="text-sm text-base-content/60">{note.createdAt}</span>
          <div className="flex items-center gap-1">
            <PenSquareIcon className="size-4" />
            <button
              className="btn btn-ghost btn-xs text-error"
              onClick={handleDelete}
            >
              <Trash2Icon className="size-4" />
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default NoteCard;

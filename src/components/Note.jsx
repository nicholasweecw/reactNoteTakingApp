import { FaTrashAlt } from "react-icons/fa";

function Note({ id, text, date, handleDeleteNote }) {
  return (
    <div className="note">
      <p>{text}</p>
      <div className="note-footer">
        <p>{date}</p>
        <div className="MdDeleteForever">
          <FaTrashAlt
            onClick={() => handleDeleteNote(id)}
            className="delete-icon"
            size="1.3em"
          />
        </div>
      </div>
    </div>
  );
}

export default Note;

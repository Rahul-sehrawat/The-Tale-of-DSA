import React, { useState } from 'react';
import Note from './Note';
import AddNote from './AddNote';
import EditNote from './EditNote';

interface NoteType {
    id: string;
    title: string;
    text: string;
    date: string;
    time: string;
}

interface NotesListProps {
    notes: NoteType[];
    handleAddNote: (title: string, text: string) => void;
    handleDeleteNote: (id: string) => void;
    handleEditNote: (id: string, newTitle: string, newText: string) => void;
}

const NotesList: React.FC<NotesListProps> = ({
    notes,
    handleAddNote,
    handleDeleteNote,
    handleEditNote
}) => {
    const [editingNoteId, setEditingNoteId] = useState<string | null>(null);

    const startEditing = (id: string) => {
        setEditingNoteId(id);
    };

    const saveEdit = (id: string, newTitle: string, newText: string) => {
        handleEditNote(id, newTitle, newText);
        setEditingNoteId(null);
    };

    const cancelEdit = () => {
        setEditingNoteId(null);
    };

    return (
        <div className='notes-list'>
            {notes.map((note) => (
                <div className="single-note" key={note.id}>
                    {editingNoteId === note.id ? (
                        <EditNote
                            note={note}
                            handleSave={saveEdit}
                            handleCancel={cancelEdit}
                        />
                    ) : (
                        <Note
                            id={note.id}
                            title={note.title}
                            text={note.text}
                            date={note.date}
                            time={note.time}
                            handleDeleteNote={handleDeleteNote}
                            handleEdit={startEditing}
                        />
                    )}
                </div>
            ))}
            <AddNote handleAddNote={handleAddNote} />
        </div>
    );
};

export default NotesList;


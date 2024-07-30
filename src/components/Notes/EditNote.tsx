import React, { useState, useRef, ChangeEvent, KeyboardEvent, MouseEvent } from 'react';

interface Note {
    id: string;
    title: string;
    text: string;
}

interface EditNoteProps {
    note: Note;
    handleSave: (id: string, title: string, text: string) => void;
    handleCancel: () => void;
}

const EditNote: React.FC<EditNoteProps> = ({ note, handleSave, handleCancel }) => {
    const [noteTitle, setNoteTitle] = useState<string>(note.title);
    const [noteText, setNoteText] = useState<string>(note.text);
    const characterLimit = 125;
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setNoteTitle(event.target.value);
    };

    const handleTextChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        if (characterLimit - event.target.value.length >= 0) {
            setNoteText(event.target.value);
        }
    };

    const handleSaveClick = () => {
        if (noteTitle.trim().length > 0 && noteText.trim().length > 0) {
            handleSave(note.id, noteTitle, noteText);
        }
    };

    const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            textareaRef.current?.focus();
        }
    };

    return (
        <div className='note new'>
            <input
                type='text'
                placeholder='Title'
                value={noteTitle}
                onChange={handleTitleChange}
                onKeyDown={handleKeyDown}
                className='note-title'
            />
            <textarea
                ref={textareaRef}
                rows={8}
                cols={10}
                placeholder='Edit your note...'
                value={noteText}
                onChange={handleTextChange}
            ></textarea>
            <div className='note-footer'>
                <small>{characterLimit - noteText.length} character left</small>
                <button className='save' onClick={handleSaveClick}>
                    Save
                </button>
                <button className='cancel' onClick={handleCancel}>
                    Cancel
                </button>
            </div>
        </div>
    );
};

export default EditNote;

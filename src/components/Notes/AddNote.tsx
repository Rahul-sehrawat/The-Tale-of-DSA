import React, { useState, useRef, ChangeEvent, KeyboardEvent, MouseEvent } from 'react';

interface AddNoteProps {
    handleAddNote: (title: string, text: string) => void;
}

const AddNote: React.FC<AddNoteProps> = ({ handleAddNote }) => {
    const [noteTitle, setNoteTitle] = useState<string>('');
    const [noteText, setNoteText] = useState<string>('');
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
            handleAddNote(noteTitle, noteText);
            setNoteText('');
            setNoteTitle('');
        }
    };

    const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            textareaRef.current?.focus();
        }
    };

    return (
        <div className="note new">
            <input
                type="text"
                placeholder="Title"
                value={noteTitle}
                onChange={handleTitleChange}
                onKeyDown={handleKeyDown}
                className="note-title"
            />
            <textarea
                ref={textareaRef}
                rows={8}
                cols={10}
                placeholder="Type Details Here !"
                value={noteText}
                onChange={handleTextChange}
            ></textarea>
            <div className="note-footer">
                <small>
                    {characterLimit - noteText.length} Character left
                </small>
                <button className="save" onClick={handleSaveClick}>
                    Save
                </button>
            </div>
        </div>
    );
};

export default AddNote;

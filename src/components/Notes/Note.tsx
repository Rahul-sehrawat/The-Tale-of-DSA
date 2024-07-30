import React from 'react';
import { FaEdit } from 'react-icons/fa';
import { RiDeleteBin6Fill } from 'react-icons/ri';

interface NoteProps {
    id: string;
    title: string;
    text: string;
    date: string;
    time: string;
    handleDeleteNote: (id: string) => void;
    handleEdit: (id: string) => void;
}

const Note: React.FC<NoteProps> = ({ id, title, text, date, time, handleDeleteNote, handleEdit }) => {
    return (
        <div className='note'>
            <div>
                <span><b>{title}</b></span>
                <br />
                <p>{text}</p>
            </div>
            <div className='note-footer'>
                <small>{date}</small>
                <small>{time}</small>
                <FaEdit
                    onClick={() => handleEdit(id)}
                    className='edit-icon'
                    size='1.3em'
                />
                <RiDeleteBin6Fill
                    onClick={() => handleDeleteNote(id)}
                    className='delete-icon'
                    size='1.3em'
                />
            </div>
        </div>
    );
};

export default Note;

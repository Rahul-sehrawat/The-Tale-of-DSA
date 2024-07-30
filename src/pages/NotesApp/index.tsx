import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import NotesList from '../../components/Notes/NodeList'; 
import Search from '../../components/Notes/Search';
import Pagination from '../../components/Notes/Pagination';
import Header from '../../components/Notes/Header'; 
import Topbar from '@/components/Topbar/Topbar';


interface NoteType {
    id: string;
    title: string;
    text: string;
    date: string;
    time: string;
}

const NotesApp: React.FC = () => {
    const initialNotes: NoteType[] = [];
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [notes, setNotes] = useState<NoteType[]>(() => {
        const savedNotes = JSON.parse(localStorage.getItem('react-notes-app-data') || '[]');
        return savedNotes || initialNotes;
    });
    const [searchText, setSearchText] = useState<string>('');
    const [darkMode, setDarkMode] = useState<boolean>(false);

    useEffect(() => {
        localStorage.setItem('react-notes-app-data', JSON.stringify(notes));
    }, [notes]);

    const addNote = (title: string, text: string) => {
        const date = new Date();
        const newNote: NoteType = {
            id: nanoid(),
            title,
            text,
            date: date.toLocaleDateString(),
            time: date.toLocaleTimeString(),
        };
        setNotes([...notes, newNote]);
    };

    const deleteNote = (id: string) => {
        setNotes(notes.filter(note => note.id !== id));
    };

    const editNote = (id: string, newTitle: string, newText: string) => {
        const date = new Date();
        setNotes(notes.map(note =>
            note.id === id
                ? { ...note, title: newTitle, text: newText, date: date.toLocaleDateString(), time: date.toLocaleTimeString() }
                : note
        ));
    };

    const notesPerPage = 10;
    const filteredNotes = notes.filter(note =>
        note.text.toLowerCase().includes(searchText.toLowerCase()) ||
        note.title.toLowerCase().includes(searchText.toLowerCase())
    );

    const indexOfLastNote = currentPage * notesPerPage;
    const indexOfFirstNote = indexOfLastNote - notesPerPage;
    const currentNotes = filteredNotes.slice(indexOfFirstNote, indexOfLastNote);

    return (
        <div className={`${darkMode ? 'dark-mode' : ''}`}>
            <Topbar/>
            <div className='NotesContainer'>
                <Header handleToggleDarkMode={setDarkMode} />
                <Search handleSearchNote={setSearchText} />
                <NotesList
                    notes={currentNotes}
                    handleAddNote={addNote}
                    handleDeleteNote={deleteNote}
                    handleEditNote={editNote}
                />
                <Pagination
                    totalNotes={filteredNotes.length}
                    notesPerPage={notesPerPage}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                />
            </div>
        </div>
    );
};

export default NotesApp;

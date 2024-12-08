import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// Styles
import './assets/css/index.css';
import 'boxicons';

// App
import NoteApp from './components/NoteApp';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <NoteApp />
    </StrictMode>
);

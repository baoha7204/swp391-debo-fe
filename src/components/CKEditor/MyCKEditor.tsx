import { useState, useEffect, useRef } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import { DecoupledEditor, AccessibilityHelp, Autosave, Bold, Essentials, Italic, Paragraph, SelectAll, Undo } from 'ckeditor5';
import 'ckeditor5/ckeditor5.css';
import './Styles/style.css'
import { Box, Button } from '@mui/material';
import { AppointmentProp } from '../Appointment/AppointmentDetail/AppointmentNotes';
import { useParams } from 'react-router-dom';
import { API_ENDPOINTS } from '@/utils/api';
import axios from '@/config/axios';

interface MyCKEditorProps {
    onSubmit: (data: AppointmentProp) => void;
}

export default function MyCKEditor({ onSubmit }: MyCKEditorProps) {
    const editorContainerRef = useRef<HTMLDivElement | null>(null);
    const editorToolbarRef = useRef<HTMLDivElement | null>(null);
    const editorRef = useRef<HTMLDivElement | null>(null);
    const [isLayoutReady, setIsLayoutReady] = useState(false);
    const [editorData, setEditorData] = useState('');

    const { id } = useParams<{ id: string }>();
    console.log("MyCKEditor", id);

    const getNote = async () => {
        const res = await axios.get(`${API_ENDPOINTS.APPOINTMENT.DETAIL}/${id}`);
        setEditorData(res.data.data.note);
        console.log("getNote", res.data.data.note);
    }

    useEffect(() => {
        getNote();
    }, [id]);

    useEffect(() => {
        setIsLayoutReady(true);
        return () => setIsLayoutReady(false);
    }, []);

    const editorConfig = {
        toolbar: {
            items: ['undo', 'redo', '|', 'selectAll', '|', 'bold', 'italic', '|', 'accessibilityHelp'],
            shouldNotGroupWhenFull: false,
        },
        plugins: [AccessibilityHelp, Autosave, Bold, Essentials, Italic, Paragraph, SelectAll, Undo],
        initialData: editorData,
        placeholder: 'Type or paste your content here!',
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault(); // Make sure website doesn't reload
        onSubmit({ id: id, note: editorData });
    };

    return (
        <div className="main-container-CKEditor">
            <div className="editor-container editor-container_document-editor" ref={editorContainerRef}>
                <div className="editor-container__toolbar" ref={editorToolbarRef}></div>
                <div className="editor-container__editor-wrapper">
                    <div className="editor-container__editor">
                        <div ref={editorRef}>
                            {isLayoutReady && (
                                <Box
                                    component="form"
                                    onSubmit={handleSubmit}>
                                    <CKEditor
                                        onReady={(editor) => {
                                            if (editorToolbarRef.current) {
                                                editorToolbarRef.current.appendChild(editor.ui.view.toolbar.element as Node);
                                            }
                                        }}
                                        editor={DecoupledEditor}
                                        config={editorConfig}
                                        onChange={(event, editor) => {
                                            const data = editor.getData();
                                            setEditorData(data);
                                        }}
                                        data={editorData}
                                    />
                                    <Button type="submit"
                                        sx={{
                                            display: 'flex',
                                            position: 'absolute',
                                            mt: 7,
                                            backgroundColor: (theme) => theme.palette.primary.main,
                                            color: (theme) => theme.palette.primary.contrastText,
                                            '&:hover': {
                                                backgroundColor: (theme) => theme.palette.primary.dark,
                                            },
                                        }}>Submit</Button>
                                </Box>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
import { useState, useEffect, useRef, useContext } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import { DecoupledEditor, AccessibilityHelp, Autosave, Bold, Essentials, Italic, Paragraph, SelectAll, Undo } from 'ckeditor5';
import 'ckeditor5/ckeditor5.css';
import './Styles/style.css'
import { Box, Button } from '@mui/material';
import { AppointmentProp } from '../Appointment/AppointmentDetail/AppointmentNotes';
import { useParams } from 'react-router-dom';
import { API_ENDPOINTS } from '@/utils/api';
import axios from '@/config/axios';
import { UserContext } from '@/pages/User/user.context';

interface MyCKEditorProps {
    onSubmit: (data: AppointmentProp) => void;
}

export default function MyCKEditor({ onSubmit }: MyCKEditorProps) {
    const editorContainerRef = useRef<HTMLDivElement | null>(null);
    const editorToolbarRef = useRef<HTMLDivElement | null>(null);
    const editorRef = useRef<HTMLDivElement | null>(null);
    const [isLayoutReady, setIsLayoutReady] = useState(false);
    const [editorData, setEditorData] = useState<string | null>('');

    if (!isLayoutReady) {
        <div>...Loading</div>
    }

    const { id } = useParams<{ id: string }>();

    const { user } = useContext(UserContext);

    console.log("User", user);

    const getNote = async () => {
        try {
            const res = await axios.get(`${API_ENDPOINTS.APPOINTMENT.DETAIL}/${id}`);
            const data = res.data.data.note;
            if (data == null) {
                return;
            }
            setEditorData(res.data.data.note);
            console.log("getNote", res.data.data.note);
        } catch (error) {
            console.error("Failed to fetch note:", error);
        }
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
        initialData: editorData || '',
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
                                            // Set read-only mode based on user role
                                            if (user?.role === 5) {
                                                editor.isReadOnly = true;
                                            }
                                        }}
                                        editor={DecoupledEditor}
                                        config={editorConfig}
                                        onChange={(event, editor) => {
                                            // Ensure the editor remains in read-only mode if the user is a Customer
                                            if (user?.role !== 5) {
                                                const data = editor.getData();
                                                setEditorData(data);
                                            }
                                            console.log("Role", user?.role);

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
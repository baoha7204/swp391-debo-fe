import { useState, useEffect, useRef } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import { DecoupledEditor, AccessibilityHelp, Autosave, Bold, Essentials, Italic, Paragraph, SelectAll, Undo } from 'ckeditor5';
import 'ckeditor5/ckeditor5.css';
import './Styles/style.css'

interface MyCKEditorProps {
    onSubmit: (data: string) => void;
}

export default function MyCKEditor({ onSubmit }: MyCKEditorProps) {
    const editorContainerRef = useRef(null);
    const editorToolbarRef = useRef(null);
    const editorRef = useRef(null);
    const [isLayoutReady, setIsLayoutReady] = useState(false);
    const [editorData, setEditorData] = useState('');

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
        initialData:
            "<h2>Congratulations on setting up CKEditor 5! 🎉</h2>\n<p>\n\tYou've successfully created a CKEditor 5 project. This powerful text editor\n\twill enhance your application, enabling rich text editing capabilities that\n\tare customizable and easy to use.\n</p>\n<h3>What's next?</h3>\n<ol>\n\t<li>\n\t\t<strong>Integrate into your app</strong>: time to bring the editing into\n\t\tyour application. Take the code you created and add to your application.\n\t</li>\n\t<li>\n\t\t<strong>Explore features:</strong> Experiment with different plugins and\n\t\ttoolbar options to discover what works best for your needs.\n\t</li>\n\t<li>\n\t\t<strong>Customize your editor:</strong> Tailor the editor's\n\t\tconfiguration to match your application's style and requirements. Or\n\t\teven write your plugin!\n\t</li>\n</ol>\n<p>\n\tKeep experimenting, and don't hesitate to push the boundaries of what you\n\tcan achieve with CKEditor 5. Your feedback is invaluable to us as we strive\n\tto improve and evolve. Happy editing!\n</p>\n<h3>Helpful resources</h3>\n<p>\n\t<i>An editor without the </i><code>Link</code>\n\t<i>plugin? That's brave! We hope the links below will be useful anyway </i\n\t>😉\n</p>\n<ul>\n\t<li>\n\t\t📝 Trial sign up: https://orders.ckeditor.com/trial/premium-features,\n\t</li>\n\t<li>\n\t\t📕 Documentation:\n\t\thttps://ckeditor.com/docs/ckeditor5/latest/installation/index.html,\n\t</li>\n\t<li>\n\t\t⭐️ GitHub (star us if you can!): https://github.com/ckeditor/ckeditor5,\n\t</li>\n\t<li>🏠 CKEditor Homepage: https://ckeditor.com,</li>\n\t<li>🧑‍💻 CKEditor 5 Demos: https://ckeditor.com/ckeditor-5/demo/</li>\n</ul>\n<h3>Need help?</h3>\n<p>\n\tSee this text, but the editor is not starting up? Check the browser's\n\tconsole for clues and guidance. It may be related to an incorrect license\n\tkey if you use premium features or another feature-related requirement. If\n\tyou cannot make it work, file a GitHub issue, and we will help as soon as\n\tpossible!\n</p>\n",
        placeholder: 'Type or paste your content here!',
    };

    const handleSubmit = (event: any) => {
        event.preventDefault();
        onSubmit(editorData);
    };

    return (
        <div className="main-container">
            <div className="editor-container editor-container_document-editor" ref={editorContainerRef}>
                <div className="editor-container__toolbar" ref={editorToolbarRef}></div>
                <div className="editor-container__editor-wrapper">
                    <div className="editor-container__editor">
                        <div ref={editorRef}>
                            {isLayoutReady && (
                                <form onSubmit={handleSubmit}>
                                    <CKEditor
                                        onReady={(editor) => {
                                            editorToolbarRef.current.appendChild(editor.ui.view.toolbar.element);
                                        }}
                                        onAfterDestroy={() => {
                                            Array.from(editorToolbarRef.current.children).forEach((child) => child.remove());
                                        }}
                                        editor={DecoupledEditor}
                                        config={editorConfig}
                                        onChange={(event, editor) => {
                                            const data = editor.getData();
                                            setEditorData(data);
                                        }}
                                        data={editorData}
                                    />
                                    <button type="submit">Submit</button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

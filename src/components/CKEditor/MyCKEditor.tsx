import { useState, useEffect, useRef, useContext } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import {
  DecoupledEditor,
  AccessibilityHelp,
  Autosave,
  Bold,
  Essentials,
  Italic,
  Paragraph,
  SelectAll,
  Undo,
} from "ckeditor5";
import "ckeditor5/ckeditor5.css";
import "./Styles/style.css";
import { useParams } from "react-router-dom";
import { API_ENDPOINTS } from "@/utils/api";
import axios from "@/config/axios";
import { UserContext } from "@/pages/User/user.context";

interface MyCKEditorProps {
  onChange: (data: string) => void;
}

export default function MyCKEditor({ onChange }: MyCKEditorProps) {
  const editorContainerRef = useRef<HTMLDivElement | null>(null);
  const editorToolbarRef = useRef<HTMLDivElement | null>(null);
  const editorRef = useRef<HTMLDivElement | null>(null);
  const [isLayoutReady, setIsLayoutReady] = useState(false);
  const [editorData, setEditorData] = useState<string | null>("");
  const [isDataReady, setIsDataReady] = useState(false);
  const { user, isLoading: isUserLoading } = useContext(UserContext);

  const { id } = useParams<{ id: string }>();

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
    } finally {
      setIsDataReady(true);
    }
  };

  useEffect(() => {
    if (user?.id || isUserLoading) {
      getNote();
    }
  }, [id]);

  useEffect(() => {
    setIsLayoutReady(true);
    return () => setIsLayoutReady(false);
  }, []);

  if (isUserLoading || !isLayoutReady || !isDataReady) {
    return <div>...Loading</div>;
  }

  const editorConfig = {
    toolbar: {
      items: [
        "undo",
        "redo",
        "|",
        "selectAll",
        "|",
        "bold",
        "italic",
        "|",
        "accessibilityHelp",
      ],
      shouldNotGroupWhenFull: false,
    },
    plugins: [
      AccessibilityHelp,
      Autosave,
      Bold,
      Essentials,
      Italic,
      Paragraph,
      SelectAll,
      Undo,
    ],
    initialData: editorData || "",
    placeholder: "Type or paste your content here!",
  };

  return (
    <div className="main-container-CKEditor">
      <div
        className="editor-container editor-container_document-editor"
        ref={editorContainerRef}
      >
        <div className="editor-container__toolbar" ref={editorToolbarRef}></div>
        <div className="editor-container__editor-wrapper">
          <div className="editor-container__editor">
            <div ref={editorRef}>
              {isLayoutReady && (
                <CKEditor
                  onReady={(editor) => {
                    const toolbarElement = editor.ui.view.toolbar
                      .element as HTMLElement;
                    console.log("Toolbar: ", toolbarElement);

                    // Set read-only mode based on user role
                    if (user?.role === 5) {
                      console.log("User is a Customer");
                      editor.enableReadOnlyMode("readonlyMode");
                      toolbarElement.style.display = "none";
                    } else {
                      editor.disableReadOnlyMode("readonlyMode");
                      toolbarElement.style.display = "flex";
                    }
                    if (editorToolbarRef.current) {
                      editorToolbarRef.current.appendChild(toolbarElement);
                    }
                  }}
                  editor={DecoupledEditor}
                  config={editorConfig}
                  onChange={(_event, editor) => {
                    // Ensure the editor remains in read-only mode if the user is a Customer
                    if (user?.role !== 5) {
                      const data = editor.getData();
                      setEditorData(data);
                      onChange(data);
                    }
                    console.log("Role", user?.role);
                  }}
                  data={editorData}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

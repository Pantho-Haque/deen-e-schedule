import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

export default function Tiptap({des, setDes}) {
  const editor = useEditor({
    extensions: [StarterKit.configure()],
    content: des,
    editorProps: {
      attributes: {
        class: "rounded-md border min-h-[50px] border-input bg-black p-2",
        style: "caret-color: #00ffff;CaretPosition:long"
      },
    },
    onUpdate({ editor }) {
      setDes(editor.getHTML());
      console.log(editor.getHTML());
    },
  });

  return (
    <div className="flex flex-col justify-stretch min-h-[250px]">
      <EditorContent editor={editor} />
    </div>
  );
}

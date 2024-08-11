// Import necessary packages and icons
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline"; // Import underline extension
import BulletList from "@tiptap/extension-bullet-list"; // Import bullet list extension
import OrderedList from "@tiptap/extension-ordered-list"; // Import ordered list extension
import CodeBlock from "@tiptap/extension-code-block";
import Code from "@tiptap/extension-code";
import Blockquote from "@tiptap/extension-blockquote";

import { useState } from "react";

// Import icons from react-icons or another library
import {
  AiOutlineBold,
  AiOutlineItalic,
  AiOutlineUnderline,
} from "react-icons/ai";
import { BiListUl, BiListOl, BiCodeBlock } from "react-icons/bi";
import { BsCode, BsBlockquoteLeft } from "react-icons/bs";
import { MdFormatClear } from "react-icons/md";

export default function Tiptap({ des, setDes }) {
  // Initialize the editor
  const editor = useEditor({
    extensions: [
      StarterKit, // Include default formatting options
      Underline, // Include underline option
      BulletList, // Include bullet list option
      OrderedList, // Include ordered list option
      CodeBlock,
      Code,
      Blockquote,
    ],
    content: des,
    editorProps: {
      attributes: {
        class:
          "rounded-md border min-h-[150px] border-input bg-black text-white p-2 focus:outline-none",
        style: "caret-color: #00ffff;", // Customize the caret color
      },
    },
    onUpdate({ editor }) {
      setDes(editor.getHTML()); // Update state when editor content changes
      console.log(editor.getHTML());
    },
  });

  // Check if the editor is available
  if (!editor) {
    return null;
  }

  return (
    <div>
      <button
        className="btn"
        onClick={() => document.getElementById("my_modal_editor").showModal()}
      >
        open modal
      </button>
      <dialog id="my_modal_editor" className="modal modal-bottom sm:modal-middle ">
        <div className="model-box flex flex-col justify-center max-w-lg mx-auto bg-gray-900 border border-gray-500 p-8 rounded-lg">
          {/* Toolbar for text formatting */}
          <div className="flex space-x-2 mb-2 bg-gray-700 p-2 rounded-md shadow-md">
            <button
              onClick={() => editor.chain().focus().toggleBold().run()}
              className={`p-2 rounded ${
                editor.isActive("bold")
                  ? "bg-gray-900 text-blue-500"
                  : "text-white"
              }`}
              title="Bold"
            >
              <AiOutlineBold size={20} />
            </button>
            <button
              onClick={() => editor.chain().focus().toggleItalic().run()}
              className={`p-2 rounded ${
                editor.isActive("italic")
                  ? "bg-gray-900 text-blue-500"
                  : "text-white"
              }`}
              title="Italic"
            >
              <AiOutlineItalic size={20} />
            </button>
            <button
              onClick={() => editor.chain().focus().toggleUnderline().run()}
              className={`p-2 rounded ${
                editor.isActive("underline")
                  ? "bg-gray-900 text-blue-500"
                  : "text-white"
              }`}
              title="Underline"
            >
              <AiOutlineUnderline size={20} />
            </button>
            <button
              onClick={() => editor.chain().focus().toggleBulletList().run()}
              className={`p-2 rounded ${
                editor.isActive("bulletList")
                  ? "bg-gray-900 text-blue-500"
                  : "text-white"
              }`}
              title="Bullet List"
            >
              <BiListUl size={20} />
            </button>
            <button
              onClick={() => editor.chain().focus().toggleOrderedList().run()}
              className={`p-2 rounded ${
                editor.isActive("orderedList")
                  ? "bg-gray-900 text-blue-500"
                  : "text-white"
              }`}
              title="Ordered List"
            >
              <BiListOl size={20} />
            </button>
            <button
              onClick={() => editor.chain().focus().toggleCodeBlock().run()}
              className={`p-2 rounded ${
                editor.isActive("codeBlock")
                  ? "bg-gray-900 text-blue-500"
                  : "text-white"
              }`}
              title="Code Block"
            >
              <BiCodeBlock size={20} />
            </button>
            <button
              onClick={() => editor.chain().focus().toggleBlockquote().run()}
              className={`p-2 rounded ${
                editor.isActive("blockquote")
                  ? "bg-gray-900 text-blue-500"
                  : "text-white"
              }`}
              title="Blockquote"
            >
              <BsBlockquoteLeft size={20} />
            </button>
          </div>

          {/* Editor content area */}
          <EditorContent editor={editor} />
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}
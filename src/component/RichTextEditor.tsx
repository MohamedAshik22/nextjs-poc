// components/RichTextEditor.tsx
import React, { useEffect, useRef } from 'react';
import EditorJS from '@editorjs/editorjs';

const RichTextEditor: React.FC = () => {
  const editorRef = useRef<EditorJS | null>(null);

  useEffect(() => {
    if (!editorRef.current) {
      const editor = new EditorJS({
        holder: 'editorjs',
        autofocus: true,
        tools: {
          header: require('@editorjs/header'),
          list: require('@editorjs/list'),
          image: require('@editorjs/image'),
          linkTool: require('@editorjs/link'),
          embed: require('@editorjs/embed'),
        },
      });

      editorRef.current = editor;

      return () => {
        // editor.destroy();
        editorRef.current = null;
      };
    }
  }, []);

  return <div id="editorjs" className="bg-white mb-5 h-60 font-medium"></div>;
};

export default RichTextEditor;

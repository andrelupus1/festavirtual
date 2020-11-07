import dynamic from "next/dynamic";
import React, { useState, useRef, useEffect } from "react";
// import ReactQuill, { Quill, Mixin, Toolbar } from 'react-quill'; // ES6
const ReactQuill = dynamic(() => import("react-quill"), {
  ssr: false
});

export default function EditorSlate() {
  const [value, setValue] = useState("");
  const quillRef = useRef();

  useEffect(() => {
    console.log(quillRef.current);
  }, [quillRef]);

  return (
    <ReactQuill ref={quillRef} theme="snow" value={value} onChange={setValue} style={{color:'#000'}}/>
  );
}
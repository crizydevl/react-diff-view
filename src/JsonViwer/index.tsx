import React, { useEffect, useRef } from 'react'
import { EditorView, keymap } from '@codemirror/view'
import { defaultKeymap } from '@codemirror/commands'
import { diff_match_patch } from 'diff-match-patch'

const json1 = "{ \r\n a: 1,\r\n b: 2 \r\n}";
const json2 = "{a: 2, b: 2}";

export default function JsonViewer() {
  const viewRef = useRef<HTMLDivElement>(null)
  const diffViewRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (viewRef.current && diffViewRef.current) {
      const diff = new diff_match_patch();
      const diffList = diff.diff_main(json1, json2, true);
      // const diffListStr = 
      
      new EditorView({
        doc: json1,
        extensions: [
          keymap.of(defaultKeymap)
        ],
        parent: viewRef.current
      })

      new EditorView({
        doc: json2,
        extensions: [
          keymap.of(defaultKeymap)
        ],
        parent: diffViewRef.current
      })
      
      
      console.log('view ', diffList)
    }
  }, [viewRef])
  
  return (
    <div>
      <div ref={viewRef}></div>
      <div ref={diffViewRef}></div>
    </div>
  )
}

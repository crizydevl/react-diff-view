/*
 * @Description: 
 * @Author: lqx
 * @Date: 2024-10-17 10:10:14
 */
import { useEffect, useRef } from 'react'
import * as monaco from 'monaco-editor'

export interface DiffCodeEditorProps {
  oldValue: string
  newValue: string
  language?: string
  height?: number
  options?: monaco.editor.IStandaloneDiffEditorConstructionOptions
}

export default function DiffCodeEditor({
  oldValue,
  newValue,
  height = 400,
  language = 'json',
  options
}: DiffCodeEditorProps) {
  const diffEditorRef = useRef<HTMLDivElement>(null)
  const diffCodeEditor = useRef<monaco.editor.IStandaloneDiffEditor>()

  useEffect(() => {
    if (diffEditorRef.current) {
      diffCodeEditor.current = createMonacoEditor(diffEditorRef.current);
    }
  }, [diffEditorRef])

  
  useEffect(() => {
    if (diffCodeEditor.current) {
      diffCodeEditor.current.setModel({
        original: createMonacoEditorModel(oldValue, language),
        modified: createMonacoEditorModel(newValue, language)
      })
    }
  }, [oldValue, newValue])

  function createMonacoEditorModel(value: string, language: DiffCodeEditorProps['language']) {
    return monaco.editor.createModel(value, language)
  }
  
  function createMonacoEditor(dom: HTMLDivElement) {
    
    const diffEditor = monaco.editor.createDiffEditor(dom, {
      ...options,
      readOnly: true,
      automaticLayout: true
    })

    return diffEditor
  }
  
  return <div className='diff-editor' ref={diffEditorRef} style={{height}}></div>
}

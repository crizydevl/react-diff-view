export interface DiffCodeEditorProps {
    oldValue: string;
    newValue: string;
    language?: string;
    height?: number;
}
export default function DiffCodeEditor({ oldValue, newValue, height, language }: DiffCodeEditorProps): import("react/jsx-runtime").JSX.Element;

# react-code-editor react 代码编辑器


### 1. 安装

```
pnpm install react-code-editor

npm install react-code-editor

```

### 2. 使用

```
import { DiffCodeEditor } from 'react-code-editor

function Demo() {
  const newValue = '{ a: 1 }';
  const oldValue = '{ a: 2 }';

  return <DiffCodeEditor newValue={newValue} oldValue={oldValue} language="json" height={500} />
}

```
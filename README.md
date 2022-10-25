# react-structure

React.js のディレクトリ構造検討

## ディレクトリ構造

```
├── components
│   ├── parts
│   └── templates
├── features
│   └── users
│       ├── EditUser
│       │   ├── EditUserContainer.tsx
│       │   ├── EditUserPresentation.tsx
│       │   └── index.ts
│       ├── DetailUser
│       ├── Users
│       ├── Components
│       └── type.ts
├── layouts
├── pages
└── styles
```

### components

再利用可能なコンポーネントの一覧となるディレクトリ。

parts・・・UI を構成する最小部品コンポーネント。最も再利用性が高い。(atomic design で言うと atoms)
templates・・・parts または template を組み合わせたコンポーネント。(atomic design で言うと molecules)

各コンポーネント内でテストや Storybook などを用いてコンポーネントの品質を担保する責務を持つ。

### features

各機能別にコンポーネント、ロジック、型などを管理するディレクトリ。
理想としては機能がドロップしたときにディレクトリを削除するだけで完結することが望ましい。

```
├── features
│   └── users
│       ├── EditUser
│       │   ├── EditUserContainer.tsx
│       │   ├── EditUserPresentation.tsx
│       │   └── index.ts
│       ├── DetailUser
│       ├── Users
│       ├── Components
│       └── type.t
```

#### 第一階層

features ディレクトリ直下には機能名称となるディレクトリを作成する。
だいたいのケースでは URL の 2 階層目に来る名称がこれに当たることが多い。

ex) users, clients, authentication など

#### 第二階層

第二階層は細かく機能別にディレクトリを作成する。基本的には Page から呼ばれるコンポーネントが並ぶことになるため、画面構成と同じものが作られる。

```
│       ├── EditUser
│       ├── DetailUser
│       ├── Users
│       ├── Components
│       └── type.t
```

またその他にも機能間で共通の型や機能内でのみ共有するコンポーネントなども管理する。

#### 第 3 階層

各機能は基本的にコンテナ・プレゼンテーションパターンを導入する。
https://zenn.dev/morinokami/books/learning-patterns-1/viewer/presentational-container-pattern

```
├── features
│   └── users
│       ├── EditUser
│       │   ├── EditUserContainer.tsx
│       │   ├── EditUserPresentation.tsx
│       │   └── index.ts
```

API 通信を伴うものやデータの扱いはコンテナで行い、画面の構成やフォームのバリデーションなどの処理はプレゼンテーション側で責務を持つ。

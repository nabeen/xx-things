# イントロダクション

[Angular](https://angular.io/)を使ったデモプロジェクトを作成する上で得た知見をまとめていきます。

## 前提条件

`npm`、`node`がインストールされていること(※verは執筆時点最新版)

```bash
$ npm -v
4.2.0
$ node -v
v7.10.0
```

## Angular CLI

Angularには、強力なCLIツールが用意されているので、以降、CLIツールを利用した開発を行っていきます(※verは執筆時点最新版)

```bash
$ npm install -g @angular/cli
$ ng version
@angular/cli: 1.0.6
```

## 新規プロジェクトの作成

```bash
$ ng new app-name
# ごにょごにょ
```

※本プロジェクトでは`app-name`を`xx-things`として作成しているので、以降適宜読み替えること。

## 各種コマンド

- `ng start`:サーバー起動
- `ng build`:ビルド
- `ng test`:単体テスト
- `ng lint`:Lintチェック
- `ng e2e`:E2Eテスト

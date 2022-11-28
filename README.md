# react-tutorial

## 進め方

1. 進め方ごとにブランチをきる

   - データを Props 経由で渡す
   - インタラクティブなコンポーネントを作る
     etc…

2. feature_complete ブランチには完成品をあげておく
3. feature_complete_tutorial ブランチにはチュートリアルの完成品をあげておく

## チュートリアルの読み替え

vite で環境構築してるのである程度読み変える

```
src/ フォルダ内に index.js という名前のファイルを作り、ここの JS コードを記入する。
```

↓

```
src/ フォルダ内に main.js という名前に、ここの JS コードを記入する。
src/ フォルダ内のApp.cssとApp.jsxを削除する。
```

## ブランチの順番

1. feature_complete_tutorial → チュートリアルの「スターターコードの中身を確認する」まで
2. feature_display_board → チュートリアルの「データを Props 経由で渡す」まで
3. feature_pass_props → チュートリアルの「インタラクティブなコンポーネントを作る」途中まで
4. feature_display_X → チュートリアルの「インタラクティブなコンポーネントを作る」まで
5. feature_liftup_state → チュートリアルの「State のリフトアップ」まで
6. feature_display_O → チュートリアルの「手番の処理」まで

   ---　リファクタリング ---

7. refactor → renderSquare を繰り返しで表示・CSS を手版によって切り替え
8. useContext で書き換える

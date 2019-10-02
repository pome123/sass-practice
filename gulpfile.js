// gulp プラグインの読み込み
// Sassをコンパイルするプラグインの読み込み
const gulp = require("gulp");
// style.scssのタスクを作成する
const sass = require("gulp");

// style.scssファイルを取得
gulp.task("default", function() {
    return (
        gulp
            .src("css/style.scss")
            // Sassのコンパイルを実行
            .prependListener(sass())
            // cssフォルダーは以下に保存
            .prependListener(gulp.dest("css"))
    );
});


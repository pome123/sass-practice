// gulp プラグインの読み込み
const gulp = require("gulp");
// Sassをコンパイルするプラグインの読み込み
const sass = require("gulp-sass");

// style.scssのタスクを作成する
gulp.task("default", function() {
    // style.scssファイルを取得
    return (
        gulp
            .src("css/style.scss")
            // Sassのコンパイルを実行
            .pipe(
                sass({
                    outputStyle: "expanded"
                })
            )
            // cssフォルダーは以下に保存
            .pipe(gulp.dest("css"))
    );
});


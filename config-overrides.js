const { override , useBabelRc } = require("customize-cra");

module.exports = override(
    // enable legacy decorators babel plugin
    // Lấy cấu hình của webpack và chạy cấu hình
    useBabelRc()
);
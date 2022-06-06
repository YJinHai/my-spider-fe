import {defineConfig} from 'vite'
import path from "path";
// vite.config.js
import vue from '@vitejs/plugin-vue'

// export default defineConfig(({ command, mode }) => {
//     // 根据当前工作目录中的 `mode` 加载 .env 文件
//     const env = loadEnv(mode, process.cwd())
//     return {
//         plugins: [vue()],
//         resolve: {
//             alias: {// 配置路径别名
//                 '/@/': path.resolve(__dirname, './src'),
//                 'view': path.resolve(__dirname, 'src/view'),
//                 'com': path.resolve(__dirname, 'src/components'),
//                 'api': path.resolve(__dirname, 'src/api'),
//                 'utils': path.resolve(__dirname, 'src/utils'),
//             }
//         },
//
//         server: {
//             hostname: '127.0.0.1', // 默认是 localhost
//             port: '8002', // 默认是 3000 端口
//             open: false, // 浏览器自动打开
//             https: false, // 是否开启 https
//             ssr: false, // 服务端渲染
//             base: './', // 生产环境下的公共路径
//             outDir: 'dist', // 打包构建输出路径，默认 dist ，如果路径存在，构建之前会被删除
//             proxy: { // 本地开发环境通过代理实现跨域，生产环境使用 nginx 转发
//                 '/api': {
//                     target: 'http://127.0.0.1:9089', // 后端服务实际地址
//                     changeOrigin: true,
//                     secure: false,
//                     rewrite: (path) => path.replace(/^\/api/, '')
//                 }
//             }
//         }
//
//
//     }
// })
export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {// 配置路径别名
            '@': path.resolve(__dirname, 'src'),
        }
    },

    server: {
        hostname: '127.0.0.1', // 默认是 localhost
        port: '8002', // 默认是 3000 端口
        open: false, // 浏览器自动打开
        https: false, // 是否开启 https
        ssr: false, // 服务端渲染
        base: './', // 生产环境下的公共路径
        outDir: 'dist', // 打包构建输出路径，默认 dist ，如果路径存在，构建之前会被删除
        proxy: { // 本地开发环境通过代理实现跨域，生产环境使用 nginx 转发
            '/api': {
                target: 'http://127.0.0.1:9089', // 后端服务实际地址
                changeOrigin: true,
                // secure: false,
                rewrite: (path) => path.replace(/^\/api/, '/api')
            }
        }
    }


})

const Koa = require('koa');
const Router = require('koa-router');
const cors = require('@koa/cors');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const { StaticRouter } = require('react-router-dom/server');
const { matchRoutes, RouterProvider } = require('react-router-dom'); // 确保正确导入 matchRoutes 和 RouterProvider 方法
const App = require('../src/App').default; // 更新路径以指向打包后的文件
const routes = require('../src/routes').default; // 更新路径以指向打包后的文件
const serve = require('koa-static');
const path = require('path');
const fs = require('fs');
const css = fs.readFileSync(path.resolve(__dirname, '../dist/index.css'), 'utf8'); // 读取打包后的 CSS 文件内容

const app = new Koa();
const router = new Router();

// 读取 JSON 文件的函数
const readJsonFile = (filePath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(JSON.parse(data));
      }
    });
  });
};

// GET 请求商品数据接口
router.post("/api/goods/data/get", async (ctx) => {
  try {
    const data = await readJsonFile(path.resolve(__dirname, 'goods.json'));
    ctx.body = {
      code: 200,
      message: "success",
      result: data,
    };
  } catch (err) {
    console.error('Error reading JSON:', err);
    ctx.status = 500;
    ctx.body = { error: 'Failed to read JSON file' };
  }
});

router.get('/', async (ctx) => {
  try {
    console.log('Rendering for URL:', ctx.url);

    // 匹配当前请求的路由
    const matches = matchRoutes(routes, ctx.url);

    if (!matches || matches.length === 0) {
      ctx.status = 404;
      ctx.body = 'Not Found';
      return;
    }
    console.log('matches=====:', matches);
    // 获取匹配路由的 loader 方法
    const loaders = matches.filter(({ route }) => route.loader).
      map(({ route }) => {
        return route.loader ? route.loader() : Promise.resolve(null);
      });

    // 等待所有数据获取完成
    const data = await Promise.all(loaders);

    console.log('Data fetched:', data);

    const html = ReactDOMServer.renderToString(
      <StaticRouter location={ctx.url} context={{}}>
        {/* <RouterProvider router={routes}> */}
        <App initialData={data[0]} />
        {/* </RouterProvider> */}
      </StaticRouter>
    );

    console.log('Rendered HTML:', html);
    ctx.body = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>React SSR with Koa</title>
          <style>${css}</style> <!-- 将 CSS 内容注入到 HTML 中 -->
          <script defer src="/bundle.js"></script>
          <script>
            window.__INITIAL_DATA__ = ${JSON.stringify(data)};
          </script>
        </head>
        <body>
          <div id="root">${html}</div>
        </body>
      </html>
    `;
  } catch (error) {
    console.error('Error during rendering:', error);
    ctx.status = 500;
    ctx.body = 'Internal Server Error';
  }
});

app.use(cors());
app.use(serve(path.resolve(__dirname, '../dist')));
app.use(router.routes()).use(router.allowedMethods());

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
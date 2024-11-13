// const Koa = require('koa');
// const Router = require('koa-router');
// const cors = require('@koa/cors');
// const React = require('react');
// const ReactDOMServer = require('react-dom/server');
// const { StaticRouter, matchPath } = require('react-router');
// const { matchRoutes } = require('react-router-config'); // 确保正确导入 matchRoutes 和 RouterProvider 方法
// const App = require('../src/App').default; // 更新路径以指向打包后的文件
// const routes = require('../src/routes').default; // 更新路径以指向打包后的文件
// const serve = require('koa-static');
// const path = require('path');
// const mount = require('koa-mount');
// const fs = require('fs');
// const css = fs.readFileSync(path.resolve(__dirname, '../dist/index.css'), 'utf8'); // 读取打包后的 CSS 文件内容

// const app = new Koa();
// const router = new Router();

// // 读取 JSON 文件的函数
// const readJsonFile = (filePath) => {
//   return new Promise((resolve, reject) => {
//     fs.readFile(filePath, 'utf8', (err, data) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(JSON.parse(data));
//       }
//     });
//   });
// };

// // GET 请求商品数据接口
// router.post("/api/goods/data/get", async (ctx) => {
//   try {
//     const data = await readJsonFile(path.resolve(__dirname, 'goods.json'));
//     ctx.body = {
//       code: 200,
//       message: "success",
//       result: data,
//     };
//   } catch (err) {
//     console.error('Error reading JSON:', err);
//     ctx.status = 500;
//     ctx.body = { error: 'Failed to read JSON file' };
//   }
// });

// // GET 请求商品详情数据接口
// router.post("/api/goodDetail/:id", async (ctx) => {
//   const id = ctx.params.id;
//   //id如果是偶数，加载detail1.json，如果是奇数，加载detail2.json
//   const fileId = parseInt(id) % 2 === 0 ? `01` : `02`;
//   console.log('fileId:', fileId);
//   try {
//     const data = await readJsonFile(path.resolve(__dirname, `detail${fileId}.json`));
//     console.log(' detail data====:', data);
//     ctx.body = {
//       code: 200,
//       message: "success",
//       result: data,
//     };
//   } catch (err) {
//     console.error('Error reading JSON:', err);
//     ctx.status = 500;
//     ctx.body = { error: 'Failed to read JSON file' };
//   }
// });

// // 挂载静态资源路径
// app.use(mount('/static', serve(path.resolve(__dirname, '../dist'))));

// router.get(/(.*)/, async (ctx) => {
//   // router.get('/', async (ctx) => {
//   try {
//     console.log('Rendering for URL:', ctx.url);

//     let fetchResult = null;
//     let tdk = {//tdk 默认值
//       title: '默认标题 - my react ssr',
//       keywords: '默认关键词',
//       description: '默认描述'
//     };

//     // 匹配当前请求的路由
//     let matchedRoute = null;
//     let matchParams = null;

//     for (const route of routes) {
//       const match = matchPath(ctx.url, {
//         path: route.path,
//         exact: true,
//         strict: false
//       });

//       if (match) {
//         matchedRoute = route;
//         matchParams = match.params;
//         break;
//       }
//     }

//     if (!matchedRoute) {
//       ctx.status = 404;
//       ctx.body = 'Not Found';
//       return;
//     }

//     console.log('Matched route:', matchedRoute);

//     if (matchedRoute.component && matchedRoute.component.getInitialProps) {
//       console.log('Fetching data for', matchedRoute, matchedRoute.component);
//       fetchResult = await matchedRoute.component.getInitialProps({ match: { params: matchParams } });

//     }


//     //将预取数据在这里传递过去 组内通过props.staticContext获取
//     const context = {
//       initialData: fetchResult
//     };

//     console.log('Data fetched:', context);

//     const html = ReactDOMServer.renderToString(
//       <StaticRouter location={ctx.url} context={context}>
//         <App />
//       </StaticRouter>
//     );

//     console.log('Rendered HTML:', html);
//     ctx.body = `
//       <!DOCTYPE html>
//       <html>
//         <head>
//           <title>React SSR with Koa</title>
//           <style>${css}</style> <!-- 将 CSS 内容注入到 HTML 中 -->
//           <script defer src="/static/bundle.js"></script>
//           <script>
//             window.__INITIAL_DATA__ = ${JSON.stringify(fetchResult)};
//           </script>
//         </head>
//         <body>
//           <div id="root">${html}</div>
//         </body>
//       </html>
//       <script>
//       window.__IS__SSR__=true;
//       </script>
//     `;
//   } catch (error) {
//     console.error('Error during rendering:', error);
//     ctx.status = 500;
//     ctx.body = 'Internal Server Error';
//   }
// });

// app.use(cors());
// app.use(router.routes()).use(router.allowedMethods());
// // app.use(serve(path.resolve(__dirname, '../dist')));

// app.listen(3000, () => {
//   console.log('Server is running on http://localhost:3000');
// });

const Koa = require('koa');
const Router = require('koa-router');
const cors = require('@koa/cors');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const { StaticRouter, matchPath } = require('react-router');
const { matchRoutes } = require('react-router-config');
const App = require('../src/App').default;
const routes = require('../src/routes').default;
const serve = require('koa-static');
const path = require('path');
const mount = require('koa-mount');
const fs = require('fs');
const css = fs.readFileSync(path.resolve(__dirname, '../dist/index.css'), 'utf8');

const app = new Koa();
const router = new Router();

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

router.post("/api/goodDetail/:id", async (ctx) => {
  const id = ctx.params.id;
  const fileId = parseInt(id) % 2 === 0 ? `01` : `02`;
  console.log('fileId:', fileId);
  try {
    const data = await readJsonFile(path.resolve(__dirname, `detail${fileId}.json`));
    console.log(' detail data====:', data);
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

app.use(mount('/static', serve(path.resolve(__dirname, '../dist'))));

router.get(/(.*)/, async (ctx) => {
  try {
    console.log('Rendering for URL:', ctx.url);

    let fetchResult = null;
    let tdk = {
      title: '默认标题 - my react ssr',
      keywords: '默认关键词',
      description: '默认描述'
    };

    let matchedRoute = null;
    let matchParams = null;

    for (const route of routes) {
      const match = matchPath(ctx.url, {
        path: route.path,
        exact: true,
        strict: false
      });

      if (match) {
        matchedRoute = route;
        matchParams = match.params;
        break;
      }
    }

    if (!matchedRoute) {
      ctx.status = 404;
      ctx.body = 'Not Found';
      return;
    }

    console.log('Matched route:', matchedRoute);

    if (matchedRoute.component && matchedRoute.component.getInitialProps) {
      console.log('Fetching data for', matchedRoute, matchedRoute.component);
      fetchResult = await matchedRoute.component.getInitialProps({ match: { params: matchParams } });
    }

    const context = {
      initialData: fetchResult
    };

    console.log('Data fetched:', context);

    const html = ReactDOMServer.renderToString(
      <StaticRouter location={ctx.url} context={context}>
        <App />
      </StaticRouter>
    );

    console.log('Rendered HTML:', html);
    ctx.body = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>React SSR with Koa</title>
          <style>${css}</style>
          <script defer src="/static/bundle.js"></script>
          <script>
            window.__INITIAL_DATA__ = ${JSON.stringify(fetchResult)};
          </script>
        </head>
        <body>
          <div id="root">${html}</div>
        </body>
      </html>
      <script>
      window.__IS__SSR__=true;
      window._CILENT_FETCHED_=false;
      </script>
    `;
  } catch (error) {
    console.error('Error during rendering:', error);
    ctx.status = 500;
    ctx.body = 'Internal Server Error';
  }
});

app.use(cors());
app.use(router.routes()).use(router.allowedMethods());

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
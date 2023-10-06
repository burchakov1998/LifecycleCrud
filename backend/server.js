const http = require("http");
const Koa = require("koa");
const koaBody = require("koa-body");
const cors = require("@koa/cors");
const Router = require("koa-router");
const router = new Router();

const NotesConstructor = require("./src/Notes/NotesConstructor");
const notesCstr = new NotesConstructor();
notesCstr.getStartedNotes();

const app = new Koa();
const PORT = process.env.PORT || 7070;
const server = http.createServer(app.callback());

app.use(cors());

app.use(koaBody({ text: true, urlencoded: true, json: true, multipart: true }));

app.use(async (ctx, next) => {
  const origin = ctx.request.get("Origin");
  if (!origin) {
    return await next();
  }

  const headers = { "Access-Control-Allow-Origin": "*" }; //сервер может быть вызван из любого источника
  if (ctx.request.method !== "OPTIONS") {
    ctx.response.set({ ...headers });
    try {
      return await next();
    } catch (e) {
      e.headers = { ...e.headers, ...headers };
      throw e;
    }
  }
  if (ctx.request.get("Access-Control-Request-Method")) {
    ctx.response.set({
      ...headers,
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH",
    });
    if (ctx.request.get("Access-Control-Request-Headers")) {
      ctx.response.set(
        "Access-Control-Allow-Headers",
        ctx.request.get("Access-Control-Allow-Request-Headers")
      );
    }
    ctx.response.status = 204; // No content
  }
});

app.use(async (ctx) => {
  const { method, id } = ctx.request.query;

  switch (method) {
 
    case "getStartedNotes":
      try {
        const result = notesCstr.getStartedNotes(); //test
        console.log(result, "start");
        ctx.response.body = result;
        return;
      } catch (err) {
        console.error(err);
      }

    case "createNotes":
      try {
        const object = ctx.request.body;

        ctx.response.body = notesCstr.createNote(object);
      } catch (err) {
        console.error(err);
      }
      return;

    case "getAllNotes":
      try {
        ctx.response.body = notesCstr.allNotes();
        console.log(ctx.response.body, "getAllNotes");
      } catch (err) {
        console.error(err);
      }
      return;

    case "deleteNote":
      try {
        ctx.response.body = notesCstr.deleteNote(id);
      } catch (err) {
        console.error(err);
      }
      return;

    default:
      ctx.response.body = `Method "${method}" is not known.`;
      ctx.response.status = 404;
      return;
  }
});

server.listen(PORT, () =>
  console.log(`Koa server has been started on port ${PORT} ...`)
);

/*app.listen(PORT, () =>
  console.log(`Koa server has been started on port ${PORT} ...`)
);*/

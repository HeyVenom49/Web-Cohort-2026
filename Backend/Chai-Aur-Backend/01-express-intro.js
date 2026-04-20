import express from "express";

function block_1_basicServer() {
  return new Promise((resolve) => {
    const app = express();
    app.use(express.json()); // use hum middleware ke liye karte hai

    app.get("/menu", (_, res) => {
      res.json({
        items: [
          "thali",
          "biryani",
          "palak paneer",
          "shahi paneer",
          "roti aur aaloo bhujiya",
        ],
      });
    });

    app.get("/search", (req, res) => {
      const { q, limit } = req.query;
      res.json({
        query: q,
        limit: Number(limit) | "10",
      });
    });

    app.get("/menu/:id", (req, res) => {
      //? isko route/path param bolte hai
      const { id } = req.params;
      res.json({
        item: id,
        price: 249,
      });
    });

    app.post("/order", (req, res) => {
      const order = req.body;
      res.status(201).json({
        status: "Order received",
        order,
      });
    });

    const server = app.listen(0, async () => {
      const port = server.address().port;
      const baseUrl = `http://127.0.0.1:${port}`;

      try {
        const menuRes = await fetch(`${baseUrl}/menu`);
        const menuData = await menuRes.json();

        console.log("GET /menu", JSON.stringify(menuData));
        console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++");

        const searchRes = await fetch(`${baseUrl}/search?q=biryani&limit=5`);
        const searchData = await searchRes.json();

        console.log("GET /search", JSON.stringify(searchData));
        console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++");

        const menuItemRes = await fetch(`${baseUrl}/menu/42`);
        const menuItemData = await menuItemRes.json();

        console.log("GET /menu/:id", JSON.stringify(menuItemData));
        console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++");

        const orderRes = await fetch(`${baseUrl}/order`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            dish: "hyderabadi biryani",
            quantity: 2,
          }),
        });

        const orderData = await orderRes.json();
        console.log("POST /order", orderData);
      } catch (error) {
        console.log(error);
      }
      server.close(() => {
        console.log("Block 1 served....");
        resolve();
      });
    });
  });
}

function block_2_basicResponse() {
  return new Promise((resolve) => {
    const app = express();

    app.get("/text", (_, res) => {
      res.send("Hello from chaicode");
    });

    app.get("/json", (_, res) => {
      res.json({
        framework: "express",
        version: "7.4.2",
      });
    });

    app.get("/not-found", (_, res) => {
      res.status(404).json({
        error: "Page not found",
      });
    });

    app.get("/health", (_, res) => {
      res.sendStatus(200);
    });

    app.get("/old-menu", (_, res) => {
      //? add entry to see how many users are still visiting old route
      res.redirect(301, "/new-menu");
    });

    app.get("/xml", (_, res) => {
      res
        .type("application/xml")
        .send("<dish><name>Chicken curry</name></dish>");
    });

    app.get("/custom-header", (_, res) => {
      res.set("X-Sponser-By", "ChaiAurCode");
      res.set("X-Request-ID", "1232313");
      res.json({
        message: "Custom header",
      });
    });

    app.get("/no-content", (_, res) => {
      res.status(204).end();
    });

    const server = app.listen(0, async () => {
      const port = server.address().port;
      const baseUrl = `http://127.0.0.1:${port}`;
      try {
        const textRes = await fetch(`${baseUrl}/text`);
        const textData = await textRes.text();
        console.log("GET /text", JSON.stringify(textData));
      } catch (error) {
        console.log(error);
      }

      server.close(() => {
        console.log("Block 2 responsed");
        resolve();
      });
    });
  });
}

async function main() {
  await block_1_basicServer();
  await block_2_basicResponse();

  process.exit(0);
}

main();

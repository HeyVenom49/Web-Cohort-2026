import express from "express";

function block_1_httpMethods() {
  return new Promise((resolve) => {
    const app = express();
    app.use(express.json()); // use hum middleware ke liye karte hai

    const routes = {
      1: {
        id: 1,
        name: "Kathihar-Amritsar Express",
        direction: "North",
        stops: ["Katihar", "Patna", "Varanasi", "Lucknow", "Delhi", "Amritsar"],
        active: true,
      },
      2: {
        id: 2,
        name: "Mumbai-Delhi Rajdhani",
        direction: "North",
        stops: ["Mumbai", "Vadodara", "Kota", "Delhi"],
        active: true,
      },
      3: {
        id: 3,
        name: "Chennai-Bangalore Shatabdi",
        direction: "West",
        stops: ["Chennai", "Katpadi", "Bangalore"],
        active: true,
      },
      4: {
        id: 4,
        name: "Howrah-Guwahati Express",
        direction: "East",
        stops: ["Howrah", "Malda", "New Jalpaiguri", "Guwahati"],
        active: false,
      },
      5: {
        id: 5,
        name: "Jaipur-Udaipur Intercity",
        direction: "South",
        stops: ["Jaipur", "Ajmer", "Chittorgarh", "Udaipur"],
        active: true,
      },
    };

    let nextID = 6;

    // list all trains

    app.get("/routes", (_, res) => {
      res.json(Object.values(routes));
    });

    app.get("/routes/:id", (req, res) => {
      const { id } = req.params;
      const route = routes[id];
      if (!route) res.redirect(302, "/not-found");
      res.json(route);
    });

    app.post("/routes", (req, res) => {
      //no validation, no zod
      const newRoutes = { id: nextID++, ...req.body };
      routes[newRoutes[id]] = newRoutes;
      res.status(201).json(newRoutes);
    });

    app.put("/routes/:id", (req, res) => {
      const id = req.params.id;
      if (!routes[id])
        return res.status(404).json({
          message:
            "Something went wrong nahi bhejna tha bhai backend wale ki galti nahi hai",
        });

      routes[id] = { id: Number(id), ...req.body };
    });

    app.patch("/routes/:id", (req, res) => {
      const id = req.params.id;
      if (!routes[id])
        return res.status(404).json({
          message:
            "Something went wrong nahi bhejna tha bhai backend wale ki galti nahi hai",
        });

      routes[id] = { ...routes[id], ...req.body };

      res.status(200).json({
        message: "Data has been patched",
        data: routes[id],
      });
    });

    app.delete("/routes/:id", (req, res) => {
      const id = req.params.id;
      if (!routes[id])
        return res.status(404).json({
          message:
            "Something went wrong nahi bhejna tha bhai backend wale ki galti nahi hai",
        });
      delete routes[id];
      res.status(204).end();
    });

    const server = app.listen(0, async () => {
      const port = server.address().port;
      const baseUrl = `http://127.0.0.1:${port}`;

      try {
        const listRes = await fetch(`${baseUrl}/routes`);
        const listData = await listRes.json();
        console.log("GET /routes", JSON.stringify(listData));

        console.log("+++++++++++++++++++++++++++++++++++++++++++");

        const createRes = await fetch(`${baseUrl}/routes`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: 6,
            name: "Delhi-Jaipur Express",
            direction: "West",
            stops: ["Delhi", "Gurgaon", "Rewari", "Jaipur"],
            active: true,
          }),
        });
        const createData = await createRes.json();
        console.log("POST /routes", createData);
        console.log("+++++++++++++++++++++++++++++++++++++++++++");
      } catch (error) {}
      server.close(() => {
        console.log("Block 1 served....");
        resolve();
      });
    });
  });
}

function block_1_httpMethods() {
  return new Promise((resolve) => {
    const app = express();
    app.use(express.json());

    app.get("/files/*filepath", (req, res) => {
      const filepath = req.params.filepath;
      res.json({ filepath, type: "Wildcard" });
    });

    app
      .route("/schedule")
      .get((req, res) => {})
      .post((req, res) => {})
      .patch((req, res) => {})
      .delete((req, res) => {});

    app.use("/api", (req, res) => {
      // it's prefetch match
    });

    const server = app.listen(0, async () => {
      const port = server.address().port;
      const baseUrl = `http://127.0.0.1:${port}`;

      try {
      } catch (error) {}
      server.close(() => {
        console.log("Block 1 served....");
        resolve();
      });
    });
  });
}
async function main() {
  await block_1_httpMethods();

  process.exit(0);
}

main();

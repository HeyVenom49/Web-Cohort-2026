import express from "express";

function block_1_httpMethods() {
  return new Promise((resolve) => {
    const app = express();
    const logs = [];
    app.use(express.json()); // use hum middleware ke liye karte hai

    // request logger
    app.use((req, res, next) => {
      const logEntry = `${req.method} : ${req.url}`;
      logs.push(logEntry);
      console.log(`[LOG] --> ${logEntry}`);

      // if your request hangs forever means humne next() nahi dala hoga
      next();
    });

    app.use((req, res, next) => {
      req.startTime = Date.now();

      res.on("finish", () => {
        const duration = Date.now() - req.startTime;
        console.log(
          `[Timer] --> ${req.method} - ${req.url} took ${duration} ms`,
        );
      });
    });

    function authMe(req, res, next) {
      const token = req.headers["x-auth-token"];

      if (!token) {
        return res.status(401).json({ error: "No Token, please login" });
      }

      if (token !== "secret-chaicode") {
        return res.status(403).json({ error: "Bhai tu hai kon" });
      }

      req.user = { id: 1, name: "Demo", role: "admin" };
      next();
    }

    function getRole(role) {
      return (req, res, next) => {
        if (!req.user || req.user.role !== role)
          return res.status(403).json({ error: "Bhai tu exist hi nahi karta" });
        next();
      };
    }

    app.get("/profile", authMe, () => {});

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

async function main() {
  await block_1_httpMethods();

  process.exit(0);
}

main();

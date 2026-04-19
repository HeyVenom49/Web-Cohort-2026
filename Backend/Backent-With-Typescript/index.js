import http from "http";

http.createServer((req, res) => {
  if (req.method === "GET" && req.url === "/menu") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({
        items: ["thali", "biryani", "palak paneer", "shahi paneer"],
      }),
    );
  } else if (req.method === "POST" && req.url === "/order") {
    let data;
    req.on("data", (chuck) => (data += chuck));
    res.on("end", () => {
      const order = JSON.parse(data);
      res.writable(201, { "Content-Type": "application/json" });
      res.end(
        JSON.stringify({
          status: 201,
          orderData: order,
        }),
      );
    });
  }
});

export default async function handler(req, res) {
  const { movieName } = req.query;
  const response = await fetch(
    `https://www.omdbapi.com/?t=${movieName}&apiKey=${process.env.API_KEY}`
  );
  const data = await response.json();
  res.json(data);
}

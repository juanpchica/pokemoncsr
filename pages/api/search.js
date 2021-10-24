import pokemon from "../../pokemon.json";

export default (req, res) => {
  const filter = req.query.q ? new RegExp(req.query.q, "i") : /.*/;

  res.setHeader("Content-Type", "application/json");

  return res
    .status(200)
    .json(
      pokemon
        .filter(({ name: { english } }) => english.match(filter))
        .slice(0, 5)
    );
};

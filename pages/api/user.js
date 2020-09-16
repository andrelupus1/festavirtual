// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  res.statusCode = 200;
  res.json([
    {
      id: 1,
      name: "André Lopes",
      email: "andre@email.com",
      senha: "nninwuchwchdddeewd8890s",
    },
    {
      id: 2,
      name: "Samuel Lopes",
      email: "samuel@email.com",
      senha: "nninddddddffd8890seee",
    },
    {
      id: 3,
      name: "Benjamin Lopes",
      email: "benjamin@email.com",
      senha: "nhfdddhwfffd88eeee90s",
    },
    {
      id: 4,
      name: "Gabriel Lopes",
      email: "gabriel@email.com",
      senha: "nninwuchwfffd8eeee890s",
    },
    {
      id: 5,
      name: "Patrícia Lopes",
      email: "patricia@email.com",
      senha: "nninwuchwfffd8eeee890s",
    },
  ]);
};

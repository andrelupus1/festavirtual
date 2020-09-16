// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  res.statusCode = 200;
  res.json([
    {
      id: 1,
      title: "Título 1",
      content: "Conteúdo do posts 1",
    },
    {
      id: 2,
      title: "Título 2",
      content: "Conteúdo do posts 2",
    },
    {
      id: 3,
      title: "Título 3",
      content: "Conteúdo do posts 3",
    },
    {
      id: 4,
      title: "Título 4",
      content: "Conteúdo do posts 4",
    },
    {
      id: 5,
      title: "Título 5",
      content: "Conteúdo do posts 5",
    },
    {
      id: 6,
      title: "Título 6",
      content: "Conteúdo do posts 6",
    },
  ]);
};

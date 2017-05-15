// getNotesList api
const getNotesList = () => Promise.resolve([
  { id: 1, title: 'Hello～' },
  { id: 2, title: 'hi～' },
]);

// getComments api
const getComments = () => Promise.resolve([
  { id: 1, comment: 'Hi～' },
  { id: 2, comment: 'Hello～' },
]);

exports.list = async (ctx) => {
  const list = await ctx.proxy({
    notes: { source: getNotesList() },
    comments: { source: getComments() },
  });
  ctx.body = {
    code: 200,
    data: list,
  };
};

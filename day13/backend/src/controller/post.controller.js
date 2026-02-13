const Imagekit = require("imagekit");
const { toFile } = require("imagekit");

const imagekit = new Imagekit({
  privateKey: process.env.IMAGEKIT_KEY,
  publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
  urlEndpoint: process.env.URLENDPOINT_KEY,
});

async function createPostController(req, res) {
  const file = await imagekit.files.upload({
    file: await toFile(Buffer.from(req.file.buffer), "file"),
    fileName: "Test",
  });

  res.send(file);
}

module.exports = {
  createPostController,
};

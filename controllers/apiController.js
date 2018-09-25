exports.image = (req, res) => {
  const image = {
    fileName: 'image.png',
    fileType: 'png',
    filePath: 'public/images/sept2018/image.png',
    dateCreated: 'September 24th 2018, 5:47:19 pm'
  };
  res.json(image);
};

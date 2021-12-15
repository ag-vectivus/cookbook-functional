const getVideoId = (videoURI: string): string => {
  //eslint-disable-next-line
  const videoId: string = videoURI.match(/[\w\d\-]{11}/)!.toString();
  return videoId;
};

export default getVideoId;

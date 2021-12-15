import getVideoId from '../../service/getVideoId';

test('get id from the youtube video URI', () => {
  const ytVideo: string = 'https://www.youtube.com/watch?v=FWqfkUEWOTg';

  const videoId: string = getVideoId(ytVideo);

  expect(videoId).toBe('FWqfkUEWOTg');
});

const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path
const ffmpeg = require('fluent-ffmpeg')
ffmpeg.setFfmpegPath(ffmpegPath)

ffmpeg('./output/47923175-061a-4d74-a381-bb9491421e26.mp4')
  .setStartTime('00:00:03')
  .setDuration('10')
  .output('video_out.mp4')
  .on('end', function(err) {
    if(!err) { console.log('conversion Done') }
  })
  .on('error', err => console.log('error: ', err))
  .run()
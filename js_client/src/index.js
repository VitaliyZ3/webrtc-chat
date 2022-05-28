const p2p = require('socket.io-p2p')(require('socket.io-client')());
 
p2p.on('ready', function() {
  p2p.usePeerConnection = true;
  p2p.emit('peer-obj', { peerId: peerId });
});
 
// this event will be triggered over the socket transport
// until `usePeerConnection` is set to `true`
p2p.on('peer-msg', function(data) {
  console.log(data);
});
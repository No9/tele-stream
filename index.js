var Stream = require('stream').Stream;
var th = require('telehash');
var events = require('events');
var util = require('util');
var me;

function telestream (seedid) {
   events.EventEmitter.call(this);
   seedid = seedid || {};
   this.streams = {};   
   this.telehash = { define : ""};
   var that = this;
   th.init(seedid, function (err, self) {
     if(err || !self) { process.exit(1); }
     that.telehash = self;
     that.emit('open', self);
    });
}

util.inherits(telestream, events.EventEmitter);

telestream.prototype.Stream = function(name) {
   //:q
   //this.telehash;
   if(this.streams[name]) {
      return this.streams[name];
   } else {
      this.telehash.listen(name, function(err, packet, type) {
      
      });
      var stream = new Stream();
      stream.readable = stream.writeable = true;
      stream.read = function() {
      
      }
   
      stream.write = function () {
       return true; 
      }
      stream.readable = stream.writeable = true;
      this.streams[name] = stream;

      return stream
   }

}

module.exports = telestream;  

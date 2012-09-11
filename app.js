
/**
 * Module dependencies.
 */

var express = require('express')
  , app = express.createServer()
  , routes = require('./routes')
  , io = require('socket.io').listen(app);

// Use longpolling when live
if( process.env.VCAP_APP_PORT ) io.set('transports',[ 'xhr-polling' ]);

var events = [];

var pushRGB = function (time, color) {
  events.push({
    time: time,
    relative: true,
    action: function (sockets) {
      sockets.volatile.emit('change', {
        background: 'rgb('+ color.r +','+ color.g +','+ color.b +')'
      });
    }
  });
};

var fadeRGB = function (from, to, time) {

  var start_time = (new Date()).getTime();

  var start = 'rgb('+ from[0] +','+ from[1] +','+ from[2] +')'
    , finish = 'rgb('+ to[0] +','+ to[1] +','+ to[2] +')';

  events.push({
    time: 0.1,
    relative: true,
    action: function (sockets) {
      console.log('Fade started at:', start_time);
      sockets.volatile.emit('change', {
        background: start
      });
    }
  });

  var decisecs = Math.floor(time * 10);

  var diff = {
    r: to[0] - from[0],
    g: to[1] - from[1],
    b: to[2] - from[2]
  };

  var delta = {
    r: diff.r / decisecs,
    g: diff.g / decisecs,
    b: diff.b / decisecs
  };

  // console.log(decisecs, diff, delta);

  for(var d = 0; d < decisecs; d++) {

    pushRGB(0.1, {
      r: Math.floor(delta.r * d + from[0]),
      g: Math.floor(delta.g * d + from[1]),
      b: Math.floor(delta.b * d + from[2])
    });

  }

  events.push({
    time: 0.1,
    relative: true,
    action: function (sockets) {
      console.log('Fade took:', ((new Date()).getTime() - start_time) / 1000);
      console.log(decisecs, diff, delta);
      console.log('=========================================================');
      sockets.volatile.emit('change', {
        background: finish
      });
    }
  });

};

var cycle = function () {
  events.push({
    time: 0.196,
    relative: true,
    action: function (sockets) {
      sockets.volatile.emit('change', {
        background: 'hsl(0, 100%, 50%)'
      });
    }
  });

  events.push({
    time: 0.196,
    relative: true,
    action: function (sockets) {
      sockets.volatile.emit('change', {
        background: 'hsl(45, 100%, 50%)'
      });
    }
  });

  events.push({
    time: 0.196,
    relative: true,
    action: function (sockets) {
      sockets.volatile.emit('change', {
        background: 'hsl(90, 100%, 50%)'
      });
    }
  });

  events.push({
    time: 0.196,
    relative: true,
    action: function (sockets) {
      sockets.volatile.emit('change', {
        background: 'hsl(135, 100%, 50%)'
      });
    }
  });

  events.push({
    time: 0.196,
    relative: true,
    action: function (sockets) {
      sockets.volatile.emit('change', {
        background: 'hsl(180, 100%, 50%)'
      });
    }
  });

  events.push({
    time: 0.196,
    relative: true,
    action: function (sockets) {
      sockets.volatile.emit('change', {
        background: 'hsl(225, 100%, 50%)'
      });
    }
  });

  events.push({
    time: 0.196,
    relative: true,
    action: function (sockets) {
      sockets.volatile.emit('change', {
        background: 'hsl(270, 100%, 50%)'
      });
    }
  });

  events.push({
    time: 0.196,
    relative: true,
    action: function (sockets) {
      sockets.volatile.emit('change', {
        background: 'hsl(315, 100%, 50%)'
      });
    }
  });

  events.push({
    time: 0.196,
    relative: true,
    action: function (sockets) {
      sockets.volatile.emit('change', {
        background: 'hsl(360, 100%, 50%)'
      });
    }
  });
};

// IT BEGINS ===================================

events.push({
  time: 0,
  action: function (sockets) {
    sockets.volatile.emit('change', {
      background: 'black'
    });
  }
});
  
  fadeRGB([0,0,0],        [255,255,255],  1);

// Bleep bleep

events.push({
  time: 1.6,
  action: function (sockets) {
    sockets.volatile.emit('change', {
      background: 'white'
    });
  }
});

  fadeRGB([255,255,255],  [255,0,0],      4);

  fadeRGB([255,0,0],      [255,0,255],    3);

  fadeRGB([255,0,255],    [0,255,255],    2);

  fadeRGB([0,255,255],    [0,0,0],        1);

// Silence

events.push({
  time: 12.6,
  action: function (sockets) {
    sockets.volatile.emit('change', {
      background: 'black'
    });
  }
});


// Drop

events.push({
  time: 14.090,
  action: function (sockets) {
    sockets.volatile.emit('change', {
      background: 'white'
    });
  }
});
  
  events.push({
    time: 0.1,
    relative: true,
    action: function (sockets) {
      sockets.volatile.emit('change', {
        background: 'black'
      });
    }
  });
  events.push({
    time: 0.1,
    relative: true,
    action: function (sockets) {
      sockets.volatile.emit('change', {
        background: 'white'
      });
    }
  });
  events.push({
    time: 0.1,
    relative: true,
    action: function (sockets) {
      sockets.volatile.emit('change', {
        background: 'black'
      });
    }
  });
  events.push({
    time: 0.1,
    relative: true,
    action: function (sockets) {
      sockets.volatile.emit('change', {
        background: 'white'
      });
    }
  });
  events.push({
    time: 0.2,
    relative: true,
    action: function (sockets) {
      sockets.volatile.emit('change', {
        background: 'black'
      });
    }
  });
  events.push({
    time: 0.2,
    relative: true,
    action: function (sockets) {
      sockets.volatile.emit('change', {
        background: 'white'
      });
    }
  });

events.push({
  time: 16.44,
  action: function (sockets) {
    sockets.volatile.emit('change', {
      background: 'purple'
    });
  }
});

events.push({
  time: 16.86,
  action: function (sockets) {
    sockets.volatile.emit('change', {
      background: '#800'
    });
  }
});

events.push({
  time: 17.04,
  action: function (sockets) {
    sockets.volatile.emit('change', {
      background: '#f00'
    });
  }
});

events.push({
  time: 17.24,
  action: function (sockets) {
    sockets.volatile.emit('change', {
      background: 'white'
    });
  }
});
  
  events.push({
    time: 0.1,
    relative: true,
    action: function (sockets) {
      sockets.volatile.emit('change', {
        background: 'black'
      });
    }
  });
  events.push({
    time: 0.1,
    relative: true,
    action: function (sockets) {
      sockets.volatile.emit('change', {
        background: 'white'
      });
    }
  });
  events.push({
    time: 0.1,
    relative: true,
    action: function (sockets) {
      sockets.volatile.emit('change', {
        background: 'black'
      });
    }
  });
  events.push({
    time: 0.1,
    relative: true,
    action: function (sockets) {
      sockets.volatile.emit('change', {
        background: 'white'
      });
    }
  });
  events.push({
    time: 0.2,
    relative: true,
    action: function (sockets) {
      sockets.volatile.emit('change', {
        background: 'black'
      });
    }
  });
  events.push({
    time: 0.2,
    relative: true,
    action: function (sockets) {
      sockets.volatile.emit('change', {
        background: 'white'
      });
    }
  });

events.push({
  time: 18.01,
  action: function (sockets) {
    sockets.volatile.emit('change', {
      background: 'purple'
    });
  }
});
  events.push({
    time: 0.6,
    relative: true,
    action: function (sockets) {
      sockets.volatile.emit('change', {
        background: 'rgb(128, 0, 128)'
      });
    }
  });
  events.push({
    time: 0.1,
    relative: true,
    action: function (sockets) {
      sockets.volatile.emit('change', {
        background: 'rgb(200, 0, 200)'
      });
    }
  });
  fadeRGB([200,0,200], [0,0,0], 0.7);

events.push({
  time: 19.5,
  action: function (sockets) {
    sockets.volatile.emit('change', {
      background: 'purple'
    });
  }
});
  
  fadeRGB([128,0,128], [0,0,0], 0.7);

events.push({
  time: 20.35,
  action: function (sockets) {
    sockets.volatile.emit('change', {
      background: 'green'
    });
  }
});
  
  fadeRGB([0,128,0], [0,0,0], 0.75);

events.push({
  time: 21.2,
  action: function (sockets) {
    sockets.volatile.emit('change', {
      background: 'purple'
    });
  }
});
  
  fadeRGB([128,0,128], [0,0,0], 1.5);

events.push({
  time: 22.7,
  action: function (sockets) {
    sockets.volatile.emit('change', {
      background: 'purple'
    });
  }
});
  events.push({
    time: 0.4,
    relative: true,
    action: function (sockets) {
      sockets.volatile.emit('change', {
        background: 'green'
      });
    }
  });
  events.push({
    time: 0.2,
    relative: true,
    action: function (sockets) {
      sockets.volatile.emit('change', {
        background: 'rgb(200, 0, 200)'
      });
    }
  });
  events.push({
    time: 0.2,
    relative: true,
    action: function (sockets) {
      sockets.volatile.emit('change', {
        background: 'green'
      });
    }
  });
  fadeRGB([255,255,255], [0,0,0], 0.8);

events.push({
  time: 24.3,
  action: function (sockets) {
    sockets.volatile.emit('change', {
      background: 'purple'
    });
  }
});
  events.push({
    time: 0.4,
    relative: true,
    action: function (sockets) {
      sockets.volatile.emit('change', {
        background: 'green'
      });
    }
  });
  events.push({
    time: 0.2,
    relative: true,
    action: function (sockets) {
      sockets.volatile.emit('change', {
        background: 'rgb(200, 0, 200)'
      });
    }
  });
  events.push({
    time: 0.2,
    relative: true,
    action: function (sockets) {
      sockets.volatile.emit('change', {
        background: 'green'
      });
    }
  });

events.push({
  time: 25.15,
  action: function (sockets) {
    sockets.volatile.emit('change', {
      background: 'white'
    });
  }
});
  events.push({
    time: 0.1,
    relative: true,
    action: function (sockets) {
      sockets.volatile.emit('change', {
        background: 'black'
      });
    }
  });

events.push({
  time: 25.5,
  action: function (sockets) {
    sockets.volatile.emit('change', {
      background: 'white'
    });
  }
});
  events.push({
    time: 0.1,
    relative: true,
    action: function (sockets) {
      sockets.volatile.emit('change', {
        background: 'black'
      });
    }
  });

events.push({
  time: 25.9,
  action: function (sockets) {
    sockets.volatile.emit('change', {
      background: 'white'
    });
  }
});
  fadeRGB([255,255,255], [0,0,0], 0.8);


// Vocal

events.push({
  time: 26.7,
  action: function (sockets) {
    sockets.volatile.emit('change', {
      background: 'black'
    });
  }
});
  fadeRGB([0,0,0],        [255,0,0],      3.2);

  fadeRGB([255,0,0],      [255,0,255],    3.2);

  fadeRGB([255,0,255],    [0,255,255],    3.2);

  fadeRGB([0,255,255],    [0,0,0],        1);

events.push({
  time: 38.5,
  action: function (sockets) {
    sockets.volatile.emit('change', {
      background: 'black'
    });
  }
});

// UGLY

events.push({
  time: 39.2,
  action: function (sockets) {
    sockets.volatile.emit('change', {
      background: 'white'
    });
  }
});
  events.push({
    time: 0.1,
    relative: true,
    action: function (sockets) {
      sockets.volatile.emit('change', {
        background: 'black'
      });
    }
  });
  events.push({
    time: 0.1,
    relative: true,
    action: function (sockets) {
      sockets.volatile.emit('change', {
        background: 'white'
      });
    }
  });
  events.push({
    time: 0.1,
    relative: true,
    action: function (sockets) {
      sockets.volatile.emit('change', {
        background: 'black'
      });
    }
  });
  events.push({
    time: 0.1,
    relative: true,
    action: function (sockets) {
      sockets.volatile.emit('change', {
        background: 'white'
      });
    }
  });
  events.push({
    time: 0.2,
    relative: true,
    action: function (sockets) {
      sockets.volatile.emit('change', {
        background: 'black'
      });
    }
  });
  events.push({
    time: 0.2,
    relative: true,
    action: function (sockets) {
      sockets.volatile.emit('change', {
        background: 'white'
      });
    }
  });

events.push({
  time: 40,
  action: function (sockets) {
    sockets.volatile.emit('change', {
      background: 'rgb(255, 0, 0)'
    });
  }
});
  fadeRGB([255,0,0],      [0,0,0],    2.4);

events.push({
  time: 42.3,
  action: function (sockets) {
    sockets.volatile.emit('change', {
      background: 'rgb(0, 255, 0)'
    });
  }
});
  fadeRGB([0,255,0],      [0,0,0],    3.2);

events.push({
  time: 45.5,
  action: function (sockets) {
    sockets.volatile.emit('change', {
      background: 'rgb(0, 0, 255)'
    });
  }
});
  fadeRGB([0,0,255],      [0,0,0],    3.2);

events.push({
  time: 48.6,
  action: function (sockets) {
    sockets.volatile.emit('change', {
      background: 'rgb(0, 255, 0)'
    });
  }
});
  fadeRGB([255,255,255],      [0,0,0],    0.8);


events.push({
  time: 49.4,
  action: function (sockets) {
    sockets.volatile.emit('change', {
      background: 'rgb(255, 0, 0)'
    });
  }
});

events.push({
  time: 50.3,
  action: function (sockets) {
    sockets.volatile.emit('change', {
      background: 'rgb(0, 255, 0)'
    });
  }
});

events.push({
  time: 60,
  action: function (sockets) {
    sockets.volatile.emit('change', {
      background: 'rgb(0, 0, 255)'
    });
  }
});
  fadeRGB([0,0,255],      [0,0,0],    0.8);

// Chorus!

events.push({
  time: 51.8,
  action: function (sockets) {
    sockets.volatile.emit('change', {
      background: 'white'
    });
  }
});
  events.push({
    time: 0.1,
    relative: true,
    action: function (sockets) {
      sockets.volatile.emit('change', {
        background: 'black'
      });
    }
  });
  events.push({
    time: 0.1,
    relative: true,
    action: function (sockets) {
      sockets.volatile.emit('change', {
        background: 'white'
      });
    }
  });
  events.push({
    time: 0.1,
    relative: true,
    action: function (sockets) {
      sockets.volatile.emit('change', {
        background: 'black'
      });
    }
  });
  events.push({
    time: 0.1,
    relative: true,
    action: function (sockets) {
      sockets.volatile.emit('change', {
        background: 'white'
      });
    }
  });
  events.push({
    time: 0.2,
    relative: true,
    action: function (sockets) {
      sockets.volatile.emit('change', {
        background: 'black'
      });
    }
  });
  events.push({
    time: 0.2,
    relative: true,
    action: function (sockets) {
      sockets.volatile.emit('change', {
        background: 'white'
      });
    }
  });


// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'ejs');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});

// Routes

app.get('/', routes.index);

app.get('/events', function (req, res) {
  res.render('update', {events: events});
});

app.post('/events', function (req, res) {
  if( !! req.events ) {
    events = req.events;
  }
  res.send(200);
});

app.get('/trigger', function (req, res) {
  res.render('music');
});

app.get('/go', function (req, res) {

  io.sockets.emit('go');

  var last_time = 0;

  events.forEach(function (event) {

    var time = event.time;

    if( event.relative ) {
      time = last_time + event.time;
      console.log("It's relative by", event.time, "so final time is", time);
    }

    setTimeout(function() {
      event.action(io.sockets);
    }, 1000 * time);

    last_time = time;

  });

  res.send(200);

});

app.listen(process.env.VCAP_APP_PORT || 3000);
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);

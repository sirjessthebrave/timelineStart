$(document).ready(function() {
  console.log('hello world');
  //using timeline.js https://github.com/NUKnightLab/TimelineJS
  // helpful tutorial : http://www.webdesignermag.co.uk/create-stunning-timelines-with-timelinejs/
  //get window width and height
  var windowWidth = window.innerWidth;
  var windowHeight = window.innerHeight;

  //instansiate the timeline story
  createStoryJS({
      width: windowWidth,
      height: windowHeight,
      source: 'js/timeline.json',
      embed_id: 'timeline-embed'
      // start_at_end:       false,                          //OPTIONAL START AT LATEST DATE
      // start_at_slide:     '4',                            //OPTIONAL START AT SPECIFIC SLIDE
      // start_zoom_adjust:  '3',                            //OPTIONAL TWEAK THE DEFAULT ZOOM LEVEL
      // hash_bookmark:      true,                           //OPTIONAL LOCATION BAR HASHES
      // font:               'Bevan-PotanoSans',             //OPTIONAL FONT
      // debug:              true,                           //OPTIONAL DEBUG TO CONSOLE
      // lang:               'fr',                           //OPTIONAL LANGUAGE
      // maptype:            'watercolor',                   //OPTIONAL MAP STYLE
      // css:                'path_to_css/timeline.css',     //OPTIONAL PATH TO CSS
      // js:                 'path_to_js/timeline-min.js'    //OPTIONAL PATH TO JS
  });
});
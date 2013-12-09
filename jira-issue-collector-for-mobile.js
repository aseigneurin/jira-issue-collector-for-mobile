function openCollector(collectorUrl) {
  var _body = document.getElementsByTagName('body')[0];
  _body.innerHTML += '<div id="collector-background" style="position:fixed; top:0; left:0; height:100%; width:100%; background:black; opacity:.5; z-index:100001;"></div>\
    <div id="collector-container" style="position:absolute; top:5%; left:5%; width:90%; height:90%; background:white; z-index:100002; font-family: Arial,sans-serif;">\
      <form action="' + collectorUrl + '" method="POST">\
        <div style="width:100%; background:#dddddd; padding: 20px 0;">\
          <span style="font-size:1.5em; color:black; padding: 20px;">Raise a bug</span>\
        </div>\
        <div style="padding: 20px;">\
          <div>\
            <textarea class="textarea long-field" rows="10" id="collector-description" name="description" placeholder="What went wrong?" style="overflow-y: auto; height: 200px;"></textarea>\
          </div>\
          <div style="">\
            <input type="submit" value="Submit">\
            <a href="#" onclick="closeCollector()">Cancel</a>\
          </div>\
        </div>\
      </form>\
    </div>';
}

function closeCollector() {
  var collector = document.getElementById('collector-background');
  collector.parentElement.removeChild(collector);
}

window.onload = function() {
  var _body = document.getElementsByTagName('body')[0];
  _body.innerHTML += '<div id="collector-button" style="position:fixed; top:0; left:45%; width:; background:#205081; font-family: Arial,sans-serif; z-index:100000; padding: 10px;">\
    <a href="#" onclick="openCollector(collectorUrl)" style="color:white;">Raise a bug</a>\
  </div>';
}
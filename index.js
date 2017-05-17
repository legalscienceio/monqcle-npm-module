var api_host = "http://test.monqcle.com/";
var site_id = "";
request = require('request-json');
var _ = require('lodash');
var client = request.createClient(api_host);
var async = require("async");

module.exports = {
    
  /**
  * Escape special characters in the given string of html.
  *
  * @param  {String} name
  * @param  {String} display
  * @return {String}
  */
  dataset: function(name, display) {      
      var asyncTasks = [];
      if(display && display != ''){
          url = 'siteitem/' + dataset_slug + '/get_by_dataset?site=' + site_id + '&display=' + display;
      } else {
          url = 'siteitem/' + dataset_slug + '/get_by_dataset?site=' + site_id;		
      }
      console.log(url);
      //get questions_editor
      asyncTasks.push(function (callback) {
        client.get(url, function (err, res, body) {
            callback(body, null);
        });
      });
      async.parallel(asyncTasks, function (siteItem) {
        //res.send(siteItem);
        console.log(siteItem);
        return siteItem;
      });
      
      //html = "<p>Dataset</p>";
      //return String(html);
  },
    
  /**
  * Escape special characters in the given string of html.
  *
  * @param  {String} html
  * @return {String}
  */
  escape: function(html) {
    return String(html)
      .replace(/&/g, '&amp;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  },

  /**
   * Unescape special characters in the given string of html.
   *
   * @param  {String} html
   * @return {String}
   */
  unescape: function(html) {
    return String(html)
      .replace(/&amp;/g, '&')
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, ''')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>');
  }
};
var api_host = "http://test.monqcle.com/";
var site_id = "";
request = require('request-json');
var _ = require('lodash');
var client = request.createClient(api_host);
var _ = require('lodash');
var async = require("async");

module.exports = {
    
  /**
  * Escape special characters in the given string of html.
  *
  * @param  {Request} req
  * @param  {Response} res
  * @return {String}
  */
  dataset: function(name, display) {
      
      if(display){
          url = api_host + 'siteitem/' + dataset_slug + '/get_by_dataset?site=' + site_id + '&display=' + display;
      } else {
          url = api_host + 'siteitem/' + dataset_slug + '/get_by_dataset?site=' + site_id;		
      }
      
      html = "<p>Dataset</p>";
      return String(html);
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
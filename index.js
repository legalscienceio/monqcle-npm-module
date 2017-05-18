var api_host = "http://test.monqcle.com/";
var site_id = "56e805b9d6c9e75c1ac8cb12";
var _ = require('lodash');
request = require('request-json');
var client = request.createClient(api_host);
//var async = require("async");
var Promise = require('promise');
 

var exports = module.exports = {
   
  dataset: function (name, display) {
      return exports.dataset_promise(name, display)
        //.then(exports.parseResult)
        //.then(null, this.retryErrors)
        //.nodeify(callback)
        .then(function(d){ 
          //console.log(d);
          return d;
        });
  },
  dataset_siteitem: function(name, display, callback) {      
     if(display && display != ''){
          url = 'siteitem/' + name + '/get_by_dataset?site=' + site_id + '&display=' + display;
     } else {
          url = 'siteitem/' + name + '/get_by_dataset?site=' + site_id;		
     }
     
     var promise = new Promise(function (resolve, reject) {
      client.get(url, function (err, res) {
        if (err) reject(err);
        else resolve(res);
      });
    });
    
    if(typeof callback != 'undefined'){
        return Promise.resolve(promise)
        .nodeify(callback);
    } else {
        return Promise.resolve(promise);
    }
  },
  /**
  * Escape special characters in the given string of html.
  *
  * @param  {String} name
  * @param  {String} display
  * @return {String}
  */
  dataset_nodeify: function (name, display, callback) {
      return exports.dataset_promise(name, display)
        //.then(exports.parseResult)
        //.then(null, this.retryErrors)
        .nodeify(callback)
  },
  parseResult: function(result) {
      //console.log(result);
      return result;
  },
  retryErrors: function(errors) {
      console.error(errors);
      
  },    
    
  dataset_promise: function(name, display) {      
     if(display && display != ''){
          url = 'siteitem/' + name + '/get_by_dataset?site=' + site_id + '&display=' + display;
     } else {
          url = 'siteitem/' + name + '/get_by_dataset?site=' + site_id;		
     }
     
     var promise = new Promise(function (resolve, reject) {
      client.get(url, function (err, res) {
        if (err) reject(err);
        else resolve(res);
      });
    });
    
    return Promise.resolve(promise);
    //promise.then(this.onFulfilled, this.onRejected);
      
  },
    
  get_promise: function(url, name, display) {      
     var promise = new Promise(function (resolve, reject) {
      client.get(url, function (err, res) {
        if (err) reject(err);
        else resolve(res);
      });
    });
    return Promise.resolve(promise);
      
  },
  onFulfilled: function(result) {
      //console.log("Promise resolved");
      //console.log(result);
      return result;
  },
  onRejected: function(result) {
      console.error("Promise rejected");
      console.error(result);
      return null;
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
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>');
  }
};













///NOtes and crap


      //get questions_editor
//      asyncTasks.push(function (callback) {
//        client.get(url, function (err, res, body) {
//            callback(body, null);
//        });
//      });
//      async.parallel(asyncTasks, function (siteItem) {
//        //res.send(siteItem);
//        console.log(siteItem);
//        return siteItem;
//      });
//      
      //html = "<p>Dataset</p>";
      //return String(html);
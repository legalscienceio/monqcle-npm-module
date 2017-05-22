var fs = require('fs');
var config = JSON.parse(fs.readFileSync('config.json', 'utf8'));
var api_host = config.host;
var site_id = config.site;
var _ = require('lodash');
request = require('request-json');
var client = request.createClient(api_host);
//var async = require("async");
var Promise = require('promise');
 

var exports = module.exports = {
   
    assets: function (callback) {
      
      url = 'site/' + site_id + '/zget';
      if(typeof callback != 'undefined'){
        return Promise.resolve(exports.get_promise(url))
        .nodeify(callback);
      } else {
          return exports.get_promise(url)
          //return exports.dataset_promise(name, display)
            //.then(exports.parseResult)
            //.then(null, this.retryErrors)
            //.nodeify(callback)
            .then(function(d){ 
              //console.log(d);
              return d;
            });
      }
    },
    dataset: function (name, display, callback) {
      
      if(display && display != ''){
          url = 'siteitem/' + name + '/get_by_dataset?site=' + site_id + '&display=' + display;
      } else {
          url = 'siteitem/' + name + '/get_by_dataset?site=' + site_id;		
      }
      if(typeof callback != 'undefined'){
        return Promise.resolve(exports.get_promise(url))
        .nodeify(callback);
      } else {
          return exports.get_promise(url)
          //return exports.dataset_promise(name, display)
            //.then(exports.parseResult)
            //.then(null, this.retryErrors)
            //.nodeify(callback)
            .then(function(d){ 
              //console.log(d);
              return d;
            });
      }
    },
    
    questions: function (name, is_legacy, callback) {
      
      if(is_legacy && is_legacy != '' && (is_legacy == true || is_legacy == "true" )){
          url = 'questions/' + name + '?use_lawatlas=true';
      } else {
          url= 'api/v3.0/questions/' + name;	
      }
      if(typeof callback != 'undefined'){
        return Promise.resolve(exports.get_promise(url))
        .nodeify(callback);
      } else {
          return exports.get_promise(url)
          //return exports.dataset_promise(name, display)
            //.then(exports.parseResult)
            //.then(null, this.retryErrors)
            //.nodeify(callback)
            .then(function(d){ 
              //console.log(d);
              return d;
            });
      }
    },
    
    query: function (name, config, params, callback) {
      
        //is_legacy, state, jurisdictions, start_year, end_year
        url = "api/v3.0/dataset/query/" + name + "?site_key=" + site_id;
        if ("use_lawatlas" in config) {
            url= url + '&use_lawatlas=true';
        } 
        if ("state" in config) {
            url= url + '&state=' + config.state;
        } 
        if("start_year" in config){
            url= url + '&StartYear=' + config.start_year;
        }
        if("end_year" in config){
            url= url + '&EndYear=' + config.end_year;
        }
        if("jurisdictions" in config){
			url= url + '&jurisdictions[]=' + config.jurisdictions;
        }
        
      
        if(typeof callback != 'undefined'){
            return Promise.resolve(exports.get_promise(url, params, "post"))
            .nodeify(callback);
        } else {
            return exports.get_promise(url, params, "post")
            .then(function(d){ 
              return d;
            });
        }
    },
    
    query_form: function (name, id, is_legacy, is_migrated, callback) {
      
        url = "api/v2.0/query/form/" + name + "/" + id + "?site_key=" + site_id;
        if(is_legacy && is_legacy != '' && (is_legacy == true || is_legacy == "true" )){
          url = url + '&is_lawatlas=true&use_lawatlas=true';
        }
        if(is_migrated && is_migrated != '' && (is_migrated == true || is_migrated == "true" )){
          url = url + '&is_migrated_lawatlas_dataset=true';
        }
        //console.log("Form URL");
        //console.log(url);
        if(typeof callback != 'undefined'){
            return Promise.resolve(exports.get_promise(url))
            .nodeify(callback);
        } else {
            return exports.get_promise(url)
            .then(function(d){ 
              return d;
            });
      }
    },
    
    display: function (name, display_id, preview_id, callback) {
      
      url = 'previewer/' + display_id + '/get?dataset=' + name + '&preview_id=' + preview_id;
      if(typeof callback != 'undefined'){
        return Promise.resolve(exports.get_promise(url))
        .nodeify(callback);
      } else {
          return exports.get_promise(url)
          //return exports.dataset_promise(name, display)
            //.then(exports.parseResult)
            //.then(null, this.retryErrors)
            //.nodeify(callback)
            .then(function(d){ 
              //console.log(d);
              return d;
            });
      }
    },
    
    law: function (name, id, callback) {
        url = 'lawGiver/' + name + '/' + id;
        if(typeof callback != 'undefined'){
            return Promise.resolve(exports.get_promise(url, {}, "post"))
            .nodeify(callback);
        } else {
            return exports.get_promise(url, {}, "post")
            .then(function(d){ 
              return d;
            });
        }
    },
    
    jurisdiction: function (id, callback) {
      url = 'jurisdiction/getOne?id=' + id;
      if(typeof callback != 'undefined'){
        return Promise.resolve(exports.get_promise(url))
        .nodeify(callback);
      } else {
          return exports.get_promise(url)
          //return exports.dataset_promise(name, display)
            //.then(exports.parseResult)
            //.then(null, this.retryErrors)
            //.nodeify(callback)
            .then(function(d){ 
              //console.log(d);
              return d;
            });
      }
    },
    
    jurisdiction_site_items: function (show_medals, callback) {
        if(show_medals){
            url = 'jurisdictionsiteitem/secondall';      
        } else {
            url = 'jurisdictionsiteitem/all';
        }
      
      if(typeof callback != 'undefined'){
        return Promise.resolve(exports.get_promise(url))
        .nodeify(callback);
      } else {
          return exports.get_promise(url)
          //return exports.dataset_promise(name, display)
            //.then(exports.parseResult)
            //.then(null, this.retryErrors)
            //.nodeify(callback)
            .then(function(d){ 
              //console.log(d);
              return d;
            });
      }
    },
    
    page: function (name, callback) {
      url = 'page/' + name + '/slug';
      if(typeof callback != 'undefined'){
        return Promise.resolve(exports.get_promise(url))
        .nodeify(callback);
      } else {
          return exports.get_promise(url)
          //return exports.dataset_promise(name, display)
            //.then(exports.parseResult)
            //.then(null, this.retryErrors)
            //.nodeify(callback)
            .then(function(d){ 
              //console.log(d);
              return d;
            });
      }
    },
    
    taxonomies: function (root, callback) {
      url = 'taxonomy/' + root + '/50status/items';
      if(typeof callback != 'undefined'){
        return Promise.resolve(exports.get_promise(url))
        .nodeify(callback);
      } else {
          return exports.get_promise(url)
          //return exports.dataset_promise(name, display)
            //.then(exports.parseResult)
            //.then(null, this.retryErrors)
            //.nodeify(callback)
            .then(function(d){ 
              //console.log(d);
              return d;
            });
      }
    },
    
    taxonomy: function (id, callback) {
      url = 'taxonomy/' + id + '/get';
      if(typeof callback != 'undefined'){
        return Promise.resolve(exports.get_promise(url))
        .nodeify(callback);
      } else {
          return exports.get_promise(url)
          //return exports.dataset_promise(name, display)
            //.then(exports.parseResult)
            //.then(null, this.retryErrors)
            //.nodeify(callback)
            .then(function(d){ 
              //console.log(d);
              return d;
            });
      }
    },
  
    related: function (name, callback) {
      url = 'taxonomy/' + name + '/related';
      if(typeof callback != 'undefined'){
        return Promise.resolve(exports.get_promise(url))
        .nodeify(callback);
      } else {
          return exports.get_promise(url)
          //return exports.dataset_promise(name, display)
            //.then(exports.parseResult)
            //.then(null, this.retryErrors)
            //.nodeify(callback)
            .then(function(d){ 
              //console.log(d);
              return d;
            });
      }
    },
    
    
    //Common functions
    get_promise: function(url, params, method) {
        if(typeof params == 'undefined' || params == null){
            params = {};
        }
        if(method == "post"){
            
            var promise = new Promise(function (resolve, reject) {
              client.post(url, params, function (err, res, body) {
                if (err) reject(err);
                else resolve(res);
              });
            });
            
        } else {
        
            var promise = new Promise(function (resolve, reject) {
              client.get(url, function (err, res) {
                if (err) reject(err);
                else resolve(res);
              });
            });
        }
     
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
    }
};


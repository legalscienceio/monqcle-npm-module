var fs = require('fs');
var config;
try {
    config = JSON.parse(fs.readFileSync('config.json', 'utf8'));
} catch (err) {
    if (err.code === 'ENOENT') {
      console.error('File not found!  You must add config.json to the root of this project.');
    } else {
      throw err;
    }
}
var api_host = config.host;
var site_id = config.site;
var _ = require('lodash');
request = require('request-json');
var client = request.createClient(api_host);
//var async = require("async");
var Promise = require('promise');
 

(function() {

 var MonqcleApi = (function() {
   
    var MonqcleApi = function(options) {
      //console.log("MonqcleApi constructor");
    };
    
    MonqcleApi.prototype.assets = function assets(callback) {
      
      url = 'site/' + site_id + '/zget';
      var mapi = new MonqcleApi({});
          
      if(typeof callback != 'undefined'){
        return Promise.resolve(mapi.get_promise(url))
        .nodeify(callback);
      } else {
          return mapi.get_promise(url)
          //return MonqcleApi.dataset_promise(name, display)
            //.then(MonqcleApi.parseResult)
            //.then(null, this.retryErrors)
            //.nodeify(callback)
            .then(function(d){ 
              //console.log(d);
              return d;
            });
      }
    };
    
    MonqcleApi.prototype.dataset = function dataset(name, display, callback) {
      
      if(display && display != ''){
          url = 'siteitem/' + name + '/get_by_dataset?site=' + site_id + '&display=' + display;
      } else {
          url = 'siteitem/' + name + '/get_by_dataset?site=' + site_id;		
      }
      var mapi = new MonqcleApi({});           
          
      if(typeof callback != 'undefined'){
        return Promise.resolve(mapi.get_promise(url))
        .nodeify(callback);
      } else {
          return mapi.get_promise(url)
          //return MonqcleApi.dataset_promise(name, display)
            //.then(MonqcleApi.parseResult)
            //.then(null, this.retryErrors)
            //.nodeify(callback)
            .then(function(d){ 
              //console.log(d);
              return d;
            });
      }
    };
    
    MonqcleApi.prototype.questions = function questions(name, is_legacy, callback) {
      
      if(is_legacy && is_legacy != '' && (is_legacy == true || is_legacy == "true" )){
          url = 'questions/' + name + '?use_lawatlas=true';
      } else {
          url= 'api/v3.0/questions/' + name;	
      }
      var mapi = new MonqcleApi({});
          
      if(typeof callback != 'undefined'){
        return Promise.resolve(mapi.get_promise(url))
        .nodeify(callback);
      } else {
          return mapi.get_promise(url)
          //return MonqcleApi.dataset_promise(name, display)
            //.then(MonqcleApi.parseResult)
            //.then(null, this.retryErrors)
            //.nodeify(callback)
            .then(function(d){ 
              //console.log(d);
              return d;
            });
      }
    };
    
    MonqcleApi.prototype.query = function query(name, config, params, version, callback) {
        var mapi = new MonqcleApi({});
        
        if(typeof version == 'undefined' || version == ''){
            version = "v3.0";
        }
        //is_legacy, state, jurisdictions, start_year, end_year
        url = "api/" + version + "/dataset/query/" + name + "?site_key=" + site_id;
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
            return Promise.resolve(mapi.get_promise(url, params, "post"))
            .nodeify(callback);
        } else {
            return mapi.get_promise(url, params, "post")
            .then(function(d){ 
              return d;
            });
        }
    };
    
    MonqcleApi.prototype.query_form = function query_form(name, id, is_legacy, is_migrated, callback) {
      
        url = "api/v2.0/query/form/" + name + "/" + id + "?site_key=" + site_id;
        if(is_legacy && is_legacy != '' && (is_legacy == true || is_legacy == "true" )){
          url = url + '&is_lawatlas=true&use_lawatlas=true';
        }
        if(is_migrated && is_migrated != '' && (is_migrated == true || is_migrated == "true" )){
          url = url + '&is_migrated_lawatlas_dataset=true';
        }
        //console.log("Form URL");
        //console.log(url);
        var mapi = new MonqcleApi({});
        if(typeof callback != 'undefined'){
            return Promise.resolve(mapi.get_promise(url))
            .nodeify(callback);
        } else {
            
            return mapi.get_promise(url)
            .then(function(d){ 
              return d;
            });
      }
    };
    
    MonqcleApi.prototype.display = function display(name, display_id, preview_id, callback) {
      
      url = 'previewer/' + display_id + '/get?dataset=' + name + '&preview_id=' + preview_id;
      var mapi = new MonqcleApi({});
      if(typeof callback != 'undefined'){
        return Promise.resolve(mapi.get_promise(url))
        .nodeify(callback);
      } else {
          
          return mapi.get_promise(url)
          //return MonqcleApi.dataset_promise(name, display)
            //.then(MonqcleApi.parseResult)
            //.then(null, this.retryErrors)
            //.nodeify(callback)
            .then(function(d){ 
              //console.log(d);
              return d;
            });
      }
    };
    
    MonqcleApi.prototype.law = function law(name, id, callback) {
        url = 'lawGiver/' + name + '/' + id;
        var mapi = new MonqcleApi({});
        if(typeof callback != 'undefined'){
            return Promise.resolve(mapi.get_promise(url, {}, "post"))
            .nodeify(callback);
        } else {
            return mapi.get_promise(url, {}, "post")
            .then(function(d){ 
              return d;
            });
        }
    };
    
    MonqcleApi.prototype.jurisdiction = function jurisdiction(id, callback) {
      url = 'jurisdiction/getOne?id=' + id;
      var mapi = new MonqcleApi({});
      if(typeof callback != 'undefined'){
        return Promise.resolve(mapi.get_promise(url))
        .nodeify(callback);
      } else {
          
          return mapi.get_promise(url)
          //return MonqcleApi.dataset_promise(name, display)
            //.then(MonqcleApi.parseResult)
            //.then(null, this.retryErrors)
            //.nodeify(callback)
            .then(function(d){ 
              //console.log(d);
              return d;
            });
      }
    };
    
    MonqcleApi.prototype.jurisdiction_site_items = function jurisdiction_site_items(show_medals, callback) {
        if(show_medals){
            url = 'jurisdictionsiteitem/secondall';      
        } else {
            url = 'jurisdictionsiteitem/all';
        }
      var mapi = new MonqcleApi({});
      if(typeof callback != 'undefined'){
        return Promise.resolve(mapi.get_promise(url))
        .nodeify(callback);
      } else {
          
          return mapi.get_promise(url)
          //return MonqcleApi.dataset_promise(name, display)
            //.then(MonqcleApi.parseResult)
            //.then(null, this.retryErrors)
            //.nodeify(callback)
            .then(function(d){ 
              //console.log(d);
              return d;
            });
      }
    };
    
    MonqcleApi.prototype.page = function page(name, callback) {
      url = 'page/' + name + '/slug';
      var mapi = new MonqcleApi({});
      if(typeof callback != 'undefined'){
        return Promise.resolve(mapi.get_promise(url))
        .nodeify(callback);
      } else {
          return mapi.get_promise(url)
          //return MonqcleApi.dataset_promise(name, display)
            //.then(MonqcleApi.parseResult)
            //.then(null, this.retryErrors)
            //.nodeify(callback)
            .then(function(d){ 
              //console.log(d);
              return d;
            });
      }
    };
    
    MonqcleApi.prototype.taxonomies = function taxonomies(root, callback) {
      url = 'taxonomy/' + root + '/50status/items';
      var mapi = new MonqcleApi({});
      if(typeof callback != 'undefined'){
        return Promise.resolve(mapi.get_promise(url))
        .nodeify(callback);
      } else {
          return mapi.get_promise(url)
          //return MonqcleApi.dataset_promise(name, display)
            //.then(MonqcleApi.parseResult)
            //.then(null, this.retryErrors)
            //.nodeify(callback)
            .then(function(d){ 
              //console.log(d);
              return d;
            });
      }
    };
    
    MonqcleApi.prototype.taxonomy = function taxonomy(id, callback) {
      url = 'taxonomy/' + id + '/get';
      var mapi = new MonqcleApi({});
      if(typeof callback != 'undefined'){
        return Promise.resolve(mapi.get_promise(url))
        .nodeify(callback);
      } else {
          
          return mapi.get_promise(url)
          //return MonqcleApi.dataset_promise(name, display)
            //.then(MonqcleApi.parseResult)
            //.then(null, this.retryErrors)
            //.nodeify(callback)
            .then(function(d){ 
              //console.log(d);
              return d;
            });
      }
    };
  
    MonqcleApi.prototype.related = function related(name, callback) {
      url = 'taxonomy/' + name + '/related';
      var mapi = new MonqcleApi({});
      if(typeof callback != 'undefined'){
        return Promise.resolve(mapi.get_promise(url))
        .nodeify(callback);
      } else {
          
          return mapi.get_promise(url)
          //return MonqcleApi.dataset_promise(name, display)
            //.then(MonqcleApi.parseResult)
            //.then(null, this.retryErrors)
            //.nodeify(callback)
            .then(function(d){ 
              //console.log(d);
              return d;
            });
      }
    };
    
    
    //Common functions
    MonqcleApi.prototype.get_promise = function get_promise(url, params, method) {
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
      
    };
    
    MonqcleApi.prototype.onFulfilled = function onFulfilled(result) {
      //console.log("Promise resolved");
      //console.log(result);
      return result;
    };
    
    MonqcleApi.prototype.onRejected = function onRejected(result) {
      console.error("Promise rejected");
      console.error(result);
      return null;
    };
    
    
    return MonqcleApi;
})();
    
  if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = MonqcleApi;
  }
  else {
    if (typeof define === 'function' && define.amd) {
      define([], function() {
        return MonqcleApi;
      });
    }
    else {
      window.MonqcleApi = MonqcleApi;
    }
  }

})();

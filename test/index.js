var should = require('chai').should(),
    expect = require('chai').expect,
    MonqcleApi = require('../index'),
    monqcle_api = new MonqcleApi(),
    assets = monqcle_api.assets,
    page = monqcle_api.page,
    taxonomies = monqcle_api.taxonomies,
    taxonomy = monqcle_api.taxonomy,
    related = monqcle_api.related,
    jurisdiction = monqcle_api.jurisdiction,
    jurisdiction_site_items = monqcle_api.jurisdiction_site_items,
    questions = monqcle_api.questions,
    query = monqcle_api.query,
    query_form = monqcle_api.query_form,
    law = monqcle_api.law,
    display = monqcle_api.display,
    dataset = monqcle_api.dataset;

//describe('#dataset', function() {
//  it('prints dataset info', function() {
//      //dataset("biosimilars-laws","").should.equal('<p>Dataset</p>');
//      dataset_info = dataset("biosimilars-laws","");
//      //console.log(dataset_info);
//      expect(dataset_info).to.not.be.undefined;
//      expect(dataset_info).to.not.be.null;
//
//      expect(dataset_info).to.have.all.keys(['id', 'previews']);
//  });
//});

describe('Dataset', function() {
    
  describe('#assets', function() {
    this.timeout(10000);
    it('should return assets without error', function(done) {
      var a = assets();
      a.then(function(){ done() });
    });
  });
    
  describe('#page', function() {
    this.timeout(10000);
    it('should return page without error', function(done) {
      var p = page("pew");
      p.then(function(){ done() });
    });
  });
    
  describe('#taxonomies', function() {
    this.timeout(10000);
    it('should return taxonomies without error', function(done) {
      var t = taxonomies("58c2c1d8f7d1b60f0b334876");
      t.then(function(){ done() });
    });
  });
    
  describe('#taxonomy', function() {
    this.timeout(10000);
    it('should return taxonomy without error', function(done) {
      var t = taxonomy("58c2c1d8f7d1b60f0b334876");
      t.then(function(){ done() });
    });
  });
    
  describe('#related', function() {
    this.timeout(10000);
    it('should return related taxonomy without error', function(done) {
      var t = related("biosimilars-laws");
      t.then(function(){ done() });
    });
  });
    
  describe('#jurisdiction', function() {
    this.timeout(10000);
    it('should return jurisdiction getOne without error', function(done) {
      var j = jurisdiction("54f8b21c6eb07acf618b4619");
      j.then(function(){ done() });
    });
  });
    
  describe('#jurisdiction_site_items', function() {
    this.timeout(10000);
    it('should return jurisdiction site items without error', function(done) {
      var j = jurisdiction_site_items(true);
      j.then(function(){ done() });
    });
  });
    
  describe('#questions', function() {
    this.timeout(10000);
    it('should return questions for a dataset without error', function(done) {
      var q = questions("biosimilars-laws",false);
      q.then(function(){ done() });
    });
  });
  
  describe('#query', function() {
    this.timeout(10000);
    it('should return dataset query without error', function(done) {
      var q = query("biosimilars-laws",{start_year:"2002"}, {});
      q.then(function(){ done() });
    });
  });
    
//  describe('#query_form', function() {
//    this.timeout(20000);
//    it('should return dataset query form without error', function(done) {
//      var q = query_form("biosimilars-laws","last", false, false);
//      q.then(function(){ done() });
//    });
//  });
    
  describe('#query_form', function() {
      it('prints dataset query form using nodeify of promise', function() {
          //dataset("biosimilars-laws","").should.equal('<p>Dataset</p>');
          query_form("biosimilars-laws","last", false, false, function(form_info){

              //console.log(dataset_info);
              expect(form_info).to.not.be.undefined;
              expect(form_info).to.not.be.null;
              //expect(form_info).to.have.all.keys(['id', 'previews']);
              //form_info['id'].should.equal("56f924f0d6c9e7cf2f422eb4");
          });

      });
  });
    
  describe('#law', function() {
    this.timeout(10000);
    it('should return related law without error', function(done) {
      var l = law("biosimilars-laws", "569fb88ff7d1b67c173348a0");
      l.then(function(){ done() });
    });
  });
    
  describe('#display', function() {
    this.timeout(10000);
    it('should return display for a dataset without error', function(done) {
      var d = display("biosimilars-laws","580a5c56f7d1b6ba7f09a19a", "57f66e68f7d1b66f0ca9bcbd");
      d.then(function(){ done() });
    });
  });
    
  describe('#dataset', function() {
    this.timeout(10000);
    it('should return dataset without error', function(done) {
      var ds = dataset("biosimilars-laws","");
      ds.then(function(){ done() });
    });
  });
    
  describe('#dataset_nodeify', function() {
      it('prints dataset_siteitem info using nodeify of promise', function() {
          //dataset("biosimilars-laws","").should.equal('<p>Dataset</p>');
          dataset("biosimilars-laws","", function(dataset_info){

              //console.log(dataset_info);
              expect(dataset_info).to.not.be.undefined;
              expect(dataset_info).to.not.be.null;
              expect(dataset_info).to.have.all.keys(['id', 'previews']);
              dataset_info['id'].should.equal("56f924f0d6c9e7cf2f422eb4");
          });

      });
  });
    
//  
//  describe('#siteitem_nodeify', function() {
//      it('prints dataset_siteitem info using nodeify of promise', function() {
//          //dataset("biosimilars-laws","").should.equal('<p>Dataset</p>');
//          dataset_siteitem("biosimilars-laws","", function(dataset_info){
//
//              //console.log(dataset_info);
//              expect(dataset_info).to.not.be.undefined;
//              expect(dataset_info).to.not.be.null;
//              expect(dataset_info).to.have.all.keys(['id', 'previews']);
//              dataset_info['id'].should.equal("56f924f0d6c9e7cf2f422eb4");
//          });
//
//      });
//    });
//    
//  describe('#dataset_promise', function() {
//    this.timeout(10000);
//    it('should return dataset without error', function(done) {
//      var ds = dataset_promise("biosimilars-laws","");
//      ds.then(function(){ done() });
//    });
//  });
   
//  describe('#dataset_nodeify', function() {
//      it('prints dataset info using nodeify of promise', function() {
//          //dataset("biosimilars-laws","").should.equal('<p>Dataset</p>');
//          dataset_nodeify("biosimilars-laws","", function(dataset_info){
//
//              //console.log(dataset_info);
//              expect(dataset_info).to.not.be.undefined;
//              expect(dataset_info).to.not.be.null;
//              expect(dataset_info).to.have.all.keys(['id', 'previews']);
//              dataset_info['id'].should.equal("56f924f0d6c9e7cf2f422eb4");
//          });
//
//      });
//    });
    
});

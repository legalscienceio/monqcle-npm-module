var should = require('chai').should(),
    expect = require('chai').expect,
    monqcle_api = require('../index'),
    escape = monqcle_api.escape,
    unescape = monqcle_api.unescape,
    dataset = monqcle_api.dataset,
    dataset_nodeify = monqcle_api.dataset_nodeify;

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

//dataset_nodeify
describe('#dataset_nodeify', function() {
  it('prints dataset info using nodeify of promise', function() {
      //dataset("biosimilars-laws","").should.equal('<p>Dataset</p>');
      dataset_nodeify("biosimilars-laws","", function(dataset_info){
      
          //console.log(dataset_info);
          expect(dataset_info).to.not.be.undefined;
          expect(dataset_info).to.not.be.null;
          //expect(dataset_info).to.have.all.keys(['id', 'previews']);
      });
      
  });
});


describe('#escape', function() {
  it('converts & into &amp;', function() {
    escape('&').should.equal('&amp;');
  });

  it('converts " into &quot;', function() {
    escape('"').should.equal('&quot;');
  });

  it('converts < into &lt;', function() {
    escape('<').should.equal('&lt;');
  });

  it('converts > into &gt;', function() {
    escape('>').should.equal('&gt;');
  });
});

describe('#unescape', function() {
  it('converts &amp; into &', function() {
    unescape('&amp;').should.equal('&');
  });

  it('converts &quot; into "', function() {
    unescape('&quot;').should.equal('"');
  });

  it('converts &lt; into <', function() {
    unescape('&lt;').should.equal('<');
  });

  it('converts &gt; into >', function() {
    unescape('&gt;').should.equal('>');
  });
});
var should = require('chai').should(),
    monqcle_api = require('../index'),
    escape = monqcle_api.escape,
    unescape = monqcle_api.unescape,
    dataset = monqcle_api.dataset;

describe('#dataset', function() {
  it('prints dataset info', function() {
      //dataset("biosimilars-laws","").should.equal('<p>Dataset</p>');
      expect(dataset("biosimilars-laws","")).to.have.all.keys(['id', 'previews']);
  });
});

describe('#escape', function() {
  it('converts & into &amp;', function() {
    escape('&').should.equal('&amp;');
  });

  it('converts " into &quot;', function() {
    escape('"').should.equal('&quot;');
  });

  it('converts ' into &#39;', function() {
    escape(''').should.equal('&#39;');
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

  it('converts &#39; into '', function() {
    unescape('&#39;').should.equal(''');
  });

  it('converts &lt; into <', function() {
    unescape('&lt;').should.equal('<');
  });

  it('converts &gt; into >', function() {
    unescape('&gt;').should.equal('>');
  });
});
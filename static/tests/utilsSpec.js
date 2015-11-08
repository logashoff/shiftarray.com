describe('utils tests', function() {
  'use strict';

  var utils = using('utils');

  it('createNode', function() {
    var el = utils.createNode('div', {
      'id': 'foo',
      'class': 'my class'
    });

    expect(el.nodeName).toBe('DIV');
    expect(el.nodeType).toBe(Node.ELEMENT_NODE);
    expect(el.getAttribute('id')).toBe('foo');
    expect(el.getAttribute('class')).toBe('my class');
  });

  it('replaceHtmlEntites', function() {
    var html = '&lt;foo&gt;';
    expect(utils.replaceHtmlEntites(html)).toBe('<foo>');
  });

  it('timeAgo', function() {
    expect(utils.timeAgo(new Date(1970, 0, 1))).toBe('Jan 1, 1970');
  });

  it('limitString', function() {
    var str = 'Lorem ipsum dolor sit amet';

    var limitedStr = utils.limitString(str, 6);
    expect(limitedStr).toBe('Lor...');
    expect(limitedStr.length).toBe(6);

    limitedStr = utils.limitString(str, 10);
    expect(limitedStr).toBe('Lorem i...');
    expect(limitedStr.length).toBe(10);

    limitedStr = utils.limitString(str, str.length);
    expect(limitedStr).toBe(str);
    expect(limitedStr.length).toBe(str.length);

    limitedStr = utils.limitString(str, 17);
    expect(limitedStr).toBe('Lorem ipsum do...');
    expect(limitedStr.length).toBe(17);
  });
});

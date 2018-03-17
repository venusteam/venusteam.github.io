(function() {
  function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
  };
  function addSearchItem(doc) {
    var container = $('#result-list');
    var html = '';
    html += `<li class="result-item"><h3><a href=${doc.url}>${doc.title_stext} </a></h3><p>${doc.summary}</p></li>`;
    container.append(html);
  }
  var menuTitle = $('#menu-title');
  var searchText = $('#search-name');
  var title = getUrlParameter('title') || '搜索';


  var currentQuery = getUrlParameter('q');
  var offset = getUrlParameter('offset') || 0;
  var limit = getUrlParameter('offset') || 20;

  menuTitle.text(title);
  searchText.text(currentQuery);

  var baseURL = location.origin;
  var requestURL = `${baseURL}/_search`;

  $.get(requestURL, { q: currentQuery, offset: offset, limit: limit }, function(res) {
    var docs = res.hits;

    docs.forEach(function(doc) {
      addSearchItem(doc);
    });
    $('#search-count').text(res.totalHits);
    if (res.totalHits < 1) {
      $('#empty-view').text('暂无搜索结果');
    }
  })
})()

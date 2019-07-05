---
layout: null
---

var idx = lunr(function () {
  this.field('title')
  this.field('excerpt')
  this.field('categories')
  this.field('tags')
  this.ref('id')

  this.pipeline.remove(lunr.trimmer)

  for (var item in store) {
    this.add({
      title: store[item].title,
      excerpt: store[item].excerpt,
      categories: store[item].categories,
      tags: store[item].tags,
      id: item
    })
  }
});

console.log( jQuery.type(idx) );

$(document).ready(function() {
  $('input#search').on('keyup', function () {
    var resultdiv = $('#results');
    var query = $(this).val().toLowerCase();
    var result =
      idx.query(function (q) {
        query.split(lunr.tokenizer.separator).forEach(function (term) {
          q.term(term, { boost: 100 })
          if(query.lastIndexOf(" ") != query.length-1){
            q.term(term, {  usePipeline: false, wildcard: lunr.Query.wildcard.TRAILING, boost: 10 })
          }
          if (term != ""){
            q.term(term, {  usePipeline: false, editDistance: 1, boost: 1 })
          }
        })
      });
    resultdiv.empty();
    if(result.length > 0)
      resultdiv.prepend('<p class="results__found">'+result.length+' {{ site.data.ui-text[site.locale].results_found | default: "Result(s) found" }}</p>');
    for (var item in result) {
      var ref = result[item].ref;
      // console.log(ref);
      // console.log(store[ref]);
      if(true){
        var searchitem =
              `<div class="card card-lift--hover shadow border-0 my-5 mx-2">

                <div class="card-body py-4">
                  <a href="${store[ref].url}" class="text-primary text-uppercase"> ${store[ref].title} </a>
                  <a class="pull-right">
                    <span class="fa fa-star star-checked"></span>
                    <span class="fa fa-star star-checked"></span>
                    <span class="fa fa-star star-checked"></span>
                    <span class="fa fa-star "></span>
                    <span class="fa fa-star "></span>
                  </a>
                  <div>
                    <a href="#" class="badge badge-pill badge-primary">${store[ref].tags[0]}</a>
                    <a href="#" class="badge badge-pill badge-success">${store[ref].categories[0]}</a>
                  </div>
                  <p class="description mt-3">
                    ${store[ref].excerpt.split(" ").splice(0,20).join(" ")+'...'}
                  </p>
                  <div class="text-center">
                    <!-- <img src="https://marcinszalek.pl/wp-content/uploads/2018/05/ff_16.gif" class="card-img-w50"> -->
                  </div>

                </div>
              </div>
              `;




          // '<div class="list__item">'+
          //   '<article class="archive__item" itemscope itemtype="https://schema.org/CreativeWork">'+
          //     '<h2 class="archive__item-title" itemprop="headline">'+
          //       '<a href="'+store[ref].url+'" rel="permalink">'+store[ref].title+'</a>'+
          //     '</h2>'+
          //     '<div class="archive__item-teaser">'+
          //       '<img src="'+store[ref].teaser+'" alt="">'+
          //     '</div>'+
          //     '<p class="archive__item-excerpt" itemprop="description">'+store[ref].excerpt.split(" ").splice(0,20).join(" ")+'...</p>'+
          //   '</article>'+
          // '</div>';
      }
      // else{
    	//   var searchitem =
      //     '<div class="list__item">'+
      //       '<article class="archive__item" itemscope itemtype="https://schema.org/CreativeWork">'+
      //         '<h2 class="archive__item-title" itemprop="headline">'+
      //           '<a href="'+store[ref].url+'" rel="permalink">'+store[ref].title+'</a>'+
      //         '</h2>'+
      //         '<p class="archive__item-excerpt" itemprop="description">'+store[ref].excerpt.split(" ").splice(0,20).join(" ")+'...</p>'+
      //       '</article>'+
      //     '</div>';
      // }
      resultdiv.append(searchitem);
    }
  });
});

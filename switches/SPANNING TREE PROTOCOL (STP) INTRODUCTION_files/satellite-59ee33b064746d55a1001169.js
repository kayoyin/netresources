_satellite.pushAsyncScript(function(event, target, $variables){
  setTimeout(function(){
  window.isbnDiv = document.getElementsByTagName('article')[0].children[0].getAttribute('data-isbn');

  if(window.isbnDiv != null){
    if(window.isbnDiv.length > 0){
      window.ISBN = window.isbnDiv;
    }
    else{
      window.ISBN = document.getElementsByTagName('article')[0].children[1].innerHTML.split('isbn')[1].split('");')[0].split(',')[1].replace('"','').replace(' ','');
    }
  }
  else{
    window.ISBN = document.getElementsByTagName('article')[0].children[1].innerHTML.split('isbn')[1].split('");')[0].split(',')[1].replace('"','').replace(' ','');
  }
  

  
window.url = location.pathname; 

window.urlArray = window.urlArray || [];
window.isNewArticle = true;

for(i=0;i<window.urlArray.length;i++){
    if(window.url==window.urlArray[i]){
        window.isNewArticle = false;
    }
}

if(window.isNewArticle){
    _satellite.setVar('ISBN',window.ISBN)
    _satellite.track('articleView');
    window.urlArray.push(window.url);
}},500);
});

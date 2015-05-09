<<<<<<< HEAD
п»ї!function($, W, D, M, wc, u7d){	// 
    'use strict';
    var
        phjs = '/gap/js/',	// path for js
        phcss = '/gap/css/'; // path for css
        
    function loadDynamic (src, type){ // function trivial lazy loading js/css
        var node=document.createElement(type ? "link" : "script");
        node = document.getElementsByTagName("head")[0].appendChild(node);
        /*
        *   if exist second parameter, then on css.
        */
        
        if(type){
            node.setAttribute("rel", "stylesheet");
            node.setAttribute("media", "all");
        }
        node.setAttribute("type","text/" + (type ? "css" : "javascript"));
        node.setAttribute(type ? "href" : "src", src);
    }
	
=======
!function($, W, D, M, wc, u7d){
    'use strict';
    var
        phjs = '/gap/js/',
        phcss = '/gap/css/';
        
    function loadDynamic (src,type){
        var node=document.createElement(type?"link":"script");
        node = document.getElementsByTagName("head")[0].appendChild(node);
        /*
        *   если передаем второй параметр, то это таблица стилей
        */
        
        if(type){
            node.setAttribute("rel","stylesheet");
            node.setAttribute("media","all");
        }
        node.setAttribute("type","text/"+(type?"css":"javascript"));
        node.setAttribute(type?"href":"src",src);
    }
        
>>>>>>> 4c5165cce342426aa84c73a1cb77d9bbfe290d58
    $(W).on('load',function(){
        $('[class^=dynload]').each(
            function(){
                var gr = /dynload\S+-(\S+)/.exec(this.className)[1].split('_');
                /*
<<<<<<< HEAD
                *   class	= 'dynload-gap-jsfilename_cssfilename'
                *   gr	= ['jsfilename','cssfilename'];
                */
                
                gr.length > 1 && loadDynamic(phcss+gr[1]+'.css', !0);
=======
                *   class = 'dynload-gap-jsfilename_cssfilename'
                *   gr = ['jsfilename','cssfilename'];
                */
                
                gr.length > 1 && loadDynamic(phcss+gr[1]+'.css',!0);
>>>>>>> 4c5165cce342426aa84c73a1cb77d9bbfe290d58
                loadDynamic(phjs+gr[0]+'.js');
            });
        });
}(jQuery, window, document, Math, window.console);
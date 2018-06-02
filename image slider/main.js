(function(){

    var i = 0,
        images = [];

    images[0]= "imgs/img-1.jpg";
    images[1]= "imgs/img-2.jpg";
    images[2]= "imgs/img-3.jpg";
    images[3]= "imgs/img-4.jpg";

    function changeImg(count){
        
        i = i + count;
        if(i < 0){
            i = images.length-1; 
        }
        if( i > images.length-1){
            i=0;
        }
        document.getElementById("image-slider").src =images[i];
    }

    document.getElementById("previous").addEventListener('click',function(e){
        var count = -1;
        changeImg(count);
    });
    document.getElementById("next").addEventListener('click',function(e){
        var count = 1;
        changeImg(count);
    });
	
   changeImg(0);

})();

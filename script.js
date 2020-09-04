
        $('#timer').countdown('2021-01-01',function(event){  
            var $clock = $(this).html(event.strftime(''+
                '<div><span class="sp">%D</span><span class="sp">Days</span></div>'+
                '<div><span class="br">%H</span><span class="br">Hours</span></div>'+
                '<div><span class="br">%M</span><span class="br">Minutes</span></div>'+
                '<div><span class="br">%S</span><span class="br">Seconds</span></div>'
                ))
            });
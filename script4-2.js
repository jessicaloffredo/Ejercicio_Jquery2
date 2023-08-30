$(document).ready(function() {

		
				let $p = $('p')
				texto = $p.text().trim()
				palabras = texto.split(' ') 
				spans = palabras.map(p => `<span>${p}</span> `)
  
  				$p.html(spans);
  
  				$p.on('click', 'span', function() {
					$(this).css('text-shadow','2px 2px #000000');
  				});
    
			
	
  })
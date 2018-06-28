$('body').on('keypress',function validate(event) 
	{
		if(event.keyCode==13 && event.target.tagName=='INPUT')
			{	
				var input=document.querySelector('input').value;
				if(parseInt(input)<1 || parseInt(input)>150)
					{
						alert("not valid");
						$('#symbol').text('');
						$('#a').text('');
						$('#full-name').text('');
					}

				// var a1="1";
				// var sym1="H";
				// var full1="hydrogen";
				// var a2="1";
				// var sym2="H";
				// var full2="hydrogen";

				// if(parseInt(input)==1){
				// 	$('#symbol').text(sym1);
				// 	$('#a').text(a1);
				// 	$('#full-name').text(full1);
				// 	}
					
				// if(parseInt(input)==2){
				// 	$('#symbol').text(sym2);
				// 	$('#a').text(a2);
				// 	$('#full-name').text(full2);
				// 	}

				var a=['1','2','3','4','5'];
				var sym=['H','Li','Mg','Al','Zn'];
				var full=['hydrogen','lithium','magnasium','aluminium','zink'];

				// if(parseInt(input)==1){
				// 	$('#symbol').text(sym[0]);
				// 	$('#a').text(a[0]);
				// 	$('#full-name').text(full[0]);
				// 	}
				// if(parseInt(input)==2){
				// 	$('#symbol').text(sym[1]);
				// 	$('#a').text(a[1]);
				// 	$('#full-name').text(full[1]);
				// 	}

				i=parseInt(input)-1;
				atomic_number(input,i);
				function atomic_number(input,i){
				
					if(parseInt(input)==parseInt(i)+1){
					$('#symbol').text(sym[i]);
					$('#a').text(a[i]);
					$('#full-name').text(full[i]);
					
					
					// $('input').css('width',((input.getAttribute('placeholder').length + 1) * 8) + 'px');
				}
			}

			$('.auto .morden').css('width',(this.value + 'px'));
				
		}
	})

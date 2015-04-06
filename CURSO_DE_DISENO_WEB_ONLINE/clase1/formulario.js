var $form = $(".formulario"),
	$titulo = $("#titulo"),
	$url= $("#url"),
	$button = $("#mostrar_form"),
	$list = $("#contenido"),
	$post = $(".item").first();


function mostrarFormulario(){
	$form.slideToggle();
	return false;
}
function agregarPos(){
	var url = $url.val(),
		titulo = $titulo.val();
	
	$clone = $post.clone();

	$clone.find('.titulo_item a')
			  .text(titulo)
			  .attr('href',url);
	
	$clone.hide();
	$list.prepend($clone);
	$clone.fadeIn();

	return false;
}

$button.click(mostrarFormulario);

$form.on('submit',agregarPos);


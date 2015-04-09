var geo = navigator.geolocation;
var opciones;
function geo_error(){
	alert("No se encuenra posicion");
}
function geo_exito(location){
	console.log(location);
	var lat = location.coords.latitude;
	var longi = location.coords.longitude;
	var mapa = new Image();
	mapa.src = "http://maps.googleapis.com/maps/api/staticmap?zoon=13&size=200x200&sensor=false&center="+lat+","+longi;
	$("#geo").append(mapa);
}
geo.getCurrentPosition(geo_exito,geo_error,opciones);
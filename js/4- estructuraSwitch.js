let estacion = prompt(
  "Ingrese su estacion del año preferida: 1- verano, 2-primavera, 3-otoño, 4 invierno"
);

switch (estacion) {
  case "1":
    document.write("El usuario selecciono la estacion de verano");
    break;
  case "2":
    document.write("El usuario selecciono la estacion de primavera");
    break;
  case "3":
    document.write("El usuario selecciono la estacion de otoño");
    break;
  case "4":
    document.write("El usuario selecciono la estacion de invierno");
    break;
  default:
    document.write("El usuario selecciono una opcion erronea");
}

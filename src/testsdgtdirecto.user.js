// ==UserScript==
// @name       Tests DGT Directo
// @namespace  https://raw.githubusercontent.com/juanpescador/AceleradorTestsDGT
// @version    0.1
// @description  Accesos directos de teclado para los test de la DGT. Las
// teclas A, B y C seleccionan las respectivas opciones. La Flecha derecha
// pasa a la siguiente pregunta, flecha izquierda a la pregunta anterior.
// Las teclas J, K y L seleccionan una respuesta y pasan a la siguiente
// pregunta.
// El permiso unsafeWindow es necesario para poder llamar a las funciones
// del JavaScript de la página de la DGT, necesario para seleccionar
// respuestas y pasar de pregunta.
// @downloadURL https://raw.githubusercontent.com/juanpescador/AceleradorTestsDGT/master/src/testsdgtdirecto.user.js
// @updateURL https://raw.githubusercontent.com/juanpescador/AceleradorTestsDGT/master/src/testsdgtdirecto.user.js
// @match      https://sedeapl.dgt.gob.es/WEB_EXAM_AUTO/examen/examen.jsp
// @copyright  2014 John Fisher
// @grant unsafeWindow
// ==/UserScript==

//    Script de Tampermonkey para rellenar tests teóricos de la DGT más rápida
//    y cómodamente. Se puede acceder a los tests desde la siguiente URL:
//    https://sedeapl.dgt.gob.es/WEB_EXAM_AUTO/service/TiposExamenesServlet
//    Copyright (C) 2014  John Fisher
//
//    This program is free software; you can redistribute it and/or modify
//    it under the terms of the GNU General Public License as published by
//    the Free Software Foundation; either version 2 of the License, or
//    (at your option) any later version.
//
//    This program is distributed in the hope that it will be useful,
//    but WITHOUT ANY WARRANTY; without even the implied warranty of
//    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
//    GNU General Public License for more details.
//
//    You should have received a copy of the GNU General Public License along
//    with this program; if not, write to the Free Software Foundation, Inc.,
//    51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.

/**
  * Escoge la respuestaElegida (0, 1 ó 2) y pasa a la siguiente pregunta
  * después de una pausa de 500ms. Esta pausa es para que el usuario pueda
  * comprobar que se ha escogido la opción que deseaba.
  */
function escogerRespuestaYSeguir(respuestaElegida) {
    unsafeWindow.responderPreguntaActiva(respuestaElegida);
    setTimeout(function () {unsafeWindow.preguntaSiguiente();}, 500);
}

function keyUpListener(e) {
    switch (e.keyCode) {
        // Selección respuestas.
        case 65:
            // Tecla A, seleccionar respuesta a)
            unsafeWindow.responderPreguntaActiva(0);
            break;
        case 66:
            // Tecla B, seleccionar respuesta b)
            unsafeWindow.responderPreguntaActiva(1);
            break;
        case 67:
            // Tecla C, seleccionar respuesta c)
            unsafeWindow.responderPreguntaActiva(2);
            break;
        // Flechas
        case 37:
            // Flecha izquierda, pasar a anterior pregunta
            unsafeWindow.preguntaAnterior();
            break;
        case 39:
            // Flecha derecha, pasar a siguiente pregunta
            unsafeWindow.preguntaSiguiente();
            break;
            
        // 'Avanzado', seleccionar respuesta y pasar a siguiente pregunta.
        // H (teclado Dvorak)
        case 72:
        // J
        case 74:
            escogerRespuestaYSeguir(0);
            break;
        // T (teclado Dvorak)
        case 84:
        // K
        case 75:
            escogerRespuestaYSeguir(1);
            break;
        // N (teclado Dvorak)
        case 78:
        // L
        case 76:
            escogerRespuestaYSeguir(2);
            break;
        // Pregunta anterior/siguiente ergonómico para accesos directos avanzados.
        // Solo aplica para disposición Dvorak ya que hay un conflicto con QWERTY,
        // la H en Dvorak escoge la primera respuesta.
        // D (teclado Dvorak)
        case 68:
            unsafeWindow.preguntaAnterior();
            break;
        // S (teclado Dvorak)
        case 83:
            unsafeWindow.preguntaSiguiente();
            break;
        default:
            break;
    }
}
document.addEventListener('keyup', keyUpListener, false);

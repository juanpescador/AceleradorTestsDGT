// ==UserScript==
// @name       Tests DGT Directo
// @namespace  https://sedeapl.dgt.gob.es/
// @version    0.1
// @description  Accesos directos de teclado para los test de la DGT. Tecla A
// marca respuesta A, tecla B respuesta B, tecla C respuesta C. Flecha derecha
// pasa a la siguiente pregunta, flecha izquierda a la pregunta anterior.
// Las teclas J, K y L seleccionan una respuesta y pasan a la siguiente
// pregunta.
// El permiso unsafeWindow es necesario para poder llamar a las funciones
// del JavaScript de la página de la DGT, necesario para seleccionar
// respuestas y pasar de pregunta.
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
			
		// Avanzado, seleccionar respuesta y pasar a siguiente pregunta.
		// H
		case 72:
			unsafeWindow.responderPreguntaActiva(0);
			unsafeWindow.preguntaSiguiente();
			break;
		// T
		case 84:
			unsafeWindow.responderPreguntaActiva(1);
			unsafeWindow.preguntaSiguiente();
			break;
		// N
		case 78:
			unsafeWindow.responderPreguntaActiva(2);
			unsafeWindow.preguntaSiguiente();
			break;
        default:
            break;
		// Pregunta anterior/siguiente ergonómico para accesos directos avanzados.
		// D
		case 68:
            // Flecha izquierda, pasar a anterior pregunta
            unsafeWindow.preguntaAnterior();
            break;
		// S
		case 83:
            // Flecha derecha, pasar a siguiente pregunta
            unsafeWindow.preguntaSiguiente();
            break;
    }
}
document.addEventListener('keyup', keyUpListener, false);

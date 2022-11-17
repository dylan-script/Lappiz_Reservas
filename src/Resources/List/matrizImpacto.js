setTimeout(() => {
	var campo = 'a89adfd2-c2a1-45f0-95a0-5e3250bbb988'
sessionStorage.Probabilidad = getFieldValue(campo)
console.log(sessionStorage.Probabilidad)
setValor(sessionStorage.Probabilidad, sessionStorage.Impacto)
}, 1000)

setTimeout(() => {
	var campo = '1290237b-12e6-43a6-9d5d-4c1fe0bbe925'
sessionStorage.Impacto = getFieldValue(campo)
console.log(sessionStorage.Impacto)
setValor(sessionStorage.Probabilidad, sessionStorage.Impacto)
}, 1000)

function setValor(probabilidad, impacto){
	console.log('Ejecutando...')
	let valor = 'Indefinido'
	//Casi Cierto, Probable, Posible, Poco Probable, Raro
  //Catastrófico, Mayor, Moderado, Menor, Insignificante
		if(probabilidad == 'Casi Cierto'){
			if(impacto == 'Catastrófico' || impacto == 'Mayor' || impacto == 'Moderado'){
				valor = 'Extremo'
			}else{
				valor = 'Alto'
			}
		}else if(probabilidad == 'Probable'){
			if(impacto == 'Catastrófico' || impacto == 'Mayor'){
				valor = 'Extremo'
			}else if(impacto == 'Moderado' || impacto == 'Menor'){
				valor = 'Alto'
      }else{
				valor = 'Moderado'
      }
		}else if(probabilidad == 'Posible'){
			if(impacto == 'Catastrófico' || impacto == 'Mayor'){
				valor = 'Extremo'
			}else if(impacto == 'Moderado'){
				valor = 'Alto'
      }else if(impacto == 'Menor'){
				valor = 'Moderado'
      }else{
				valor = 'Bajo'
      }
		}else if(probabilidad == 'Poco Probable'){
			if(impacto == 'Catastrófico'){
				valor = 'Extremo'
			}else if(impacto == 'Mayor'){
				valor = 'Alto'
      }else if(impacto == 'Moderado'){
				valor = 'Moderado'
      }else{
				valor = 'Bajo'
      }
		}else if(probabilidad == 'Raro'){
			if(impacto == 'Catastrófico' || impacto == 'Mayor'){
				valor = 'Alto'
			}else if(impacto == 'Moderado'){
				valor = 'Moderado'
      }else{
				valor = 'Bajo'
      }
		}
			setFieldValue(sessionStorage.Resultado, valor);
}
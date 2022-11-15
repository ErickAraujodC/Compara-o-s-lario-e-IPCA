const rlsync = require('readline-sync');
 
const array = [
    { wage: 510.00,	  year: 2010, ipca: 5.91  },
    { wage: 545.00,	  year: 2011, ipca: 6.50  },
    { wage: 622.00,	  year: 2012, ipca: 5.84  },
    { wage: 678.00,	  year: 2013, ipca: 5.91  },
    { wage: 724.00,	  year: 2014, ipca: 6.41  },
    { wage: 788.00,	  year: 2015, ipca: 10.67 },
    { wage: 880.00,	  year: 2016, ipca: 6.29  },
    { wage: 937.00,	  year: 2017, ipca: 2.95  },
    { wage: 954.00,	  year: 2018, ipca: 3.75  },
    { wage: 998.00,	  year: 2019, ipca: 4.31  },
    { wage: 1045.00,  year: 2020, ipca: 4.52  }
]

const option_1 = () => {
    
    for (const value of array){
        let wage = value.wage
        let year = value.year

        console.log(`Salário R$${wage.toFixed(2).replace(".", ",")}  ano: ${year}`)
        console.log("")
    }
}

const option_2 = () => {
    for (const value of array){
        let year = value.year
        let ipca = value.ipca
    
        console.log(`Ano de ${year}: Taxa ${ipca}%`)
        console.log("")
    }
}

const option_3 = () => {
    for ( let i = 0; i <= array.length-1; i++){
        let year = array[i].year

        let wage = array[i].wage
        let growthRage
        let growthRageFormated
        
        let ipca = array[i].ipca
        let ipcaRage

        if( i > 0){
            let wagePrevious = array[i-1].wage
            let difference = wage - wagePrevious

            growthRage = (difference / wagePrevious) * 100;
            growthRageFormated = growthRage.toFixed(2).replace(".",",")+"%"

            let ipcaPrevious = array[i-1].ipca

            if ( ipca > ipcaPrevious){
                let ipcaUp = ipca - ipcaPrevious
                ipcaRage = `Crescimento de ${ipcaUp.toFixed(2).replace(".",",")}%`
    
            } else if ( ipca < ipcaPrevious){
                let ipcaLow = ipcaPrevious - ipca 
                ipcaRage = `Diminuição de ${ipcaLow.toFixed(2).replace(".",",")}%`
            }

        } else{
            growthRageFormated = "-";
            ipcaRage = "-"
        }

        console.log(`Ano: ${year}`)
        console.log(`Crescimento de sálario: ${growthRageFormated}`)
        console.log(`IPCA: ${ipcaRage}`)
        console.log("")
    
    }
}

let out = false

while(!out){
    const options = `
    BEM VINDO AO SISTEMA DE CÁLCULO DE CRESCIMENTO DE SÁLARIO E INFLAÇÃO

1 - Listar o histórico do salário mínimo
2 - Listar o histórico da taxa IPCA (inflação)
3 - Comparar e listar a porcentagem de crescimento salarial com a inflação(IPCA) `
    console.log(options)
    console.log()

    let user_choose = rlsync.question("Digite o número da sua escolha: ")

    if (user_choose == 999){
    console.log("Encerrando programa, até breve!!!")
        out = true
    } else if (user_choose == 1){
        option_1()    
    } else if (user_choose == 2){
        option_2() 
    } else if (user_choose == 3){
        option_3() 
    } else {
        console.log("OPCÃO INVÁLIDA, TENTE NOVAMENTE")
    }
    
}
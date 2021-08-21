//This function is used to update the amount of extra configaration area.
function extraCostAttach(id, cost){
    const element = document.getElementById(id)
    element.innerText = cost
}

// This function is used to calculate and update total amount in both place.
function calculateTotal(){
    const total = document.getElementById('total-price')
    const totalMega = document.getElementById('total-price-Mega')
    const bestPrice = parseInt(document.getElementById('best-price').innerText)
    const extraMamoryCost = parseInt(document.getElementById('extra-mamory-cost').innerText)
    const extraStorageCost = parseInt(document.getElementById('extra-storage-cost').innerText)
    const deliveryCharge = parseInt(document.getElementById('delivery-charge').innerText)
    const sum = bestPrice + extraMamoryCost + extraStorageCost + deliveryCharge
    total.innerText = sum
    totalMega.innerText = sum
}

/*
     Bellow this comment is our main code that I have done according to event delegation sytem instead of creating event listeners for each button. to emprove the performance, I have applied 'switch' statement. I think creating event listener for each button is a little bit static way to handle the events.
*/

document.getElementById('right-part').addEventListener('click', function(e){
    let element = e.target.tagName
    if(element === "BUTTON"){
        let id = e.target.id
        switch (id){
        
        // this case will be executed when 8gb Memory button is clicked
            case 'btn-8gb':
                extraCostAttach('extra-mamory-cost', 0)
                calculateTotal()
                break
        // this case will be executed when 16gb Memory button is clicked
            case 'btn-16gb':
                extraCostAttach('extra-mamory-cost', 180)
                calculateTotal()
                break
        
        // this case will be executed when 256gb storage button is clicked
            case 'btn-256gb':
                extraCostAttach('extra-storage-cost', 0)
                calculateTotal()
                break

        // this case will be executed when 512gb storage button is clicked
            case 'btn-512gb':
                extraCostAttach('extra-storage-cost', 100)
                calculateTotal()
                break
        // this case will be executed when 1tb storage button is clicked
            case 'btn-1tb':
                extraCostAttach('extra-storage-cost', 180)
                calculateTotal()
                break

        // This case is used to update the delevery charge according to normal delevery button 
            case 'btn-delivery-free':
                extraCostAttach('delivery-charge', 0)
                calculateTotal()
                break
        
        // This case is used to update the delevery charge according to fast delevery button  
            case 'btn-delivery-charged':
                extraCostAttach('delivery-charge', 20)
                calculateTotal()
                break
        
        // This case is to reduce 20% of total amount according to Promo Code.
            case 'promo-btn':
                const promoCodeField = document.getElementById('promo-input')
                const promoCode = promoCodeField.value
                if(promoCode === 'stevekaku'){
                    const totalMega = document.getElementById('total-price-Mega')
                    const totalMegaValue = parseInt(totalMega.innerText)
                    const discount = totalMegaValue/100*20
                    totalMega.innerText = totalMegaValue - discount
                    promoCodeField.value = ''
                }
                break
        }
    }
})

/**********************************************************************************
* Solution bellow is consist of 'if statement' according to event delegation system.
**********************************************************************************/

// document.getElementById('right-part').addEventListener('click', function(e){
//     let element = e.target.tagName
//     if(element === "BUTTON"){
//         let id = e.target.id
//         const total = document.getElementById('total-price')

//         if(id === 'btn-8gb') {
//             extraCostAttach('extra-mamory-cost', 0)
//             calculateTotal()
//         }
//         else if(id === 'btn-16gb'){
//             extraCostAttach('extra-mamory-cost', 180)
//             calculateTotal()
//         } 
//         else if (id === 'btn-256gb'){
//             extraCostAttach('extra-storage-cost', 0)
//             calculateTotal()
//         }
//         else if (id === 'btn-512gb'){
//             extraCostAttach('extra-storage-cost', 100)
//             calculateTotal()
//         }
//         else if (id === 'btn-1tb'){
//             extraCostAttach('extra-storage-cost', 180)
//             calculateTotal()
//         }
//         else if (id === 'btn-delivery-free'){
//             extraCostAttach('delivery-charge', 0)
//             calculateTotal()
//         }
//         else if (id === 'btn-delivery-charged'){
//             extraCostAttach('delivery-charge', 20)
//             calculateTotal()
//         }
//         else if (id === 'promo-btn'){
//             const promoCodeField = document.getElementById('promo-input')
//             const promoCode = promoCodeField.value
//             if(promoCode === 'stevekaku'){
//                 const totalMega = document.getElementById('total-price-Mega')
//                 const totalMegaValue = parseInt(totalMega.innerText)
//                 const discount = totalMegaValue/100*20
//                 totalMega.innerText = discount
//                 promoCodeField.innerText = discount
//                 promoCodeField.value = ''
//             }
//         }
//     }
// })
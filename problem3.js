

const createCouponTracker = (couponCode, maxUsage) => {
    let usagesCount = 0
    return (inputCode) => {
        if(inputCode !== couponCode) {
            return 'Invalid Coupon Code'
        }

        
        if (usagesCount >= maxUsage) {
            return 'Coupon limit exceeded'
        }
        
        usagesCount ++
        const ugesLeft =  maxUsage - usagesCount

        return (`Coupon Applied Successfully!  Uses left : ${ugesLeft}`)
    }
}

const eid2026 = createCouponTracker('EID2026' , 4)

console.log(eid2026('EID2026'))
console.log(eid2026('EID2026'))
console.log(eid2026('EID2026'))
console.log(eid2026('EID2026'))
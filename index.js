let num = 100

const snafu = ['0','1','2','1=','1-','10','11','12','2=','2-']
    
let snafuNum = ''
let boo = false

function swapNumber(num) {
    boo = true
    let strNum = String(num)
    console.log(num)
    console.log(snafuNum)
    
    if(boo ) {
        
        if(strNum.endsWith('6') || strNum.endsWith('1')) {
            snafuNum = '1' + snafuNum 
            if (strNum.endsWith('6')) {
            num = num - 1
            return swapNumber(num)
            } else {
                num = num - 1
                return swapNumber(num)
            }
        } else if(strNum.endsWith('7') || strNum.endsWith('2')) {
            snafuNum = '2' + snafuNum
            if (strNum.endsWith('7')) {
                num = num - 2
                return swapNumber(num)
                } else {
                    num = num -2
                    return swapNumber(num)
                }
        } else if(strNum.endsWith('8') || strNum.endsWith('3')) {
            snafuNum = '=' + snafuNum 
            if (strNum.endsWith('8')) {
                num = num + 2
                return swapNumber(num)
                } else {
                    num = num + 2
                    return swapNumber(num)
                }
        }
        else if(strNum.endsWith('9') || strNum.endsWith('4')) {
            snafuNum = '-' + snafuNum
            if (strNum.endsWith('9')) {
                num = num + 1
                return swapNumber(num)
                } else {
                    num = num + 1
                    return swapNumber(num)
                }
        }else  {
            
            snafuNum = '0' + snafuNum 
            num = num/5
        
            if(num>=10){
                //snafuNum = snafuNum + '0'
                return swapNumber(num)
            } else {
                    snafuNum = snafu[num] + snafuNum
                    boo = false
                    return snafuNum
            }
        }
    }
}
console.log(swapNumber(num))
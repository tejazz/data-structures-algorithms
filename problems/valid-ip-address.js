// https://leetcode.com/problems/validate-ip-address/

var validIPAddress = function(IP) {
    let count = IP.includes('.') ? IP.split('.').length : IP.split(':').length;
    let isValid = true;
    
    if (count === 4) {
        // IPv4
        let ipArr = IP.includes('.') ? IP.split('.') : IP.split(':');
        
        for (let i = 0; i < ipArr.length; i++) {
            if (parseInt(ipArr[i]) > 255 || (ipArr[i][0] === '0' && ipArr[i][1]) || !(/^\d+$/.test(ipArr[i]))) {
                isValid = false;
                break;
            }
        }
        
        return isValid ? 'IPv4' : 'Neither';
    } else if (count === 8) {
        // IPv6
        let ipArr = IP.includes('.') ? IP.split('.') : IP.split(':');
            
        for (let i = 0; i < ipArr.length; i++) {
        if ((ipArr[i].length < 1 || ipArr[i].length > 4) || (/[g-zG-Z]+/).test(ipArr[i])) {
                isValid = false;
                break;
            }
        }
        
        return isValid ? 'IPv6' : 'Neither';
        
    } else {
        return 'Neither';
    }
};

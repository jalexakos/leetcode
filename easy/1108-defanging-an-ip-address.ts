// from https://leetcode.com/problems/defanging-an-ip-address/description/

function defangIPaddr(address: string): string {
    return address.replaceAll('.','[.]');
};

// runtime 67th percentile
// memory 86th percentile
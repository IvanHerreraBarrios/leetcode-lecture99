var groupAnagrams = function(strs) {
    let hash = new Map()
    for(let i=0; i < strs.length;i++){
        let key = strs[i].split('').sort().join('')
        let value = strs[i]
        if(!hash[key]){
            hash[key] = []
        }
        hash[key].push(value)
    }

    return Object.values(hash);
};
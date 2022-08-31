module.exports ={
    count : function (_amount){
        let result = '';
        for (let i = 1; i <= _amount; i++) {
            
            result += '  🐑  : ' + i;
        }
        return result;
    }
}
define("Globals", [], function(){
	
	function stripString (s) {
        if (/^\".*\"$/.test(s)){
            return s.match(/^\"(.*)\"$/)[1];
        } else {
            return s;
        }
    }

    function convertForStrFunction(val){
        if (_.isString(val)){
            return stripString(val);
        }

        if (_.isArray(val)){
            var mapped = _.map(val, function (value, key, list) {
                return convertForStrFunction(value);
            });

            return "["+mapped.join(',')+"]";
        }

        return val;
    }

    return {
        DEFAULT_RESOLUTION: 16,
        DEFAULT_2D_RESOLUTION: 16,
        FN_DEFAULT: 0,
        FS_DEFAULT: 2.0,
        FA_DEFAULT: 12.0,
        module_stack: [],
        context_stack: [],
        stripString: stripString,
        convertForStrFunction: convertForStrFunction
    }
});
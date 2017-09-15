  export function enforceNumber(opts) {
    for (var key in opts) {
      if (opts.hasOwnProperty(key)) {
        if (typeof opts[key] === 'undefined' || isNaN(parseFloat(opts[key]))) {
          throw new Error(key + ' must be a number.');
        }
      }
    }
  }

  export function getColor(value) {
    return Number(value) > 0 ? ('green') :
           Number(value) < 0 ? ('red') : ('');
  }

  export function round(value, decimals) {
    return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
  }

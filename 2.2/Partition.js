function partitionOn(pred, items) {
    var truths = items.filter(pred);
    var falses = items.filter(function(a){
      return !pred(a)
    });
    items.length = 0;
    items.push.apply(items, falses.concat(truths));
    return falses.length;
  }

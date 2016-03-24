// March 24, 2016 Challenge
// Given an integer array with some finite number of values, find the minimum difference between any two elements in the array.

function closestPairs (arr) {
    var container = [];
	  var mini = Number.MAX_VAL;
    var sortedA = arr.sort(function(a, b) {
    	return a - b;
    });
    for (var i = 0; i < sortedA.length - 1; i++) {
        var currentD = sortedA[i + 1] - sortedA[i];
        if (currentD < mini) {
        	mini = currentD;
        }
    }
    for (var j = 0; j < sortedA.length - 1; j++) {
    	var sortedE = sortedA[j + 1] - sortedA[j];
        if (mini == sortedE) {
            container.push(sortedA[j + 1], sortedA[j]);
        }
    }
    var sortedRes = container.sort(function (a, b) {
        return a - b;
    });
    return sortedRes;
}

/*
 * @module currying
 */

(function () {
	/*
   * pure functional programming implementation of currying function
   */
	function currying(curryingFunciton, parameter) {
		return Function("return " + curryingFunciton.toString() + ".apply(null,[" + JSON.stringify(parameter) + "].concat([].slice.call(arguments)))");
	}
	/*
   * ECMAScript 5
   */
  function curryingFunciton (a,b) {
    return [a,b];
  }
  curryingFunciton.bind(null,1)(2);

	/*
   * Common realization in javascript frameworks
   */
	function bind(curryingFunciton, parameter) {
		return function () {
			var args = [].slice.call(arguments);
			return curryingFunciton.apply(curryingFunciton, [parameter].concat(args));
		};
	}
} ());
